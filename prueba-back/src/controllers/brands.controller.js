const Brand = require("../db/models/brands.model");

const brandsController = {
  getAll: async () => {
    const brands = await Brand.find();
    if (!brands) {
      throw new Error("No se encontraron marcas");
    }
    return brands;
  },
};

module.exports = brandsController;
