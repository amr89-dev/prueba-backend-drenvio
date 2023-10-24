const pricesRouter = require("./prices.router");
const productsRouter = require("./products.router");
const clientsRouter = require("./clients.router");
const brandsRouter = require("./brands.router");

const router = require("express").Router();

const routerApi = (app) => {
  app.use("/api/v1", router);

  router.use("/products", productsRouter);
  router.use("/clients", clientsRouter);
  router.use("/brands", brandsRouter);
  router.use("/price", pricesRouter);
};

module.exports = routerApi;
