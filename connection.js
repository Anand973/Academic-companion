const mongoose=require("mongoose")
async function connectMongoDb(url) {
    mongoose.connect(url).then(()=>console.log("mongoose is connected")).catch((e)=>console.log("Connection error"))
    
}

module.exports=connectMongoDb