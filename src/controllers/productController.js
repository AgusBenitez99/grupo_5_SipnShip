const { readJSON, writeJSON } = require("../data");
const { unlinkSync, existsSync } = require("fs");
const Product = require("../data/Product");
const {validationResult} = require('express-validator')

module.exports={
    edit:(req,res)=>{
        const products = readJSON('products.json')
        const product = products.find(product => product.id === req.params.id)
        return res.render('product/edit', {
            ...product,
            products
        })      
    },
    update:(req,res) => {
        const products = readJSON('products.json')

        const {name, price, size, description, brand } = req.body;
        const file = req.file;

		const productModify = products.map(product =>{

			if (product.id === req.params.id) {
			 	product.name = name.trim()
				product.price = +price
			 	product.size = size
				product.brand = brand			    
                product.description = description.trim()
                product.image = req.file ? req.file.filename : product.image
			}	

			return product
		})

		writeJSON(productModify,'products.json')

		return res.redirect('/admin')
    },
    new:(req,res)=>{
        return res.render('product/new')
    },
    create:(req, res) => {
        const products = readJSON("products.json");
    
        const data = {
          ...req.body,
          mainImage: req.files.mainImage ? req.files.mainImage[0].filename : null,
          images :  req.files.images
                   ? req.files.images.map((image) => image.filename)
                   : [],
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
          products,
          ...product   
                 
                  });
      },
    trolley:(req,res)=>{
        return res.render('product/trolley')
    }, 
    remove: (req,res)=>{

      const products = readJSON('products.json');
      const id= req.params.id;
      const product = products.find(product => product.id === id)
      const productModify = products.filter(product => product.id !== id);

        if (product.images ) {
          product.images.forEach(image => {
            const imagePath = `./public/images/${image}`;
            
            if (existsSync(imagePath)) {
              unlinkSync(imagePath);
            }
          });
        }
         
       existsSync(`./public/images/${product.mainImage}`) &&  unlinkSync(`./public/images/${product.mainImage}`)
        
      
      
     
      writeJSON(productModify, 'products.json')
      return res.redirect('/admin')
    }
}
