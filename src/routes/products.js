const express = require('express');
const {edit,create,detail,trolley}=require('../controllers/productController')
const router = express.Router();

/* /product */

router.get('/edit', edit);
router.get('/new', create);
// router.get('/view', view);
router.get('/detail', detail);
router.get('/trolley', trolley);


module.exports = router;