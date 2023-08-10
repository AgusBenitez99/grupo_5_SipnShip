module.exports={
    edit:(req,res)=>{
        return res.render('product/edit')
    },
    detail:(req,res)=>{
        return res.render('product/detail')
    },
    trolley:(req,res)=>{
        return res.render('product/trolley')
    }
}