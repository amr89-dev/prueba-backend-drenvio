const clientsController = require("../controllers/clients.controller");

const clientsRouter = require("express").Router();

clientsRouter.get("/", async (req, res) => {
  try {
    const clients = await clientsController.getAll();
    return res.status(200).json(clients);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = clientsRouter;
