const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Ecoswap")
const db=mongoose.connection
db.on("error",(e)=>{
    console.log("connection error",e)
})
db.once("open",()=>{
    console.log("Connection established")
})