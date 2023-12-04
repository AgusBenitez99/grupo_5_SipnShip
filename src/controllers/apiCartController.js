const db = require('../database/models')

module.exports = {
    showAll : async (req,res) => {
        try {

            if(!req.session.cart) {
                let error = new Error()
                error.message = 'Debes loguearte'
                error.status = 404;
                throw error
            }

            return res.status(200).json({
                ok : true,
                cart : req.session.cart,
                message : "ok"
            })
            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                cart : null,
                message : error.message || 'Upss, hubo un error'
            })
            
        }


    },
    addItem : async (req,res) => {
        try {

            if(!req.session.cart) {
                let error = new Error()
                error.message = 'Debes loguearte'
                error.status = 404;
                throw error
            }
            console.log(req.body)

            const {amount, product: id} = req.body;

            const {name, image, price, discount} = await db.Product.findByPk(id)

            req.session.cart.products.push({
                id,
                name,
                image,
                price,
                discount,
                amount
            });

            req.session.cart.total = req.session.cart.products.map(product => product.price * amount).reduce((a,b) => a+b, 0)
            
            return res.status(200).json({
                ok : true,
                cart : req.session.cart,
                message : "ok"
            })

            
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                cart : null,
                message : error.message || 'Upss, hubo un error'
            })
            
        }

    },
    removeItem : async (req,res) => {

    },
    emptyCart : async (req,res) => {

    }
}