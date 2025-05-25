const convertToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return oneDecimalPlace(celsius);
};

const convertToFahrenheit = function (celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return oneDecimalPlace(fahrenheit);
};

const oneDecimalPlace = function (value) {
  return Math.round(value * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
