const characters = require("./characters.json");
const { saveFile } = require("../utils");

module.exports = {
  list: () => {
    return characters;
  },

  create: (data) => {
    characters.push(data);
    saveFile(characters, __dirname);
    return data;
  },

  find: (id) => {
    const found = characters.filter((item) => item.id === id);
    return found;
  },

  update: (data) => {
    const newData = {
      ...data,
      films: data.films.split(","),
    };

    const charIndex = characters.findIndex((char) => char.id === data.id);
    if (charIndex !== -1) {
      characters[charIndex] = { ...characters[charIndex], ...newData };
      saveFile(characters, __dirname);
      return characters[charIndex];
    }
    return false; // Record not found
  },

  delete: (id) => {
    const charIndex = characters.findIndex((record) => record.id === id);
    if (charIndex !== -1) {
      characters.splice(charIndex, 1);
      return {
        deleted: true,
      }; // Record deleted successfully
    }
    return {
      deleted: false,
      info: "character not found",
    }; // Record not found
  },
};
