const User=require("../models/person");
const { setToken } = require("../service/auth");

async function handleSignup(req,res){
    const {email,password,name}=req.body;
    await User.create({
        name,email,password
    })

    res.redirect('/login')
    
}

async function handleLogin(req,res){
    const {email,password}=req.body
   const user=await User.findOne({email,password})
   if(!user){
    res.render('login')
   }
  const token= setToken(user)

  res.cookie("uid",token)

  return res.redirect('/')





    
}

module.exports={handleLogin,handleSignup}