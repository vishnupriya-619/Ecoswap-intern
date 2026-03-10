const mongoose=require("mongoose")
const productSchema= mongoose.Schema({
    organizationId:{
        type:mongoose.Schema.ObjectId,
        required:false,
        ref:"organizations"
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
const Products=mongoose.model("product",productSchema)
module.exports=Products