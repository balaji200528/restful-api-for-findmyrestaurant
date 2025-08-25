const express=require('express');
const dotenv = require('dotenv').config();
const app=express();
app.get('/',(req,res)=>{
    res.send('Welcome to the Restaurant API');
})


const PORT=process.env.PORT ;
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})
