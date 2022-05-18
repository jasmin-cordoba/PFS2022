"use strict";
exports.__esModule = true;
//Importamos rls para que el usuario ingrese sus datos
var rls = require("readline-sync");
var precioUnitario = rls.questionFloat("Ingrese el precio del producto: ");
console.log("El precio del producto es ", precioUnitario);
var cantidad = rls.questionInt("Ingrese la cantidad de unidades a comprar: ");
console.log("La cantidad es", cantidad);
var preciototal = (precioUnitario * cantidad);
var mesdelaCompra = rls.question("Ingrese el mes de la compra: ");
if (mesdelaCompra == "octubre") {
    var descuento = preciototal * 0.15;
    var preciocondescuento = preciototal - descuento;
    console.log("Su compra con descuento en el Mes Aniversario es de $: " + preciocondescuento);
    console.log("Gracias por elegirnos");
}
else {
    console.log("El valor a pagar es de: $", preciototal);
}
