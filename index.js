const express=require("express")
const app= express();
require("dotenv").config
const connectDB=require("./connection");
const { checkforAuthentication } = require("./middleware/auth");
const Route=require("./routes/person");
const cookieParser = require("cookie-parser");
//CONNECTION
connectDB(process.env.mongo)
//VIEWS
app.set("view engine","ejs")
app.set('views',path.resolve('./views'))

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkforAuthentication())
app.use('/user',Route)
app.use('/ch', courseRoutes);







app.listen(3000,()=>console.log("server is connected"))