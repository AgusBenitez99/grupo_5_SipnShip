const { readJSON } = require("../data");
module.exports = {
  index: (req, res) => {
    const products = readJSON("products.json");
    return res.render("index", { products });
  },
  admin: (req, res) => {
    const products = readJSON("products.json");
    return res.render("admin", { products });
  },
  search: (req, res) => {
    const keywords = req.query.keywords;
    const products = readJSON("products.json");
    if (keywords) {
      const product = products.filter((product) => {
        return product.name.toLowerCase().includes(keywords.toLowerCase());
      });
      res.render("results", { products: product, keywords });
    }

    res.render("results", { products });
  },
};
