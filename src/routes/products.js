const express = require('express');
const {edit,detail,trolley}=require('../controllers/productController')
const router = express.Router();

/* /product */

router.get('/edit', edit);
// router.get('/new', new);
// router.get('/view', view);
router.get('/detail', detail);
router.get('/trolley', trolley);

module.exports = router;