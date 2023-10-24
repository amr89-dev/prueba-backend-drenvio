const priceController = require("../controllers/price.controller");

const pricesRouter = require("express").Router();

pricesRouter.get("/:user_id/:nombre_producto", async (req, res) => {
  try {
    const specialPrice = await priceController.getSpecialPrice(req.params);
    res.status(200).json(specialPrice);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = pricesRouter;
