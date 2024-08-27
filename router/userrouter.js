const express=require("express")
const { signUp, signin } = require("../controler/controller")
const { signupvalidation, validation, signinvalidation } = require("../middleware/validation")
const userrouter=express.Router()
userrouter.post("/signup",signupvalidation,validation,signUp)
userrouter.post("/signin",signinvalidation,validation,signin)
module.exports=userrouter