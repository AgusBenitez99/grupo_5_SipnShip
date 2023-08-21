const {readJSON,writeJSON} = require('../data')

module.exports={
    edit:(req,res)=>{
       const products = readJSON('products.json')
        const product = products.find(product => product.id === +req.params.id)
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

			if (product.id === +req.params.id) {
			 	product.name = name.trim()
				product.price = +price
			 	product.size = size
				product.brand = brand			    
                product.description = description.trim()
                product.image = req.file ? req.file.filename : null
			}	

			return product
		})

		writeJSON(productModify,'products.json')

		return res.redirect('/admin')
    },

    create:(req,res)=>{
        return res.render('product/new')
    },
    detail:(req,res)=>{
        return res.render('product/detail')
    },
    trolley:(req,res)=>{
        return res.render('product/trolley')
    }
}