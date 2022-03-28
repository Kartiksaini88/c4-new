let mongoose = require("mongoose")

let userSchema = mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
)
module.exports = mongoose.model("user",userSchema)