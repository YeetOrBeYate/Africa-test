const express = require('express');
require('dotenv').config()
const userRouter = require("./user/user-Router.js");
const locationRouter = require("./location/location-Router.js");
const authRouter = require("./auth/authRouter.js");
const itemRouter = require("./item/itemRouter.js");
const CategoryRouter = require("./category/categoryRouter.js");
const app = express();

const restrictedMiddleWare = require("./auth/restricted.js");

app.use(express.json());
app.use('/users', userRouter)
app.use('/location', locationRouter)
app.use('/item', itemRouter);
app.use('/auth', authRouter);
app.use('/category', CategoryRouter);

module.exports = app;