const Product = require("../db/models/products.model");

const productsController = {
  getAll: async (query) => {
    const { all } = query;
    if (!all) {
      const products = await Product.find({ enStock: true });
      if (!products) {
        throw new Error("No se encontraron productos");
      }
      return products;
    } else {
      const products = await Product.find({});
      if (!products) {
        throw new Error("No se encontraron productos");
      }
      return products;
    }
  },
};

module.exports = productsController;
