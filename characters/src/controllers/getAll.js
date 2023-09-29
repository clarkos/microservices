const { response } = require("../utils");

module.exports = async (req, res) => {
  const characters = await axios.patch("http://dbconn:8004/characters/");
  response(res, 200, characters);
};
