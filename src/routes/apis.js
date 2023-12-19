const express = require('express');
const { checkEmail, showCategories } = require('../controllers/apiController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail);
router.get('/categories', showCategories);


module.exports = router;
