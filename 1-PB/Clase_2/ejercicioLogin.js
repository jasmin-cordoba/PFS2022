"use strict";
exports.__esModule = true;
//Importamos rls para que el usuario ingrese sus datos
var rls = require("readline-sync");
var usuario = rls.question("Ingrese su nombre de usuario: ");
console.log("El usuario es ", usuario);
var contraseña = rls.question("Introduzca su contraseña: ", {});
if (usuario == "Juan" && contraseña == "claveJuan") {
    console.log("El usuario y la contraseña son correctos");
}
else {
    console.log("Datos ingresados incorrectos");
}
