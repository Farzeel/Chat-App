import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"



// DEFINING THE USER SCHEMA
const userSchema =new Schema({
    fullName:{
        type:String , 
        required:true,
      
        
    },
    username:{
        type:String , 
        required:true,
        lowercase:true,
        unique: true
    },

    password:{
        type:String , 
        required:true,
        minlength:6
    },
    gender:{
        type:String,
         require:true,
         enum:["male", "female"]
    },
    profilePic:{
        type:String , 
        default:""
    },
   
},

{
    timestamps:true
}
)

// HASHED THE PASSWORD USING PRE PLUGIN
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
 
try {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
    
        return next()
} catch (error) {
    return next(error)
}

})
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
 }




// EXPORT THE USER SCHEMA
export const User = mongoose.model("User",userSchema)