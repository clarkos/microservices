const { response } = require("../utils");
const Characters = require("../data");

module.exports = async (req, res) => {
  const character = await Characters.update(req.body);
  response(res, 200, character);
};
