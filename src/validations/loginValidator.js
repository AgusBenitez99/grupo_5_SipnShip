const {check,body} = require ("express-validator")
const {readJSON} = require ('../data');
const {compareSync} = require('bcryptjs')

module.exports = [
    check('email')
        .notEmpty().withMessage('Se requiere una dirección de e-mail').bail()
        .isEmail().withMessage('La direccion debe ser del tipo e-mail').bail(),
    body('password')
        .notEmpty().withMessage('Se requiere una constraseña').bail()

        .custom((value, {req}) => {
            const users = readJSON('user.json');
            const user = users.find(user => user.email === req.body.email);

            if( !user || value != user.password /* !compareSync(value, user.password) */) {
                return false
            }
                return true
        }).withMessage ('Credenciales invalidas')

]