const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("Character", require("./schemas/character-schema")),
  Film: conn.model("Film", require("./schemas/film-schema")),
  Planet: conn.model("Planet", require("./schemas/planet-schema")),
};
