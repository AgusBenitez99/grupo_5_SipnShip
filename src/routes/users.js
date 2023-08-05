const express = require('express');
const usersControllers=require('../controllers/userController')
const router = express.Router();

/* /user */
router.get('/register', usersControllers.register);
router.get('/login', usersControllers.login);

module.exports = router;
