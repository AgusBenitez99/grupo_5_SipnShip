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

            const {amount, product: id} = req.body;

            const {name, mainImage, price, discount} = await db.Product.findByPk(id)


            if(req.session.cart.products.map(product => product.id).includes(id)){

                req.session.cart.products = req.session.cart.products.map(product => {
                    if(product.id === +id){
                        ++product.amount
                    }
                    return product
                });

            } else {
                req.session.cart.products.push({
                    id,
                    name,
                    mainImage,
                    price,
                    discount,
                    amount
                }); 
            }


            req.session.cart.total = req.session.cart.products.map(product => product.price * product.amount).reduce((a,b) => a+b, 0)
            
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

        try {
            if(!req.session.cart) {
                let error = new Error()
                error.message = 'Debes loguearte'
                error.status = 404;
                throw error
            }

            const {product : id} = req.query

            req.session.cart.products = req.session.cart.products.map(product => {
                if(product.id === +id && product.amount > 1){
                    --product.amount
                }
                return product
            });

            req.session.cart.total = req.session.cart.products.map(product => product.price * product.amount).reduce((a,b) => a+b, 0)

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

    removeAllItem : async (req,res) => {

        try {
            if(!req.session.cart) {
                let error = new Error()
                error.message = 'Debes loguearte'
                error.status = 404;
                throw error
            }

            const {product : id} = req.query

            req.session.cart.products = req.session.cart.products.filter(product => product.id !== +id);
            
            req.session.cart.total = req.session.cart.products.map(product => product.price * product.amount).reduce((a,b) => a+b, 0)

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

    emptyCart : async (req,res) => {

    }
}