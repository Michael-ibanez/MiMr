/* Manny's Script-A-Nator v.0.0.0.1 :) */

alert("Just type a value into the input box, and it will update the total field");

var inputVal = 0 ;
var todayHours = 0;
var totalHours = 0;

function getInputValue(){
    inputVal = document.getElementById("hours").value;
    document.getElementById("hoursWorked").innerHTML = inputVal;
    totalHours += parseInt(inputVal);
    document.getElementById("hoursTotalWeek").innerHTML = totalHours;
    return true;
}


function newDate(){
    var newT = document.createElement("main-table");
    var newText = document.createTextNode("Water");
    newT.appendChild(newText);
    document.getElementById("column1").appendChild(newT);
}

