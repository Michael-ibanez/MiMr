/* Manny's Script-A-Nator v.0.0.0.1 :) */

alert("Just type a value into the input box, and it will update the total field");

var inputVal = 0 ;

function getInputValue(){
    inputVal = document.getElementById("hours").value;
    var newHours = document.createTextNode(inputVal);
    document.getElementById("hoursWorked").innerHTML = inputVal;
}