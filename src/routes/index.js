const express = require('express');
const {index, admin}=require('../controllers/mainController')
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admin);

module.exports = router;
