const express = require('express');
const router = express.Router();
const {GetUsers} = require('../Controllers/UserCantroller.controller');



router.get('/users',GetUsers);








module.exports = router;