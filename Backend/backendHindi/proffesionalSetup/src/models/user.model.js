import mongoose,{Schema} from "mongoose";
const userSchema = new Schema(
    {
        username:{type:String,
                    required:true,
                    unique: true,
                    lowercase: true,
                    trim: true,
                    index: true},
        fullname:{type:String,
                    required:true,
                    trim: true,
                    lowercase: true,
                    maxlength: 30,
                    index: true
        },
        avatar:{
            type:String,//cloudnary  or local file system
            required:true,
            
        },
        coverImage:{type:String,},
        watchHistory:[{type:Schema.Types.ObjectId,
            ref:"Video"
        }],
        password:{
            type:String,
                    required:[true,'Please enter a password'],
                    
        },
        refreshToken:{
            type:String
            

        },
        
    },{timestamps: true}
);

export const User = mongoose.model("User", userSchema)