const { readJSON, writeJSON } = require("../data");
const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { hashSync } = require('bcryptjs');

module.exports = {
  register: (req, res) => {
    return res.render("user/register");
  },
  login: (req, res) => {
    return res.render("user/login");
  },
  profile: (req, res) => {
    db.User.findByPk(req.session.userData.id)
      .then((user) => {
        return res.render("user/profile", {
          ...user.dataValues,
        });
      })
      .catch((error) => console.log(error));
  },
  logout: (req, res) => {
    return res.redirect("/");
  },

  processLogin: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { email, remember } = req.body;

      db.User.findOne({
        where: {
          email,
        },
      })
        .then((user) => {
          req.session.userData = {
            id: user.id,
            firstName: user.name,
            rol: user.rolId,
          };

          remember !== undefined &&
            res.cookie("remember", req.session.userData, {
              maxAge: 1000 * 60,
            });

          return res.redirect("/");
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("user/login", { errors: errors.mapped() });
    }
  },

  processRegister: (req, res) => {
    let errors = validationResult(req);

    if(errors.isEmpty()){
      const {name, lastName, email, password, birthdate} = req.body
  
      db.User.create({
          name: name.trim(),
          lastName: lastName.trim(),
          email,
          password : hashSync(password,10),
          birthdate,
          avatar: req.file ? req.file.filename : 'default.png',
          rolId: 2
      })
          .then(user => {
              console.log(user);
              return res.redirect('/user/login')
          })
          .catch(error => console.log(error))

    } else {
      res.render("user/register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }

  },

  updateProfile: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, lastName, email} = req.body;
      db.User.findByPk(req.session.userData.id)
        .then((user) => {
          req.file &&
            existsSync(`./public/images/users/${user.avatar}`) &&
            unlinkSync(`./public/images/users/${user.avatar}`);

          db.User.update(
            {
              name: name.trim(),
              lastName: lastName.trim(),
              email,
              avatar: req.file ? req.file.filename : user.avatar,
            },
            {
              where: {
                id: req.session.userData.id,
              },
            }
          ).then((response) => {
            return res.redirect("/admin");
          });
        }).catch((error) => console.log(error));

        
    } else {
      db.User.findByPk(req.session.userData.id)
        .then((user) => {
          res.render("user/profile", {
            ...user.dataValues,
            errors: errors.mapped(),
          });
        })
        .catch((error) => console.log(error));
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("remember");
    return res.redirect("/");
  },
};
