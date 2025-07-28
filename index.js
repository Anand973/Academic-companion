const express=require("express")
const app= express();
require("dotenv").config
const connectDB=require("./connection")

connectDB(process.env.mongo)

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/user',)





app.listen(3000,()=>console.log("server is connected"))