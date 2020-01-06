const express = require('express');
require('dotenv').config()
const userRouter = require("./user/user-Router.js");
const locationRouter = require("./location/location-Router.js");
const authRouter = require("./auth/authRouter.js");
const itemRouter = require("./item/itemRouter.js");
const app = express();

const restrictedMiddleWare = require("./auth/restricted.js");

app.use(express.json());
app.use('/users', restrictedMiddleWare, userRouter)
app.use('/location', restrictedMiddleWare, locationRouter)
app.use('/auth', authRouter);
app.use('/item', itemRouter);

module.exports = app;