var tempType = document.getElementsByName('temptype'); //radio button
var button = document.getElementById("submit");         //submit button
var output = document.getElementById('output');
var reset = document.getElementById('reset');
var inputForm = document.getElementById('converter');

function resetPage(clickEvent) {
    if (tempType[0].checked || tempType[1].checked){
    tempType[0].checked = false;
    tempType[1].checked = false;
}
     inputForm.value = '';
}

function userTemp() {                            //return value of input
    temp = document.getElementById('converter');
    return temp.value;
}

function toCelsius (temp) {
    var C = (temp - 32) * (5/9);
    return C;
}

function toFahrenheit (temp) {
    var F = temp * (9/5) + 32;
    return F;
}



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    var temp = userTemp();
    if (isNaN(temp) || temp === "") {
        alert('write a number!');
} else if (tempType[0].checked) {
    output.innerHTML = toCelsius(temp);
} else if (tempType[1].checked) {
    output.innerHTML = toFahrenheit(temp);
}


  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
reset.addEventListener("click", resetPage);
