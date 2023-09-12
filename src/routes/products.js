const express = require('express');
const productController = require('../controllers/productController')
const router = express.Router();
const upload = require('../middlewares/upload');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkUserAdmin = require('../middlewares/checkUserAdmin');
/* /product */

router.get('/edit/:id',checkUserAdmin, productController.edit);
router.get('/new',checkUserAdmin, productController.new);
router.post('/created', upload.fields([{
  name: "mainImage",
},
{
  name: "images",
},]), productController.create)

router.get('/detail/:id', productController.detail);
router.get('/trolley', checkUserLogin,productController.trolley);
router.put('/update/:id', upload.fields([{
  name: "mainImage",
},
{
  name: "images",
},]), productController.update)
router.delete('/delete/:id', productController.remove)

module.exports = router;