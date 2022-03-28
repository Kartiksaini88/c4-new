let express = require("express")

let  app = express()

module.exports = app
let {register,login} =require("./controller/auth")
let Usercont = require("./controller/user")
app.use(express.json())

let TODO = require("./controller/todocont")
app.use("/todos",TODO)
app.use("/users",Usercont)
app.post("/login",login)
app.post("/register",register)