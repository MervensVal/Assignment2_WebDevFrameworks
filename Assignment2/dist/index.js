"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express_1 = __importDefault(require("express"));
const usersRoutes_1 = require("./routes/usersRoutes");
const path_1 = __importDefault(require("path"));
let application = express_1.default();
/*
body-parser is a middleware that parses a request
It is responsible for parsing (make info easier to work with/break down) the incoming request
bodies in a middleware before you handle it
*/
application.use(bodyParser.urlencoded({ extended: false }));
application.use(bodyParser.json());
/*
checks to see if there is a a file in your public folder that matches your request
process.cwd() grabs the current directory and path.join, joins them together
This lets you create a public acessible folder and makes it easier to display the contents
*/
application.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
//This makes sure that any response that starts with User gets sent to userRouter
application.use('/users', usersRoutes_1.userRouter);
//res.status(404) in the method can be used to generate 404 error
application.use('/', (req, res, next) => {
    res.send("<h1>Main page with tables<h1>");
});
application.listen(3000);
//1hr mins
//# sourceMappingURL=index.js.map