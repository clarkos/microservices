const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const server = express();

// server.use(express.json());
server.use(bodyParser.json());
server.use(morgan("dev"));

server.use("/characters", require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("There's no such resource on this service");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
