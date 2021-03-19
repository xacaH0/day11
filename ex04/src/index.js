var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  var monitorsList = [];
  for (i = 1; i < 3; i++) {
    monitorsList.push([monitorsListArray[0], i++]);
  }
  for (i = 2; i < 3; i++) {
    monitorsList.push([monitorsListArray[1], i++]);
  }
  for (i = 3; i <= 3; i++) {
    monitorsList.push([monitorsListArray[2], i++]);
  }

  return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
