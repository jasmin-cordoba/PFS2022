"use strict";
exports.__esModule = true;
//Importamos rls para que el usuario ingrese sus datos
var rls = require("readline-sync");
var salarioactual = rls.questionInt("Ingrese su salario actual:$ ");
if (salarioactual < 15000) {
    console.log("Obtiene 20% de aumento:$ " + (salarioactual + (salarioactual * 0.20)));
}
else {
    if (salarioactual >= 15001 && salarioactual <= 20000) {
        console.log("Obtiene un 10% de aumento" + (salarioactual + (salarioactual * 0.10)));
    }
    else {
        if (salarioactual >= 20001 && salarioactual <= 25000) {
            console.log("Obtiene 5% de aumento: " + (salarioactual + (salarioactual * 0.05)));
        }
        else {
            console.log("el sueldo actual indicado no aplica ");
        }
    }
}
