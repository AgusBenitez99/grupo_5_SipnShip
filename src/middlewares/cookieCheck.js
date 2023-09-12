module.exports = (req,res,next) => {
    if(req.cookies.remember){
        req.session.userData = req.cookies.remember
    }
    next()
}