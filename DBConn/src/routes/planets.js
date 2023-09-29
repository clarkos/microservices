const { Router } = require("express");
const response = require("../utils/response");
const { Planet } = require("../store/index");

const routes = Router();

routes.get("/", async (req, res) => {
  const data = await Planet.response(res, 200, data);
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
