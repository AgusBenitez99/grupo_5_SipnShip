const express = require('express');
const {index, admin, list,search}=require('../controllers/mainController')
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admin);
router.get('/list', list);
router.get('/search', search); 

module.exports = router;
