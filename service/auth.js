const jwt=require("jsonwebtoken")
const secret="anand@827973"

function setToken(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
        role:user.role,
    },secret)
}

function getToken(token){
    if(!token) return null
    return jwt.verify(token,secret)



}

module.exports={setToken,getToken}
