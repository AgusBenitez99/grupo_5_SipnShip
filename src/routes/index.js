const express = require('express');
const {index, admin, search}=require('../controllers/mainController');
const { logout } = require('../controllers/userController');
const router = express.Router();
const checkUserAdmin = require('../middlewares/checkUserAdmin');
/* / */
router.get('/', index);
router.get('/admin',checkUserAdmin, admin);
router.get('/search/:id?', search);
router.get('/logout',logout)

module.exports = router;
