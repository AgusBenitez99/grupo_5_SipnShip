const express = require('express');//requiere express
const {register,login,profile,processLogin,logout,processRegister,updateProfile}=require('../controllers/userController')//requiere usercontroller
const router = express.Router();//enrutador de express

/* /user */
/* get */
router.get('/register', register);
router.post('/register', processRegister)
router.get('/login', login);
router.post('/login', processLogin)
router.get('/profile', profile)
router.put('/update-profile', updateProfile)
router.get('/logout', logout)

module.exports = router;
