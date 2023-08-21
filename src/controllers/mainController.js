const products=require('../data/products.json')
module.exports={
    index:(req,res)=>{
        return res.render('index',{products})
    },
    admin:(req,res)=>{
        return res.render('admin',{products})
    },
    results:(req,res)=>{
        return res.render('results',{products})
    }
}