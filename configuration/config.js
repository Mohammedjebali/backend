const mongoose=require("mongoose")
const connectDB=async()=>{
    try {
    await mongoose.connect("mongodb+srv://jebalimohammed7:PPkNAeEMWe2HN5W6@jebali.f2sos.mongodb.net/?retryWrites=true&w=majority&appName=jebali")
    console.log("data base is connected");
    } catch (error) {
        console.log("data base is not connected");
    }
}
module.exports=connectDB