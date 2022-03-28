let express = require("express")

let connect = require("./config/db")

let app =require("./index")

app.listen(6000,async()=>{
    try {
        await connect()
        console.log("This is port 6000")
    } catch (error) {
        console.log(error)
    }
}) 