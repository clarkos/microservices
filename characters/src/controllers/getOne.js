const { response } = require("../utils");

module.exports = async (req, res) => {
  const character = await axios.get("http://database:8004/characters/", {
    params: {
      id: req.params,
    },
  });
  // console.log(character);
  response(res, 200, character);
};
