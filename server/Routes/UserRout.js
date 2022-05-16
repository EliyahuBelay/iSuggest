const userRouter = require('express').Router();
const {getUsers} = require('../Controllers/UserCantroller');



userRouter.get('/',getUsers);








module.exports = userRouter;