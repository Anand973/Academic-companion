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
        enum:['ADMIN','MODERATOR','NORMAL'],
        default: "NORMAL"

    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const User=mongoose.model('user',UserSchema)
module.exports=User