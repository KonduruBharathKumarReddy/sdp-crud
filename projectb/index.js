const express=require("express");
const mongoose=require("mongoose");
const User= require("./models/Users");
const UserModel=require("./models/Users");
const app=express();
 app.use(express.json())

app.use(express.json());
mongoose.connect("mongodb+srv://admin123:admin123@cluster0.fhsmsds.mongodb.net/hws?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));

app.post("/newuser",async(req,res)=>{
    const userName=req.body.userName;
    const userNumber=req.body.userNumber;
    const userWeight=req.body.userWeight;
    const userHeight=req.body.userHeight;
    const userPhno=req.body.userPhno;
    const user=new UserModel({name:userName,htno:userNumber,wt:userWeight,ht:userHeight,phno:userPhno});
    try{
    await user.save();
    res.send("Inserted Values");}

catch(err){
    console.log(err);
}});

// app.get("/admin",async(req,res)=>
// {
//     const userId=req.body.userId;
//     if(userId==1)
//     {
//         UserModel.find({},(err,result)=>{
//             if(err){
//                 res.send(err);
//             }
//             res.json(result);
//         });
//     }
// });
app.get("/display",async(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
app.put("/upuser",async(req,res)=>{
    const upname=req.body.upName;
    const id=req.body.id;
    
    try{
    await UserModel.findById(id,(err,upUser)=>{
        upUser.name=upname;
        upUser.save();
        res.json(UserModel);
    });
    }

catch(err){
    console.log(err);
}});
app.delete("/deluser/:id",async(req,res)=>{
    const id=req.params.id;
    await UserModel.findByIdAndRemove(id);
});
    app.listen(3001,()=>console.log("Server Ready."))