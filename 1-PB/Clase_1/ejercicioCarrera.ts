import * as readlineSync from "readline-sync";
//Ingresar por teclado el tiempo de cada vuelta
let vuelta1: number = readlineSync.questionFloat( "Ingrese la primera vuelta (seg):");
let vuelta2: number = readlineSync.questionFloat( "Ingrese la segunda vuelta (seg):");
let vuelta3: number = readlineSync.questionFloat( "Ingrese la tercera vuelta (seg):");
let vuelta4: number = readlineSync.questionFloat( "Ingrese la cuarta vuelta (seg):");

// Calcular e imprimir por consola el tiempo total de las 4 vueltas
console.log ("Tiempo total (seg)" + vuelta1 + vuelta2 + vuelta3 + vuelta4);

// Calcular e imprimir por consola el promedio de vuelta sumando el tiempo total y dividiendo por 4
console.log("Promedio vuelta en seg:" + ((vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4));

