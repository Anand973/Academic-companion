const jwt=require("jsonwebtoken")
require("dotenv").config()
const secret=process.env.secret
function setToken(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
        role:user.role,
    },secret,{
        expiresIn:'24h'
    })
}

function getToken(token){
    if(!token) return null
    return jwt.verify(token,secret)



}

module.exports={setToken,getToken}
