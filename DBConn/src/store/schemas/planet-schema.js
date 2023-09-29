const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

planetSchema.statics.upsert = async function (data) {
  const filter = data._id ? { _id: data._id } : {};
  const dataToUpdate = { $set: data };
  return await this.findOneAndUpdate(filter, dataToUpdate, { upsert: true });
};

planetSchema.statics.erase = async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = planetSchema;
