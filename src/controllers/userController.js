const { readJSON, writeJSON } = require('../data');
const {validationResult} = require('express-validator');
const User = require("../data/User")

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
        return res.redirect('/')
    },
    processRegister:(req,res)=>{
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const users = readJSON('users.json')

            let newUser = new User(req.body);

            users.push(newUser);

            writeJSON(users,'users.json');

            return res.redirect('/');
        }else{
            res.render('register',{
                old: req.body,
                errors: errors.mapped()
            })
        }
    },
    updateProfile: (req,res)=>{
        return res.send(req.body)
    },
}