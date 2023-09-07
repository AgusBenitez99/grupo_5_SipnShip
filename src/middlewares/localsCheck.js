module.exports = (req,res,next) => {
    res.locals.userData = req.session.userData && req.session.userData;
    next()
}