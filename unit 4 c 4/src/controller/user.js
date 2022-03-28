let express = require("express")
let User = require("../models/usermodel")
let router = express.Router()

router.get("",async(req,res)=>{
    try {
        let user = await User.find().lean().exec()
        return res.status(201).send({user:user})
    } catch (error) {
        
    }
})
router.post("",async(req,res)=>{
    try {
        let user = await User.create(req.body)

        return res.status(201).send({user:user})
    } catch (error) {
        
    }
})

module.exports = router