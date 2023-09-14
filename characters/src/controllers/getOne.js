const { response } = require("../utils");
const Characters = require("../data");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characters = await Characters.find(id);
  console.log(characters);
  response(res, 200, characters);
};
