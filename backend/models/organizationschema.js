const mongoose=require("mongoose")

const OrganizationSchema=mongoose.Schema({
    organizationName: {
        type:String,
        required:true
    },
    email:{
       type:String,
        required:true 
    },
    mobile:{
        type:String,
        required:true
    },
     locality:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    ,
    profilepic:{
         type:String
    },
    Activated:{
        type: Boolean
    }
})

const Organization=mongoose.model('organizations',OrganizationSchema);
module.exports=Organization