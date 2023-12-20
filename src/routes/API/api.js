const express = require('express');
const { checkEmail, showCategories } = require('../../controllers/apiController');
const { getAllProducts, getDetailProduct } = require('../../controllers/apiProductController');
const { getAllCategory } = require('../../controllers/apiCategoryController');
const { getAllSection } = require('../../controllers/apiSectionController');
const router = express.Router();

/* /api */
router.get('/check-email', checkEmail);
//router.get('/categories', showCategories);

router.get('/products',getAllProducts)
router.get('/product/:id',getDetailProduct)

router.get ('/categories',getAllCategory)
router.get('/sections',getAllSection)


module.exports = router;
