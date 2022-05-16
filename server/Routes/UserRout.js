const userRoute = require('express').Router();
const {getUsers,getUserById} = require('../Controllers/UserCantroller');



userRoute.get('/',getUsers);
userRoute.get('/:id',getUserById);








module.exports = userRoute;