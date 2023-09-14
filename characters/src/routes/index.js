const { Router } = require("express");
const controllers = require("../controllers");
const { charInfoValidation } = require("../middleware");

const routes = Router();

routes.get("/", controllers.getAll);
routes.get("/:id", controllers.getOne);
routes.post("/", controllers.createOne);
routes.patch("/", controllers.updateOne);
routes.delete("/", controllers.deleteOne);

module.exports = routes;
