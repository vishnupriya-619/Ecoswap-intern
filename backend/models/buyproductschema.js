const mongoose=require("mongoose")

const Buyproductschema=mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"product"
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    },
    quantity:{
        type:Number,
        
    }
})

const Buy=mongoose.model("buy",Buyproductschema)  
module.exports = Buy