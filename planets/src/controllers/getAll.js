const planets = require("../data/planets.json");
module.exports = (req, res) => {
  res.status(200).json(planets);
};
