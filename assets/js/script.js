
// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("screen").innerHTML;
    var display = document.getElementById('screen').value = screen + key;
    document.getElementById('screen').innerHTML = display;
}

// Ingresa el valor del botón cero.
// function getZero() {
//     var key = "0";
//     var screen = document.getElementById("screen").value;
//     var display = document.getElementById('screen').value = screen + key;
//     document.getElementById('screen').innerHtML = screen;

// }
//Agrega un decimal.
function addDecimal() {
    var screen = document.getElementById("screen").value;
    var screen = document.getElementById("screen").value = screen + "."
    document.getElementById('screen').innerHTML = screen;
}
//Borra o limpia toda la pantalla.
function clearScreen() {
    var screen = document.getElementById("screen").value = "";
    document.getElementById('screen').innerHTML = screen;
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("screen").value;
    // console.log("solve " + screen)
    console.log("solve " + eval(screen))
    var screen = document.getElementById("screen").value = eval(screen);
    document.getElementById('screen').innerHTML = screen;
}

