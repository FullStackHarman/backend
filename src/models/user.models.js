import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
    {
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true    
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,

        
    },
    avatar:{
        type:String,
        required:true,
      

    },
    coverImage:{
        type:String,
       
    
    },
  watchHistory:{
    type:Schema.Types.ojedtId,
    ref:Video
  },
  password:{
    type:String,
    required:[true,"Password is required"],
    
  },
  refreshToken:{
    type:String,
  }

    
},{
    timestamps:true
})

userSchema.pre('save',async function (next){
    if(!this.modified('password'))return next();
    this.password = await bcrypt.hash(this.password,10)
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){  
   return await  bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = function(){
    // short live access token
    return jwt.sign({_id:this._id,email:this.email,username:this.username,fullName:this.fullName},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefreshToken = function(){
    // short live access token
    return jwt.sign({_id:this._id},
        process.env.REFREH_TOKEN_SECRET,{expiresIn:process.env.REFREH_TOKEN_EXPIRY})
}
export const User = mongoose.model("User", userSchema)