const productsController = require("../controllers/products.controller");

const productsRouter = require("express").Router();

productsRouter.get("/", async (req, res) => {
  try {
    const products = await productsController.getAll(req.query);
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = productsRouter;
