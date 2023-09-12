module.exports = (req, res, next) => {
  return req.session.userData ? next() : res.redirect("/user/login");
};
