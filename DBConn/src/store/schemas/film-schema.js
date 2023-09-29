const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("character", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("character", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

filmSchema.statics.upsert = async function (data) {
  const filter = data._id ? { _id: data._id } : {};
  const dataToUpdate = { $set: data };
  return await this.findOneAndUpdate(filter, dataToUpdate, { upsert: true });
};

filmSchema.statics.erase = async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = filmSchema;
