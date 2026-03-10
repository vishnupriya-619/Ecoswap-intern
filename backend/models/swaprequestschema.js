const mongoose=require("mongoose")
const swaprequestschema=mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"userproduct"
   },

   userId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"users"
   },

    status:{
        type:String,
        enum:["Pending","Inprogress","Complete"],
        default:"Pending"

    },
    requestitem:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"userproduct"
    },
    Approved:{
        type:Boolean,
        required:false
    }
})

const SwapRequest=mongoose.model("swaprequest",swaprequestschema)
module.exports=SwapRequest