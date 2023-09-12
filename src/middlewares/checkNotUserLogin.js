module.exports = (req,res,next) => {
    if(!req.session.userData){
        next()
    } else {
        return res.redirect('/user/profile')
    }
}