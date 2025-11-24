const express=require("express")
const app=express



const chats=require('./modals/chat')
app.length('/',(req,res)=>{
    console.log(chats)
    res.send("root is working")
})
app.listen(8080,(req,res)=>{
    console.log("server is running");
})