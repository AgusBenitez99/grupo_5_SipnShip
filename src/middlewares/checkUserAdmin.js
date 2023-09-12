module.exports = (req, res, next) => {
  return req.session.userData?.rol === "admin" ? next() : res.redirect("/");
};
