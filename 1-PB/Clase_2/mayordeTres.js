"use strict";
exports.__esModule = true;
//Importamos rls para que el usuario ingrese sus datos
var rls = require("readline-sync");
var numeroUno = rls.questionInt("Ingrese el Numero 1: ");
var numeroDos = rls.questionInt("Ingrese el Numero 2: ");
var numeroTres = rls.questionInt("Ingrese el Numero 3: ");
if (numeroUno > numeroDos && numeroTres) {
    console.log("El numero mayor es: ", numeroUno);
}
else {
    if (numeroDos > numeroUno && numeroTres) {
        console.log("El numero mayor es:", numeroDos);
    }
    else {
        if (numeroTres > numeroUno && numeroDos) {
            console.log("El numero mayor es:", numeroTres);
        }
        else {
        }
    }
}
