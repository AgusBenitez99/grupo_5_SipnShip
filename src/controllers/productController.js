const { readJSON, writeJSON } = require("../data");
const Product = require("../data/Product");

module.exports={
    edit:(req,res)=>{
        return res.render('product/edit')
    },
    new:(req,res)=>{
        return res.render('product/new')
    },
    create:(req, res) => {
        const products = readJSON("products.json");
    
        const data = {
          ...req.body,
          image : req.file ? req.file.filename : null
        }
    
        let newProduct = new Product(data);
        products.push(newProduct);
    
        writeJSON(products, 'products.json');
    
        return res.redirect('/admin');
      },
    detail:(req, res) => {
    
        const products = readJSON("products.json");
    
        const id = req.params.id;
        const product = products.find((product) => product.id === id);
    
        return res.render("product/detail", {
          product,
        });
      },
    trolley:(req,res)=>{
        return res.render('product/trolley')
    }
}