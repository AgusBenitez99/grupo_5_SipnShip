const db = require('../database/models');

module.exports = {

  index: (req, res) => {

    db.Product.findAll({
      include : ['brand','section','category']
  })
  .then(products => {
    return res.render("index", { products });
  });
  },

  admin: (req, res) => {
    db.Product.findAll({
      include : ['brand','section','category']
  })
  .then(products => {
    return res.render("admin", { products });
  });
  },

  search: (req, res) => {
    const keywords = req.query.keywords;

    db.Product.findAll({
      include : ['brand','section','category']
  })
  .then(products => {
    if (keywords) {
      const product = products.filter((product) => {
        return product.name.toLowerCase().includes(keywords.toLowerCase());
      });
      res.render("results", { products: product, keywords });
    }

    res.render("results", { products });
  })
}

}