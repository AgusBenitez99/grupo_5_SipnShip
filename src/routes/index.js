const express = require('express');
const {index, admin, search}=require('../controllers/mainController');
const { logout } = require('../controllers/userController');
const router = express.Router();
const checkUserAdmin = require('../middlewares/checkUserAdmin');
const { toggleFavorite } = require('../controllers/apiController');
/* / */
router.get('/', index);
router.get('/admin',checkUserAdmin, admin);
router.get('/search/:id?', search);
router.get('/logout',logout)

router.get('/toggle-favorite', toggleFavorite)

module.exports = router;
