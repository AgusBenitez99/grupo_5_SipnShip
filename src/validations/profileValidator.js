const {check} = require('express-validator');

module.exports = [
    check("firstName")
        .notEmpty().withMessage("Pone un nombre por favor").bail()
        .isLength({min:3}).withMessage("Debe tener como minimo 3 letras").bail(),

    check("lastName")
    .notEmpty().withMessage("Pone un apellido").bail()
    .isLength({min:3}).withMessage("Debe tener como minimo 3 letras").bail(),  

    check("email")
        .notEmpty().withMessage("Pone un email").bail()
        .isEmail().withMessage("Email invalido").bail()

    
]