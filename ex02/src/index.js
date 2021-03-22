var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  for (var dayCounter = 0; dayCounter < newTemps.length; dayCounter++) {
    var sumTemp = 0;
    for (
      var measurementCounter = 0;
      measurementCounter < newTemps[dayCounter].length;
      measurementCounter++
    ) {
      sumTemp += newTemps[dayCounter][measurementCounter];
    }
    averageDayTemp[dayCounter] = sumTemp / newTemps[dayCounter].length;
  }
  return averageDayTemp;
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
