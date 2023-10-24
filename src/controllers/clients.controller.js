const Client = require("../db/models/clients.model");

const clientsController = {
  getAll: async () => {
    const clients = await Client.find({});
    if (!clients) {
      throw new Error("No se encontraron clientes");
    }
    return clients;
  },
};

module.exports = clientsController;
