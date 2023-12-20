const db = require('../database/models');

const getAllCategory = async(req,res)=>{
    try {
        const categoriesInDB= await db.Category.findAll({
            include: ['products']
        });

        return res.status(200).json({
            ok: true,
            data: categoriesInDB,
            count: categoriesInDB.length
        });

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "No se pudo traer las categorias",
          });
    }
};

module.exports ={
    getAllCategory
}