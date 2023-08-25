const { readJSON } = require("../data");
const products=require('../data/products.json')
module.exports={
    index:(req,res)=>{
        return res.render('index',{products})
    },
    admin:(req,res)=>{
        return res.render('admin',{products})
    },
    list:(req,res)=>{      
        const product=products
        res.render('results', { product });
      },
    search:(req,res)=>{
        
        const keywords = req.query.keywords;
        const product = products.filter(product => {
          return product.name.toLowerCase().includes(keywords.toLowerCase());
        });
        res.render('results', { product,keywords });
      }
    
}