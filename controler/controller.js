const users=require("../model/userschema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
exports.signUp=async (req,res)=>{
   const{email,password,name}=req.body
    try {
        const found=await users.findOne({email})
        if (found) {
            res.status(400).send({
                msg:"this user already created an account"})
        }
        else{
            const user=new users(req.body)
            const salt=10
            const hashpassword=bcrypt.hashSync(user.password,salt)
            user.password=hashpassword
            const secretkey="abc123"
            const token=jwt.sign({
                id:user._id,
                name: user.name
            },secretkey)
            await user.save()
            res.status(200).send({
                msg:"account created successfully",
                user,
                token,
            })

        }
    } catch (error) {
        res.status(500).send({
            msg:"failed to create the acount",
            error
        })
        
    }
}
exports.signin=async(req,res)=>{
    const{email,password}=req.body
    try {
        const found=await users.findOne({email})
        if (!found){
            res.status(400).send({

                msg:"you need to create an account"
            })
        }
        else{
            const match = bcrypt.compareSync(password, found.password)
            if (!match){
                res.status(400).send({
                    msg:"your password is incorrect"
                })
            }
            else{
                const secretkey="abc123"
                const token=jwt.sign({
                    id:found._id,
                    name: found.name
                },secretkey)  
                res.status(200).send({
                    msg:"login successfully",
                    user: found, token
                })

          }
        }
    } catch (error) {
        res.status(500).send({
            msg:"login failed"

        })
    }
}