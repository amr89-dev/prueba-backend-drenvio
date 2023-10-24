const brandsController = require("../controllers/brands.controller");

const brandsRouter = require("express").Router();

brandsRouter.get("/", async (req, res) => {
  try {
    const brands = await brandsController.getAll();
    return res.status(200).json(brands);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = brandsRouter;
