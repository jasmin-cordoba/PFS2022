"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
//Ingresar por teclado el tiempo de cada vuelta
var vuelta1 = readlineSync.questionFloat("Ingrese la primera vuelta (seg):");
var vuelta2 = readlineSync.questionFloat("Ingrese la segunda vuelta (seg):");
var vuelta3 = readlineSync.questionFloat("Ingrese la tercera vuelta (seg):");
var vuelta4 = readlineSync.questionFloat("Ingrese la cuarta vuelta (seg):");
// Calcular e imprimir por consola el tiempo total de las 4 vueltas
console.log("Tiempo total (seg)" + vuelta1 + vuelta2 + vuelta3 + vuelta4);
// Calcular e imprimir por consola el promedio de vuelta sumando el tiempo total y dividiendo por 4
console.log("Promedio vuelta en seg:" + ((vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4));
