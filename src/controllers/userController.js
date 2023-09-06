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
        return res.render('user/profile')
    },
    logout:(req,res)=>{
        return res.redirect('/')
    },


    processLogin:(req,res)=>{
        const errors = validationResult(req);

        if(errors.isEmpty()){
            const users = readJSON('user.json');
            const user = users.find(user => user.email === req.body.email);
            const {id, name, rol} = user;
        
            req.session.userLogin = {
                id,
                name,
                rol
            }

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
}