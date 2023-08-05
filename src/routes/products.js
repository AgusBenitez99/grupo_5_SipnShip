const express = require('express');
const productsControllers=require('../controllers/productController')
const router = express.Router();

/* /product */
router.get('/detail', productsControllers.detail);
router.get('/trolley', productsControllers.trolley);

module.exports = router;