const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true},
        htno:{
            type:Number,
            required:true
        },
        wt:{
            type:Number,
            required:true
        },
        ht:{
            type:Number,
            required:true
        },
        phno:{
            type:Number,
            required:true
        }
});
const User=mongoose.model("StudData",UserSchema);
module.exports=User;