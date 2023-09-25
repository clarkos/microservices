const { infoValidation, response } = require("../utils");

module.exports = (req, res, next) => {
  // Get the request body
  const body = req.body;
  const isValid = infoValidation(body);

  if (isValid !== true) throw new Error(isValid.message);
  // The request is valid, so call the next middleware
  console.log("middleware atravesado");
  next();
};
