const Product = require("../db/models/products.model");
const Client = require("../db/models/clients.model");
const Brand = require("../db/models/brands.model");

const priceController = {
  getSpecialPrice: async (params) => {
    const { user_id, nombre_producto } = params;

    const client = await Client.findById(user_id).populate("brands");

    const product = await Product.findById(nombre_producto).populate(
      "id_marca"
    );
    const brandIds = client.brands.map((brand) => brand._id.toString());
    const productBrandId = product.id_marca._id.toString();

    if (brandIds.includes(productBrandId) && product.specialPrices) {
      return product.specialPrices["1001"];
    } else {
      return product.precioBase;
    }
  },
};

module.exports = priceController;
