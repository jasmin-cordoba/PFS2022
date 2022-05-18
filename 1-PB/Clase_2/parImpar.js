"use strict";
exports.__esModule = true;
//Importamos rls para que el cliente ingrese sus datos
var rls = require("readline-sync");
var numeroIngresado = rls.questionFloat("Ingrese un numero: ");
if (numeroIngresado % 2 == 0) {
    console.log("El numero es par");
}
else {
    console.log("Su numero es impar");
}
if (numeroIngresado == 0) {
    console.log("El numero ingresado es: 0");
}
else {
}
