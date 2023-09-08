const express = require('express');//requiere express
const router = express.Router();//enrutador de express

const {
    register,
    login,
    profile,
    processLogin,
    logout,
    processRegister,
    updateProfile
} = require('../controllers/userController');//requiere usercontroller

const loginValidator = require('../validations/loginValidator');
const checkUserLogin = require('../middlewares/checkUserLogin');


/* /user */

/* get */
router.get('/register', checkUserLogin, register);
router.post('/register', processRegister)
router.get('/login', checkUserLogin, login);
router.post('/login', loginValidator, processLogin)
router.get('/profile', checkUserLogin, profile)
router.put('/update-profile', updateProfile)
router.get('/logout', logout)

module.exports = router;
