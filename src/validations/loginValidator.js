const {check,body} = require ("express-validator")
const {compareSync} = require('bcryptjs')
const db = require('../database/models');

module.exports = [
    check('email')
        .notEmpty().withMessage('Se requiere una dirección de e-mail').bail()
        .isEmail().withMessage('La direccion debe ser del tipo e-mail').bail(),
    body('password')
        .notEmpty().withMessage('Se requiere una constraseña').bail()

        .custom((value, {req}) => {
            return db.User.findOne({
                where : {
                            email : req.body.email
                        }
            })
                .then(user => {
                    if (!user || !compareSync(value, user.password)) {
                        return Promise.reject('Credenciales inválidas');
                    }
                })
        })

]