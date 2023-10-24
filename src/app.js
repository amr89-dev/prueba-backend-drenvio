const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index.router");

const server = express();

server.use(express.json());

const ACEPTED_ORIGINS = ["http://localhost:3001", "http://localhost:5173"];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || !origin.includes(ACEPTED_ORIGINS)) {
      callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
};
server.use(cors(corsOptions));

routerApi(server);

module.exports = server;
