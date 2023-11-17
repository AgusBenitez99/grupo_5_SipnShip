const {check} = require('express-validator');

module.exports = [
    check("name")
        .notEmpty().withMessage("El campo es requerido").bail()
        .isLength({min:3}).withMessage("Debe tener como minimo 3 letras").bail(),

    check("lastName")
    .notEmpty().withMessage("El campo es requerido").bail()
    .isLength({min:3}).withMessage("Debe tener como minimo 3 letras").bail(),  

    check("email")
        .notEmpty().withMessage("Pone un email").bail()
        .isEmail().withMessage("Email invalido").bail()

    
]