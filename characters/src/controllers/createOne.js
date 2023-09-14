const { response } = require("../utils");
const Characters = require("../data");

module.exports = async (req, res) => {
  const characters = await Characters.create(req.body);
  response(res, 200, characters);
};
