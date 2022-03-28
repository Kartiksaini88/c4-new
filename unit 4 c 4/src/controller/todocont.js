let Todo = require("../models/todomodel")

let express = require("express")
let User = require("../models/usermodel")
let router = express.Router()

router.get("",async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let todo = await Todo.find().lean().exec()
        return res.status(201).send({todo:todo})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})
router.post("",async(req,res)=>{ 
    try {
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let todo = await Todo.create(req.body)
        return res.status(201).send({todo:todo})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})

router.get("/id",async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let todo = await Todo.findById(req.params.id).lean().exec()
        return res.status(201).send({todo:todo})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})
router.patch("/id",async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({todo:todo})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})
router.delete("/id",async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(500).send("Wrong Email and password")
        }

        let todo = await Todo.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({todo:todo})
    } catch (error) {
        return res.status(401).send({error:error.message})
    }
})



module.exports=router