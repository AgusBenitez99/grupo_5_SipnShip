const {check,body} = require ("express-validator")
const {readJSON} = require ('../../data');
const {compareSync} = require('bcryptjs')

module.exports = [
    check('email')
        .notEmpty().withMessage('Coloca tu email papu!').bail()
        .isEmail().withMessage('Capo.. tiene que ser un email!').bail(),
    body('password')
        .notEmpty().withMessage('Aca va la password amigo!').bail()
        .custom((value, {req}) => {
            const users = readJSON('user.json');
            const user = users.find(user => user.email === req.body.email);

            if( !user || !compareSync(value, user.passwood)) {
                return false
            }
                return true
        }).withMessage ('Acá hay algo raaaroo ... revisa los datos o registrate !')

]