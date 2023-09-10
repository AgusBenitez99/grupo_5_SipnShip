const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null,file.fieldname==='image'?'public/images/users':'public/images')
    },
    filename : function (req,file,callback) {
    callback(null, file.fieldname==='image'?`${Date.now()}_user_${path.extname(file.originalname)}`:`${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage
});

module.exports = upload