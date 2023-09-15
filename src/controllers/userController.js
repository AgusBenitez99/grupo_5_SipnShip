const { readJSON, writeJSON } = require('../data');
const { unlinkSync, existsSync } = require("fs");
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

        const users = readJSON("users.json");

        const id = req.params.id;
        const user = users.find((user) => user.id === id);
        return res.render("user/profile", {
          users,
          ...user
    
        });

        
    },
    editProfile:(req,res)=>{
        const users = readJSON('users.json')
        const user = users.find(user => user.id === req.params.id)
        return res.render('user/update-profile', {
      ...user,
      users
    })
        
    },
    logout:(req,res)=>{
        return res.redirect('/')
    },


    processLogin:(req,res)=>{
        const errors = validationResult(req);
    
        if(errors.isEmpty()){

            
            const users = readJSON('users.json');
            const {email, remember} = req.body
            const user = users.find(user => user.email === req.body.email);
            const {id, firstName, rol} = user;
           
            req.session.userData = {
                id,
                firstName,
                rol
            }

            remember !== undefined &&
               res.cookie('remember', req.session.userData, {
                maxAge : 1000 * 60
            }) 
            

            return res.redirect('/');

        } else {  
            return res.render( 'user/login', {errors : errors.mapped()} )
        }
    },

    processRegister:(req,res)=>{
        let errors = validationResult(req);

        if(errors.isEmpty()){
            const users = readJSON('users.json')
            
            const data = {
                ...req.body,
                image: req.file ? req.file.filename : null,
              }
          
            let newUser = new User(data);
            
            users.push(newUser);

            writeJSON(users,'users.json');

            return res.redirect('/');
        }else{
            res.render('user/register',{
                old: req.body,
                errors: errors.mapped()
            })
        }

    },

    updateProfile: (req,res)=>{
        const users = readJSON('users.json')
        
        const { nombre, apellido, email, password, password2 } = req.body;
        
        const userModify = users.map(user => {

        if (user.id === req.params.id) {
            user.firstName = nombre.trim()
            user.lastName = apellido.trim()
            user.email= email.trim();
            user.password = hashSync(password.trim(),10);
            user.password = hashSync(password2.trim(),10);
            user.image = req.files.image ? req.files.image[0].filename : user.image
            
            }

        return user
        })

    writeJSON(userModify, 'users.json')

    return res.redirect('/user/profile/:id')
    },

    logout :(req,res) => {
        req.session.destroy();
        res.clearCookie('remember'); 
        return res.redirect('/')
    }
}