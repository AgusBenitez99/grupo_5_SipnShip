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
        return res.redirect('/')
    },
    processRegister:(req,res)=>{
        return res.redirect('/')
    },
    updateProfile: (req,res)=>{
        return res.send(req.body)
    },
}