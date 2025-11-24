// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let chatSchema=mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50
    },
    reeiver:{
        type:String,
        required:true
    },
    when:Date
})
let chats=mongoose.model("chat",chatSchema)
module.exports=chats
chats.insertMany([{
    sender:"priya",
    msg:"wait 10 minutes",
    receiver:"Atul",
    when:new Date()

}])
module.exports=chats