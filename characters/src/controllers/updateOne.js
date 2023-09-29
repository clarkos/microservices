const axios = require("axios");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const character = await axios.patch(
    "http://dbconn:8004/characters/",
    req.body
  );
  response(res, 200, character);
};
