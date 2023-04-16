
document.getElementById('screen').innerHTML = 0;

function getValue(buttonValue) {
    if (document.getElementById('screen').innerHTML === "0") {

        document.getElementById('screen').innerHTML = "";

    };

    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").innerHTML;
    var display = document.getElementById('screen').value = screen + key;
    document.getElementById('screen').innerHTML = display;

};

function addDecimal() {

    var screen = document.getElementById("screen").innerHTML;

    if (screen === "0") {
        var screen = document.getElementById("screen").value = "0.";
    } else {
        var screen = document.getElementById("screen").value = screen + ".";
    }

    document.getElementById('screen').innerHTML = screen;

};

function clearScreen() {
    
    var screen = document.getElementById("screen").value = "0";
    document.getElementById('screen').innerHTML = screen;

}

function solve() {

    var screen = document.getElementById("screen").value;
    console.log("solve " + eval(screen));
    var screen = document.getElementById("screen").value = eval(screen);
    document.getElementById('screen').innerHTML = screen;

};