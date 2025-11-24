const express=require('express')
const router=express.Router()
router.get('/',(req,res) => {
    res.json({message:'Welcome to the API'})
})
router.get('/greet/:name',(req,res) =>{
    const name=req.params.name
    const app=express()

})