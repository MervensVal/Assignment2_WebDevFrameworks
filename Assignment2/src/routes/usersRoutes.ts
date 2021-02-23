import express from 'express';
import { User } from '../models/user';
const userRouter = express.Router();

//creating an array of type User
let usersArray:User[] = [];

usersArray.push(new User("1","merv","val","merv@email.com"))


//Get request
userRouter.get('/',(req,res,next)=>{
    res.status(200).send(usersArray);
});

//Post Request
userRouter.post('/',(req,res,next)=>{
    usersArray.push(new User(req.body.userId,req.body.firstName,req.body.lastName,req.body.emailAddress));
    res.status(201).send(usersArray[usersArray.length - 1]);
});

//This router is exported and used in userApp
export{userRouter}