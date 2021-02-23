"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
//creating an array of type User
let usersArray = [];
usersArray.push(new user_1.User("1", "merv", "val", "merv@email.com"));
//Get request
userRouter.get('/', (req, res, next) => {
    res.status(200).send(usersArray);
});
//Post Request
userRouter.post('/', (req, res, next) => {
    usersArray.push(new user_1.User(req.body.userId, req.body.firstName, req.body.lastName, req.body.emailAddress));
    res.status(201).send(usersArray[usersArray.length - 1]);
});
//# sourceMappingURL=usersRoutes.js.map