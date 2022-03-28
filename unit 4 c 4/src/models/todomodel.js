let mongoose = require("mongoose")
let User = require("./usermodel")

let todoSchema = new mongoose.Schema(
    {
        title:{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }

)
module.exports= mongoose.model("todo",todoSchema)