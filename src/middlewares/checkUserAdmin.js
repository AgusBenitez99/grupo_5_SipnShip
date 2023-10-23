module.exports = (req, res, next) => {
  return req.session.userData?.rol === 1 ? next() : res.redirect("/");
};
