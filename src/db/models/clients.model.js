const mongoose = require("mongoose");
const Brand = require("./brands.model");

const Client = mongoose.model("client", {
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  tel: {
    type: String,
  },
  brands: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
    },
  ],
});

module.exports = Client;
