const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password:{type:String,required:true},
    Adress:{type:String,required:true},
    Phone: {type:Number,required:true},
    cart: {type:Array,default:[]},
})
module.exports=mongoose.model("users",userschema)