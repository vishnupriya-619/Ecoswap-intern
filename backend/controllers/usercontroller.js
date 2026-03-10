const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const router=express.Router()
const upload=require("../services/imageservices.js")
const User=require("../models/userschema.js")
const userProducts=require("../models/userproductschema.js")
const Buy=require("../models/buyproductschema.js")
const orgProduct=require("../models/productschema.js")
const SwapRequest=require("../models/swaprequestschema.js")
router.post("/register",upload.single("Profile_pic"),async(req,res)=>{
    const{userName,email,mobile,locality,district,state,password}=req.body
    const hashPassword=await bcrypt.hashSync(password,10)
    const newUser=new User({
        userName,
        email,
        mobile,
        locality,
        district,
        state,
        password:hashPassword,
        profilepic:req.file && req.file?.filename
        
    })
    await newUser.save()
    res.send({message:"User Created",newUser})
})

router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        res.status(404).send({message:"No such user exist"})
    }
    else{
        const iscrtpassword=bcrypt.compareSync(password,user.password)
        if(iscrtpassword){
            const token=jwt.sign({id:user._id},process.env.JWT_TOKEN)
            res.send({message:"User logged in successfully",user,token})
        }
        else{
            res.status(400).send({message:"Incorrect password"})
        }
    }
    
})

router.get("/profile",async(req,res)=>{
    const token = req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const user=await User.findOne({"_id":decoded.id})
    res.send({message:"User profile",user})
})


router.put("/updateprofile",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const{userName,email,mobile,locality,district,state}=req.body
    await User.findByIdAndUpdate(decoded.id,{
        UserName,
        email,
        mobile,
        locality,
        district,
        state
    })
    res.send({message:"updated"})
})

router.get("/userproductview",async(req,res)=>{
      const token = req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const userproducts=await userProducts.find({"userId":decoded.id})
   
    if(!userproducts){
        return  res.status(404).send({message:"No products"})
    }
  
        res.send({message:"User Products",userproducts})
   
})

router.post("/buy",async(req,res)=>{
    const{productId,quantity}=req.body
    const token = req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const item=await orgProduct.findById(productId)
    if(!item)
    {
       return res.status(400)
    }
    if(item.quantity<=0)
    {
        return res.status(400)
    }
    const newBuy=new Buy({
        productId,
        userId:decoded.id,
        quantity
    })
    await newBuy.save()
    item.quantity=item.quantity-quantity
    await item.save()

    res.send({message:"User Buy",newBuy})
})

router.get("/orders",async(req,res)=>{
      const token = req.headers.authorization.slice(7)
      const decoded=jwt.verify(token,process.env.JWT_TOKEN)
      const buyproducts=await Buy.find({"userId":decoded.id}).populate("productId")
         if(!buyproducts){
             return  res.status(404).send({message:"No products"})
         }   
         res.send({message:"User buy Products",buyproducts})
})

router.get("/uservieworgprdct",async(req,res)=>{
      const token = req.headers.authorization.slice(7)
      const decoded=jwt.verify(token,process.env.JWT_TOKEN)
      const orgproduct=await orgProduct.find({"organizationId":decoded.id})
        if(!orgproduct){
             return  res.status(404).send({message:"No products"})
        }
  
         res.send({message:"Organization Products",orgproduct})
})

router.get("/userswapitemview",async(req,res)=>{
      const token = req.headers.authorization.slice(7)
      const decoded=jwt.verify(token,process.env.JWT_TOKEN)
      const userswap=await userProducts.find({userId:{$ne:decoded.id}})
      res.send({message:"User Swap",userswap})
})

router.post("/userrequest",async(req,res)=>{
    const{productId,requestitem}=req.body
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
const newrequest=new SwapRequest({
        productId,
        userId:decoded.id,
        status:"Pending",
        requestitem
    })
    await newrequest.save()
    res.send({message:"User Created",newrequest})
})

router.get("/getproduct",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const getproduct=await userProducts.find({userId:decoded.id}).select("productName")
     res.send({message:" User Products",getproduct})
})

router.get("/userswaprequest",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const swaprequestview=await SwapRequest.find({status:"Pending","userId":decoded.id}) .populate("productId")
    res.send({message:" User Products",swaprequestview})
})

router.patch("/accept",async(req,res)=>{
    const applicationid = req.body.applicationid
    const swapapprove=await SwapRequest.findByIdAndUpdate(applicationid,{Approved:true})
    res.send({
        message:"Accepted"
    })

})
router.patch("/reject",async(req,res)=>{
    const applicationid = req.body.applicationid
    const swapreject=await SwapRequest.findByIdAndUpdate(applicationid,{Approved:false})
    res.send({
        message:"Rejected"
    })

})

router.get("/acceptrequest",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const accepthistory=await SwapRequest.find({userId:decoded.id}).populate("productId requestitem")
     res.send({message:" Accept History",accepthistory})
})

module.exports=router