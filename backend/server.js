const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
;const connectDB=require('./database/database');
const app=express();

app.use(express.json());


connectDB();

app.listen(3000,()=>{
    console.log(`Server running`);
})