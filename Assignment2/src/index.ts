import bodyParser = require("body-parser");
import express from "express";
import {userRouter} from './routes/usersRoutes';
import path from 'path';

let application = express();
/*
body-parser is a middleware that parses a request
It is responsible for parsing (make info easier to work with/break down) the incoming request 
bodies in a middleware before you handle it
*/
application.use(bodyParser.urlencoded({extended: false}));
application.use(bodyParser.json());

/*
checks to see if there is a a file in your public folder that matches your request
process.cwd() grabs the current directory and path.join, joins them together
This lets you create a public acessible folder and makes it easier to display the contents
*/
application.use(express.static(path.join(process.cwd(),'public')));


//This makes sure that any response that starts with User gets sent to userRouter
application.use('/users', userRouter);

//res.status(404) in the method can be used to generate 404 error
application.use('/',(req,res,next)=>{
    res.send("<h1>Main page with tables<h1>");
})




application.listen(3000);

//1hr mins