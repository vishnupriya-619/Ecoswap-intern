const mongoose=require("mongoose")
const userproductSchema= mongoose.Schema({
     userId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"users"
    },

    productName:{
         type:String,
        required:true,
    },    

    description:{
         type:String,
        required:true,
    },    
       
    category:{
         type:String,
        required:true,
    },   
    quantity:{
        type:Number,
        required:true,
    },
    
    price:{
         type:String,
        required:true,
    },    

    image:{
         type:"String",
       
    },      
})
const Userproducts=mongoose.model("userproduct",userproductSchema)
module.exports=Userproducts