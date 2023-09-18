const { readJSON } = require("../data");
const products = readJSON("products.json");
module.exports = {
  index: (req, res) => {
    return res.render("index", { products });
  },
  admin: (req, res) => {
    return res.render("admin", { products });
  },
  search: (req, res) => {
    const keywords = req.query.keywords;
    if (keywords) {
      const product = products.filter((product) => {
        return product.name.toLowerCase().includes(keywords.toLowerCase());
      });
      res.render("results", { products: product, keywords });
    }

    res.render("results", { products });
  },
};
