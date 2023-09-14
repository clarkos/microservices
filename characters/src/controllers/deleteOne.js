const { response } = require("../utils");
const Characters = require("../data");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characters = await Characters.delete(id);
  response(res, 200, characters);
};
