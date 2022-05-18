"use strict";
exports.__esModule = true;
//Importamos rls para que el cliente ingrese sus datos
var rls = require("readline-sync");
var precioProducto = rls.questionFloat("Ingrese el precio del producto: ");
console.log("El precio del producto es ", precioProducto);
var cantidad = rls.questionInt("Ingrese la cantidad de unidades a comprar: ");
console.log("La cantidad es", cantidad);
var preciototal = (precioProducto * cantidad);
//Si la compra es mayor a $1000 se aplica el descuento
if (preciototal > 1000) {
    var descuento = preciototal * 0.1;
    var preciofinal = preciototal - descuento;
    console.log("Su descuento es de: $" + descuento);
    console.log("La compra es mayor a $1000, obtiene descuento con precio final de: $" + preciofinal);
}
else {
    console.log("El valor a pagar es de: $", preciototal);
}
