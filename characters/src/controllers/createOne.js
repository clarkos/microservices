const axios = require("axios");
const { response } = require("../utils");
// const Characters = require("../data");

module.exports = async (req, res) => {
  const characters = await axios.post(
    "http://dbconn:8004/characters/",
    req.body
  );
  response(res, 200, characters);
};
