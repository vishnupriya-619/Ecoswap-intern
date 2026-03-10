const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const router=express.Router()
const upload=require("../services/imageservices.js")
const Organization=require("../models/organizationschema.js")
const Buy=require("../models/buyproductschema.js")
router.post("/register",upload.single("Profile_pic"),async(req,res)=>{
    const{organizationName,email,mobile,locality,district,state,password}=req.body
    const hashPassword=await bcrypt.hashSync(password,10)
    const newOrganization=new Organization({
        organizationName,
        email,
        mobile,
        locality,
        district,
        state,
        password:hashPassword,
        profilepic:req.file && req.file?.filename
        
    })
    await newOrganization.save()
    res.send({message:"Organization Created",newOrganization})
})

router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    const organization=await Organization.findOne({email})
    if(!organization){
        res.status(404).send({message:"No such organization exist"})
    }
    else{
        if(!organization.Activated){
            return res.status(404).send({message:"Organization is not activated"})
        }
        const iscrtpassword=bcrypt.compareSync(password,organization.password)
        if(iscrtpassword){
            const token=jwt.sign({id:organization._id},process.env.JWT_TOKEN)
            res.send({message:"Organization logged in successfully",organization,token})
        }
        else{
            res.status(400).send({message:"Incorrect password"})
        }
    }
    
})

router.get("/profile",async(req,res)=>{
    const token = req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const organization=await Organization.findOne({"_id":decoded.id})
    res.send({message:"Orgnization profile",organization})
})
router.put("/updateprofile",async(req,res)=>{
    const token=req.headers.authorization.slice(7)
    const decoded=jwt.verify(token,process.env.JWT_TOKEN)
    const{organizationName,email,mobile,locality,district,state}=req.body
    await Organization.findByIdAndUpdate(decoded.id,{
        organizationName,
        email,
        mobile,
        locality,
        district,
        state
    })
    res.send({message:"updated"})
})
router.get("/orgvieworder",async(req,res)=>{
      const token = req.headers.authorization.slice(7)
      const decoded=jwt.verify(token,process.env.JWT_TOKEN)
      const buyproducts=await Buy.find().populate("productId")
         if(!buyproducts){
             return  res.status(404).send({message:"No products"})
         }   
         res.send({message:"View order Products",buyproducts})
})
module.exports=router