module.exports = {
  createOne: asyncBoundary(require("./createOne")),
  getOne: asyncBoundary(require("./getOne")),
  getAll: asyncBoundary(require("./getAll")),
  updateOne: asyncBoundary(require("./updateOne")),
  deleteOne: asyncBoundary(require("./deleteOne")),
};
