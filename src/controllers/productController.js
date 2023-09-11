const { readJSON, writeJSON } = require("../data");
const { unlinkSync, existsSync } = require("fs");
const Product = require("../data/Product");
const { validationResult } = require('express-validator')

module.exports = {
  edit: (req, res) => {
    const products = readJSON('products.json')
    const product = products.find(product => product.id === req.params.id)
    return res.render('product/edit', {
      ...product,
      products
    })
  },
  update: (req, res) => {
    const products = readJSON('products.json')
    const product = products.find((product) => product.id === req.params.id);
    const { name, price, size, description, brand, } = req.body;

    // una imagen
    if (req.files.mainImage) {
      existsSync(`./public/images/${product.mainImage}`) &&
        unlinkSync(`./public/images/${product.mainImage}`);


    }
    //varias imagenes
    if (req.files.images) {
      product.images.forEach((image) => {
        existsSync(`./public/images/${image}`) &&
          unlinkSync(`./public/images/${image}`);
      });
    }
    const productModify = products.map(product => {

      if (product.id === req.params.id) {
        product.name = name.trim()
        product.price = +price
        product.size = size
        product.brand = brand
        product.description = description.trim()
        product.mainImage = req.files.mainImage ? req.files.mainImage[0].filename : product.mainImage
        product.images = req.files.images
          ? req.files.images.map((file) => file.filename)
          : product.images;
      }

      return product
    })

    writeJSON(productModify, 'products.json')

    return res.redirect('/admin')
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

    const products = readJSON("products.json");

    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    return res.render("product/detail", {
      products,
      ...product

    });
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
