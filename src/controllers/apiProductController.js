const db = require('../database/models')

const getAllProducts = async(req,res)=>{
    try {
        const products = await db.Product.findAll({
            include:['section','category']
        });

        const productsWithURLimages= products.map(product=>{
            product.mainImage = product.mainImage ?  `${req.protocol}://${req.get('host')}/images/${product.mainImage}` : null;
            return product;
        });

        return res.status(200).json({
            ok: true,
            data: productsWithURLimages,
            count: productsWithURLimages.length
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "No se pudo traer los productos",
          });
    }
};

const getDetailProduct = async(req,res)=>{
    const {id} = req.params;
try {
    const product = await db.Product.findByPk(id,{
        include: ['section','category']
    });

    if(product){
        const productWithURL = [product].map(product =>{
            product.mainImage = product.mainImage ?  `${req.protocol}://${req.get('host')}/images/${product.mainImage}` : null;
            return product;    
        });
        return res.status(200).json({
            ok: true,
            data: productWithURL,
        }); 
    }else{
        throw new Error('El producto no existe')
    }
    
} catch (error) {
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "No se pudo traer el producto",
      });
}
};




module.exports ={
    getAllProducts,
    getDetailProduct
}