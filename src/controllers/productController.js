const { readJSON, writeJSON } = require("../data");
const { unlinkSync, existsSync } = require("fs");
const db = require('../database/models')
const { validationResult } = require('express-validator');


module.exports = {
  edit: (req, res) => {
  
    const product=db.Product.findByPk(req.params.id,{
      include : ['brand','section','category']
    })
    const section=db.Section.findAll({order : ['name']})
    const category=db.Category.findAll({order : ['name']})
    Promise.all([product, category,section])
    .then(([product, category,section])=>{
      return res.render('product/edit', {
      ...product.dataValues,
      category,
      section
    })
    }).catch((error) => console.log(error));
    
  },
  update: (req, res) => {
   
  const { name, brand,category, section, description, price, discount,size } = req.body;

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
          categoryId:category,
          //stock
          description: description.trim(),
          mainImage: req.files.image ? req.files.image[0].filename : product.image,
        },
        {
          where: {
            id:req.params.id,
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
    return res.render('product/new')
  },
  create: (req, res) => {
    const products = readJSON("products.json");

    const data = {
      ...req.body,
      mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null,
      images: req.files.images
        ? req.files.images.map((image) => image.filename)
        : [],
    }

    let newProduct = new Product(data);
    products.push(newProduct);

    writeJSON(products, 'products.json');

    return res.redirect('/admin');
  },
  detail: (req, res) => {

    const id = req.params.id
        
   const product = db.Product.findByPk(req.params.id,{
    include : ['brand','section','category','images']
  })

   const products = db.Product.findAll({
    include : ['brand','section','category']
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

    const products = readJSON('products.json');
    const id = req.params.id;
    const product = products.find(product => product.id === id)
    const productModify = products.filter(product => product.id !== id);
    
    if (product.images) {
      product.images.forEach(image => {
        const imagePath = `./public/images/${image}`;

        if (existsSync(imagePath)) {
          unlinkSync(imagePath);
        }
      });
    }

    existsSync(`./public/images/${product.mainImage}`) && unlinkSync(`./public/images/${product.mainImage}`)




    writeJSON(productModify, 'products.json')
    return res.redirect('/admin')
  }
}
