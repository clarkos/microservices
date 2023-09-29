const { response } = require("../utils");

module.exports = async (req, res) => {
  const characters = await axios.get("http://dbconn:8004/characters/", {
    params: {
      id: req.params,
    },
  });
  response(res, 200, characters);
};
