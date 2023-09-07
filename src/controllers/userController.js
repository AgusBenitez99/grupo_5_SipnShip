const { readJSON, writeJSON } = require('../data');
const {validationResult} = require('express-validator')

module.exports={
    register:(req,res)=>{
        return res.render('user/register')
    },
    login:(req,res)=>{
        return res.render('user/login')
    },
    profile:(req,res)=>{
        return res.send ('Este es tu Perfil')
    },
    logout:(req,res)=>{
        return res.redirect('/')
    },


    processLogin:(req,res)=>{
        const errors = validationResult(req);

        if(errors.isEmpty()){

            
            const users = readJSON('user.json');
            const {email, remember} = req.body
            const user = users.find(user => user.email === req.body.email);
            const {id, firstName, rol} = user;
           
            req.session.userData = {
                id,
                firstName,
                rol
            }

            remember !== undefined && res.cookie('Ship&ShipsUserData', req,session.userLogin, {
                maxAge : 1000 * 60
            })

            return res.redirect('/');

        } else {  
            return res.render( 'user/login', {errors : errors.mapped()} )
        }
    },

    processRegister:(req,res)=>{
        return res.redirect('/')
    },

    updateProfile: (req,res)=>{
        return res.send(req.body)
    },

    logout :(req,res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}