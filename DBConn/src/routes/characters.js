const { Router } = require("express");
const response = require("../utils/response");

const routes = Router();

routes.get("/", (req, res) => {
  response(res, 200, data);
});

routes.get("/:id", (req, res) => {
  response(res, 200, data);
});

routes.post("/", (req, res) => {
  response(res, 200, data);
});

routes.patch("/", (req, res) => {
  response(res, 200, data);
});

routes.delete("/", (req, res) => {
  response(res, 200, data);
});

module.exports = routes;
