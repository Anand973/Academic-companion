const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
     name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    role:{
        type:String,
        required:true,
        default: "NORMAL"

    }
},{timestamps:true})

const User=mongoose.model('user',UserSchema)
module.exports=User