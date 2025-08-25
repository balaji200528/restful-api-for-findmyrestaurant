const express=require('express');
const dotenv = require('dotenv').config();
const app=express();
const mongoose = require('mongoose')
const db_url=process.env.atlas_URL;
mongoose.connect(db_url);
const con=mongoose.connection;
con.once('open',()=>{
    console.log('db is connected sucessfully')
})
con.on('error', (err) => {
    console.error('db connection error:', err)
})

app.get('/',(req,res)=>{
    res.send('Welcome to the Restaurant API');
})


const PORT=process.env.PORT ;
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})
