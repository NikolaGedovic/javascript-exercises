const convertToCelsius = function (temp) {
  const tempCelsius = (temp - 32) * 5 / 9;
  const roundedCelsius = Math.round(tempCelsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function (temp) {
  const tempFahrenheit = temp * (9 / 5) + 32;
  const roundedFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
