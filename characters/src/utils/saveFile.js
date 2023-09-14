const fs = require("fs");

module.exports = (data, dir) => {
  fs.writeFileSync(dir + "/characters.json", JSON.stringify(data, null, 2), {
    encoding: "utf-8",
  });
};
