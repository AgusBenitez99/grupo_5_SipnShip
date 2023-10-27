const { readJSON, writeJSON } = require("../data");
const { unlinkSync, existsSync } = require("fs");
const db = require('../database/models')
const { validationResult } = require('express-validator');


module.exports = {
  edit: (req, res) => {

    const product = db.Product.findByPk(req.params.id, {
      include: ['brand', 'section', 'category']
    })
    const section = db.Section.findAll({ order: ['name'] })
    const category = db.Category.findAll({ order: ['name'] })
    Promise.all([product, category, section])
      .then(([product, category, section]) => {
        return res.render('product/edit', {
          ...product.dataValues,
          category,
          section
        })
      }).catch((error) => console.log(error));

  },
  update: (req, res) => {

    const { name, brand, category, section, description, price, discount, size } = req.body;

    db.Product.findByPk(req.params.id, {
      include: ["images"],
    })
      .then((product) => {
        req.files.image &&
          existsSync(`./public/images/${product.image}`) &&
          unlinkSync(`./public/images/${product.image}`);

        db.Product.update(
          {
            name: name.trim(),
            price,
            size,
            discount,
            //brandId: brand,
            sectionId: section,
            categoryId: category,
            //stock
            description: description.trim(),
            mainImage: req.files.image ? req.files.image[0].filename : product.image,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        ).then(() => {
          if (req.files.images) {
            product.images.forEach((image) => {
              existsSync(`./public/images/${image.file}`) &&
                unlinkSync(`./public/images/${image.file}`);
            });

            db.Image.destroy({
              where: {
                productId: req.params.id,
              },
            }).then(() => {
              const images = req.files.images.map((file) => {
                return {
                  file: file.filename,
                  main: false,
                  productId: product.id,
                };
              });
              db.Image.bulkCreate(images, {
                validate: true,
              }).then((response) => {
                return res.redirect("/admin");
              });
            });
          } else {
            return res.redirect("/admin");
          }
        });
      })
      .catch((error) => console.log(error));
  },
  new: (req, res) => {
    const section = db.Section.findAll({ order: ['name'] })
    const category = db.Category.findAll({ order: ['name'] })
    Promise.all([ category, section])
    .then(([ category, section]) => {
      return res.render('product/new', {
        category,
        section
      })
    }).catch((error) => console.log(error));
    
  },
  create: (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {

      const { name, price, size, description, category, discount, section, brand, mainImage } = req.body

      db.Product.create({
        name: name.trim(),
        price,
        size,
        discount,
        sectionId: section,
        description: description.trim(),
        categoryId: category,
        //brandId : brand,
        mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null
      })
        .then(product => {


          if (req.files.images) {
            const images = req.files.images.map((file) => {
              return {
                file: file.filename,
                productId: product.id,
              }
            })

            db.Image.bulkCreate(images, {
              validate: true
            }).then(response => {
              return res.redirect('/admin');
            })
          } else {
            return res.redirect('/admin');

          }
        })
        .catch(error => console.log(error))

    } else {

      if (req.files.length) {
        req.files.forEach(file => {
          existsSync('./public/images/' + file.filename) && unlinkSync('./public/images/' + file.filename)
        });
      }

      const sections = db.Section.findAll({
        order: ['name']
      });

      Promise.all([sections])
        .then(([sections]) => {
          return res.render("product/new", {
            sections,
            errors: errors.mapped(),
            old: req.body
          });
        })
        .catch(error => console.log(error))

    }
  },
  detail: (req, res) => {

    const id = req.params.id

    const product = db.Product.findByPk(req.params.id, {
      include: ['brand', 'section', 'category', 'images']
    })

    const products = db.Product.findAll({
      include: ['brand', 'section', 'category']
    })

    Promise.all([product, products])
      .then(([product, products]) => {
        return res.render("product/detail", {
          products,
          ...product.dataValues,
        });
      })
      .catch(error => console.log(error))
  },

  trolley: (req, res) => {
    return res.render('product/trolley')
  },
  remove: (req, res) => {
    db.Image.destroy({
      where: {
        productId: req.params.id
      }
    })
      .then(() => {
        db.Product.destroy({
          where: {
            id: req.params.id
          }
        }).then(() => {
          return res.redirect('/admin')
        })
      })
      .catch(error => console.log(error));

  }
}
