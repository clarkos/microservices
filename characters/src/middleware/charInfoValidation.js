const { infoValidation } = require("../utils");

module.exports = (req, res, next) => {
  const body = req.body;
  const isValid = infoValidation(body);

  if (isValid !== true) throw new Error(isValid.message);
  console.log("middleware atravesado");
  next();
};
