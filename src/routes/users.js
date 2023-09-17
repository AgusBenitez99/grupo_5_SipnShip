const express = require('express');//requiere express
const router = express.Router();//enrutador de express

const {
    register,
    login,
    profile,
    processLogin,
    logout,
    processRegister,
    editProfile,
    updateProfile
} = require('../controllers/userController');//requiere usercontroller

const loginValidator = require('../validations/loginValidator');
const checkNotUserLogin = require('../middlewares/checkNotUserLogin');
const checkUserLogin = require('../middlewares/checkUserLogin');
const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/upload')

/* /user */

/* get */
router.get('/register', checkNotUserLogin, register);
router.post('/register',upload.single("image"),registerValidator, processRegister)
router.get('/login', checkNotUserLogin, login);
router.post('/login', loginValidator, processLogin)
router.get('/profile/:id',checkUserLogin, profile)
router.put('/profile/:id',checkUserLogin ,updateProfile)
router.get('/logout', logout)

module.exports = router;
