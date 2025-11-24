const express=require('express');
// const userRoute=require('./Routes/users.routes')
const mainRoute=require('./Routes/main.Routes')
// const User = require('./models/User'); 
const app=express();
const morgan=require('morgan')
const helmet=require('helmet')
const cors=require('cors')
const bodyParser=require('body-parser')
app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.set('view engine','ejs')
// app.use('/users',userRoute);
app.use('/',mainRoute);
app.use((req,res,next)=>{
    res.status(404).send("Page not found")
})

app.listen(3000,()=>{
    console.log("listening to port 3000.")
})