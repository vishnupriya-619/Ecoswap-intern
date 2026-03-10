const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    userName: {
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
})

const User=mongoose.model('users',UserSchema);
module.exports=User