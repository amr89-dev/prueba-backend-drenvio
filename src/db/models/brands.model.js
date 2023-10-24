const mongoose = require("mongoose");

const Brand = mongoose.model("brand", {
  name: {
    type: String,
  },
});

module.exports = Brand;
