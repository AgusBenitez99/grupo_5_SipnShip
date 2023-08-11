module.exports={
    edit:(req,res)=>{
        return res.render('product/edit')
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