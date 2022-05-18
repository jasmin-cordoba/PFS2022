"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaPersona = rls.questionFloat("Ingrese la altura del participante:");
if (alturaPersona >= 1.30) {
    console.log("Validado el acceso para ingresar a la montaña rusa");
}
else {
    console.log("No cumple con los requisitos para el acceso");
}
