const express = require('express');
const mainControllers=require('../controllers/mainController')
const router = express.Router();

/* GET home page. */
router.get('/', mainControllers.index);

module.exports = router;
