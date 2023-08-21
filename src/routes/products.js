const express = require('express');
const {edit,create,detail,trolley, update}=require('../controllers/productController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /product */

router
    .get('/edit/:id', edit)
    .get('/new', create)
// .get('/view', view)
    .get('/detail', detail)
    .get('/trolley', trolley)
    .put('/update/:id', upload.single('image'), update)


module.exports = router;