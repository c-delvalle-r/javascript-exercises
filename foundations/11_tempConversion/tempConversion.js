const convertToCelsius = function(degreesFarenheit) {
  return Math.round((degreesFarenheit - 32) / 1.8 * 10) / 10;
};

const convertToFahrenheit = function(degreesCelsius) {
  return Math.round(((degreesCelsius * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
