const express = require('express');
const productController=require('../controllers/productController')
const router = express.Router();
const upload = require('../middlewares/upload');

/* /product */

router.get('/edit', productController.edit);
router.get('/new', productController.new);
router.post('/created', upload.single('image'), productController.create)
router.get('/detail/:id', productController.detail);
router.get('/trolley', productController.trolley);


module.exports = router;