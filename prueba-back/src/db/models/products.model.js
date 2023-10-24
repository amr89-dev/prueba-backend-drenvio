const mongoose = require("mongoose");
const Brand = require("./brands.model");

const Product = mongoose.model("product", {
  nombre: {
    type: String,
  },
  id_marca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
  },
  specialPrices: {
    type: Object,
  },
  precioBase: {
    type: Number,
  },

  enStock: {
    type: Boolean,
  },
});

module.exports = Product;
