const express = require('express');
const {index, admin, results}=require('../controllers/mainController')
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admin);
router.get('/results', results);

module.exports = router;
