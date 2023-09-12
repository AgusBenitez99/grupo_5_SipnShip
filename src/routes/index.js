const express = require('express');
const {index, admin, list,search}=require('../controllers/mainController');
const { logout } = require('../controllers/userController');
const router = express.Router();
const checkUserAdmin = require('../middlewares/checkUserAdmin');
/* / */
router.get('/', index);
router.get('/admin',checkUserAdmin, admin);
router.get('/list', list);
router.get('/search', search); 
router.get('/logout',logout)

module.exports = router;
