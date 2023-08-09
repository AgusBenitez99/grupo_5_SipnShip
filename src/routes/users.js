const express = require('express');
const {register,login}=require('../controllers/userController')
const router = express.Router();

/* /user */
router.get('/register', register);
router.get('/login', login);

module.exports = router;
