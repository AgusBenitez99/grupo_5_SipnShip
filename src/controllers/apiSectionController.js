const db = require('../database/models');

const getAllSection = async(req,res)=>{
    try {
        const sectionInDB= await db.Section.findAll({
            include: ['products']
        });

        return res.status(200).json({
            ok: true,
            data: sectionInDB,
            count: sectionInDB.length
        });

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "No se pudo traer las secciones",
          });
    }
};

module.exports ={
    getAllSection
}