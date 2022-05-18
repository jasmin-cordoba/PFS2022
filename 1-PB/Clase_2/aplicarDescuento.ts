//Importamos rls para que el cliente ingrese sus datos
import * as rls from "readline-sync";

let precioProducto : number = rls.questionFloat("Ingrese el precio del producto: ");
console.log("El precio del producto es ", precioProducto);
let cantidad : number = rls.questionInt("Ingrese la cantidad de unidades a comprar: ");
console.log("La cantidad es", cantidad);
let preciototal: number = (precioProducto * cantidad);

//Si la compra es mayor a $1000 se aplica el descuento

if (preciototal >1000) {
    let descuento: number = preciototal * 0.1;
    let preciofinal: number = preciototal - descuento;
    console.log("Su descuento es de: $" + descuento);
    
    console.log("La compra es mayor a $1000, obtiene descuento con precio final de: $" + preciofinal);
    
}
else {

    console.log("El valor a pagar es de: $", preciototal);
    
}


