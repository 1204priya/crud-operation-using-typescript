import express from 'express';      
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import student from './model/student.model'
           

import dotenv from 'dotenv';
//checking if port no is provided by production or not
dotenv.config();

const app = express(); 

app.use(bodyParser.json());

//connecting to mongoDb
mongoose.connect(process.env.mongoUrl as string);   
const db = mongoose.connection;
db.on('error',()=>{
    console.log("error while connecting to mongoDb");
});
db.once('open',()=>{
    init();
    console.log("connected to mongodb");
});

const init =()=>{
student.collection.drop();
}

import route from'./route/student.route'
route(app)

 //connecting to server 
app.listen(process.env.PORT,()=>{          
    console.log("server has started on port no : ",process.env.PORT);
})
