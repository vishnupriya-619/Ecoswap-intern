const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const adminVerify=require("../middleware/adminVerify")
const User=require("../models/userschema")
const Organization=require("../models/organizationschema")
const OrgProducts=require("../models/productschema")
const UserProducts=require("../models/userproductschema")

router.post("/login",async(req,res)=>{
    const{username,password}=req.body
    if(username=="admin" && password=="admin@123"){
        const token=jwt.sign({admin:true},process.env.JWT_TOKEN)
        res.send({message:"Login Successfully",token})
    }
    else{
        res.status(400).send({message:"Invalid Credentiales"})
    }
})

router.get("/adminuser", adminVerify, async (req, res) => {
    const userview= await User.find()
    res.send({
        message: "View Users",userview
    })
})

router.get("/adminorganization", adminVerify, async (req, res) => {
    const orgview= await Organization.find()
    res.send({
        message: "View Organizations",orgview
    })
})

router.get("/adminitems", adminVerify, async (req, res) => {
    const orgitemsview= await OrgProducts.find().lean()
    const useritemsview=await UserProducts.find().lean()
    res.send({
        message: "View all items",orgitemsview,useritemsview
    })
})

router.patch("/activate",adminVerify,async(req,res)=>{
    const organizationid = req.body.organizationid
    const organization = await Organization.findByIdAndUpdate(organizationid,{Activated: true})
    res.send({
        message:"Organization Activated",organization
    })
})

router.patch("/deactivate",adminVerify,async(req,res)=>{
    const organizationid = req.body.organizationid
    const organization = await Organization.findByIdAndUpdate(organizationid,{Activated: false})
    res.send({
        message:"Organization Rejected",organization
    })
})
module.exports=router