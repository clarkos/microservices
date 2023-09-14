const films = require("../data/films.json");
module.exports = (req, res) => {
  res.status(200).json(films);
};
