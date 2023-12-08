const db = require('../database/models')

module.exports = {
    showAll : async (req,res) => {
        try {

            if(!req.session.cart) {
                let error = new Error()
                error.message = `
                Debes iniciar sesión<br><br>
                <a style="color: blue; text-decoration: underline;" href="/user/login">
                    Ir a la página de inicio de sesión
                </a>
            `;
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
                error.message = `
                Debes iniciar sesión<br><br>
                <a style="color: blue; text-decoration: underline;" href="/user/login">
                    Ir a la página de inicio de sesión
                </a>
            `;
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


     /* BASE DE DATOS  */
     await db.Cart.update(
        {
            amount : req.session.cart.products.find(product => product.id === +id).amount

        },
        {
            where : {
                orderId : req.session.cart.orderId,
                productId : id
            }
        }
     )
        /* -------- */


            } else {
                req.session.cart.products.push({
                    id,
                    name,
                    mainImage,
                    price,
                    discount,
                    amount
                }); 

     /* BASE DE DATOS  */
    await db.Cart.create({
        amount : 1,
        orderId : req.session.cart.orderId,
        productId : id
    })
    /* -------- */

    }

            req.session.cart.total = req.session.cart.products.map(product => product.price * product.amount).reduce((a,b) => a+b, 0)
            
            return res.status(200).json({
                ok : true,
                cart : req.session.cart,
                message : "Producto agregado con exito!"
            })

            
        } catch (error) {
            console.log(error)
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

         /* BASE DE DATOS  */
            await db.Cart.update(
                    {
                        amount : req.session.cart.products.find(product => product.id === +id).amount
                    },
                    {
                        where : {
                            orderId : req.session.cart.orderId,
                            productId : id
                        }
                    }
                )
        /* -------- */
        

            req.session.cart.total = req.session.cart.products.map(product => product.price * product.amount).reduce((a,b) => a+b, 0)

            return res.status(200).json({
                ok : true,
                cart : req.session.cart,
                message : "Producto eliminado con exito!"
            })


        } catch (error) {
            console.log(error)
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
            
         /* BASE DE DATOS  */
         await db.Cart.destroy(
            {
                where : {
                    orderId : req.session.cart.orderId,
                    productId : id
                }
            }
        )
        /* -------- */

            req.session.cart.total = req.session.cart.products.map(product => product.price * product.amount).reduce((a,b) => a+b, 0)

            return res.status(200).json({
                ok : true,
                cart : req.session.cart,
                message : "Producto eliminado con exito!"
            })

        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                cart : null,
                message : error.message || 'Upss, hubo un error'
            })
            
            
        }


    },

    emptyCart : async (req,res) => {
        try {
            if(!req.session.cart) {
                let error = new Error()
                error.message = 'Debes loguearte'
                error.status = 404;
                throw error
            }

            req.session.cart = {
                ...req.session.cart,
                products : [],
                total : 0
              }

        /* BASE DE DATOS  */
         await db.Cart.destroy(
            {
                where : {
                    orderId : req.session.cart.orderId,
                }
            }
        )
        /* -------- */

            return res.status(200).json({
                ok : true,
                cart : req.session.cart,
                message : "El carrito se vació con exito!"
            })
            
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok : false,
                cart : null,
                message : error.message || 'Upss, hubo un error'
            })
            
        }

    }
}