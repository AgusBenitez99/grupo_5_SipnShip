const db = require('../database/models')
const createError = require('http-errors')

const checkEmail = async (req,res) => {
    try {

        if(!req.query.email){
            let error = new Error("Falta el parámetro email")
            error.status = 400
            throw error
        }

        const user = await db.User.findOne({
            where : {
                email : req.query.email
            }
        })

        return res.status(200).json({
            ok : true,
            data : user ? true : false
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error'
        })
    }
}

const toggleFavorite = async (req, res) => {
  
    try {
        const productId = req.query.productId;
        const userId = req.query.userId;

        if(!productId){
            throw createError(400, 'Se precisa el id del producto')
        }

        if(!userId){
            throw createError(401, 'El usuario no esta logueado')
        }

        const favorite = await db.Favorite.findOne({
            where : {
                productId,
                userId
            }
        });

        if(favorite){
                await favorite.destroy()
            }else{
            await db.Favorite.create({
                productId,
                userId
            })
        }

        const favorites = await db.Favorite.findAll({
            where : {
                userId
            }
        })

        return res.status(200).json({
            ok : true,
            data : favorites
        })

        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error'
        })        
    }
}

module.exports = {
    checkEmail,
    toggleFavorite
}