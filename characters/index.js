const server = require("./src/server");

const PORT = process.env.PORT || 8001;

server.listen(PORT, () => {
  console.log(`Characters Service listening on port ${PORT}`);
});
