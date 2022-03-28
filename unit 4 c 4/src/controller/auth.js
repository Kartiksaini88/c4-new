let User = require("../models/usermodel")

let register = async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message : "Email already exists" })
        }

        user = await User.create(req.body)

        

        res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({message : err.message})
    }

} 

let login = async(req,res)=>{ 
    try{
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let pass = await user.checkpwd(req.body.pwd)

        if(!pass){
            return res.status(500).send("Wrong Email and password")
        }

       

        return res.status(200).send({user})

    }

    catch(err){
        res.status(400).send({message : err.message})
    }

}
module.exports = {register,login}