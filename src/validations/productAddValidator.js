const {check, body} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('El campo es requerido').bail(),
    check('section')
        .notEmpty().withMessage('El campo es requerido').bail(),
    check('category')
        .notEmpty().withMessage('El campo es requerido').bail(),
        check('size')
        .notEmpty().withMessage('El campo es requerido').bail(),
    check('price')
        .notEmpty().withMessage('El campo es requerido').bail()
        .isDecimal().withMessage('El precio debe ser un número'),
    check('description')
        .notEmpty().withMessage('El campo es requerido').bail()
        .isLength({
            min : 10,
            max : 500
        }).withMessage('La descripción debe tener entre 10 y 500 caracteres'),
    body('mainImage')
        .custom((value, {req}) => {
           if(req.files.mainImage){
                return true
           }
           return false
        }).withMessage('No has subido ninguna imagen')
]