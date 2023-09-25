function infoValidation(object) {
  const requiredProperties = [
    "name",
    "height",
    "skin_color",
    "eye_color",
    "gender",
    "homeworld",
    "films",
  ];
  const validatorFn = {
    // id: (value) => {
    //   return (typeof(value) === Number)
    // },
    // name: function (value) {
    //   return value.length > 0;
    // },
    films: function (value) {
      return Array.isArray(value);
    },
  };

  if (typeof object !== "object") {
    throw new Error("The object to be validated must be an object");
  }

  // Check if the required properties are present
  for (const property of requiredProperties) {
    if (!object.hasOwnProperty(property)) {
      throw new Error(
        `The object is missing the required property "${property}"`
      );
    }
  }

  // Validate the values of the properties
  const objectKeys = Object.keys(object);
  for (const property of objectKeys) {
    // Check if the property has a validator function
    if (validatorFn[property]) {
      const value = object[property];
      if (!validatorFn[property](value)) {
        throw new Error(`The value of the property "${property}" is invalid`);
      }
    }
  }
  return true;
}

module.exports = { infoValidation };
