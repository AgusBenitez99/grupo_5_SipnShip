const {check, body} = require('express-validator');
const {readJSON} = require('../data');

module.exports = [
    check("firstName")
        .isLength({min:3}).withMessage("Debe tener como minimo 3 letras").bail(),
       /*  .isAlpha('es-ES').withMessage("Solo se permiten caracteres alfabeticos"),      */   

    check("lastName")
    .isLength({min:2}).withMessage("Debe tener como minimo 2 letras").bail()
    .isAlpha('es-ES').withMessage("Solo se permiten caracteres alfabeticos"),  

    check("email")
        .notEmpty().withMessage("Pone un email gato").bail()
        .isEmail().withMessage("Email invalido").bail()
        .custom((value) =>{
            const users = readJSON('users.json');
            const user = users.find(user => user.email === value)
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage("El email ya se encuentra registrado"),

    check("password")
        .isLength({min:6, max:12 }).withMessage("Debe tener entre 6 y 12 caracteres"),

    body("password2")
    .custom((value,{req})=>{
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage("Las contraseñas no coinciden")
]