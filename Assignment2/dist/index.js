"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express_1 = __importDefault(require("express"));
const usersRoutes_1 = require("./routes/usersRoutes");
let application = express_1.default();
//body-parser is a middleware that parses a request
// It is responsible for parsing (make info easier to work with/break down) the incoming request 
//bodies in a middleware before you handle it
application.use(bodyParser.urlencoded({ extended: false }));
application.use(bodyParser.json());
//This makes sure that any response that starts with User gets sent to userRouter
application.use('/users', usersRoutes_1.userRouter);
//res.status(404) in the method can be used to generate 404 error
application.use('/', (req, res, next) => {
    res.send("Main page with tables");
});
application.listen(3000);
//32 mins
//# sourceMappingURL=index.js.map