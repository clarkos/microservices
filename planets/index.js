const server = require("./src/server");

const PORT = process.env.PORT || 8003;

server.listen(PORT, () => {
  console.log(`Plantes Service listening on port ${PORT}`);
});
