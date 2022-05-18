//Importamos rls para que el usuario ingrese sus datos
import * as rls from "readline-sync";

let precioUnitario : number = rls.questionFloat("Ingrese el precio del producto: ");
console.log("El precio del producto es ", precioUnitario);
let cantidad : number = rls.questionInt("Ingrese la cantidad de unidades a comprar: ");
console.log("La cantidad es", cantidad);
let preciototal: number = (precioUnitario * cantidad);
let mesdelaCompra: string= rls.question("Ingrese el mes de la compra: ");

if (mesdelaCompra== "octubre"){
    let descuento: number= preciototal*0.15;
    let preciocondescuento: number= preciototal-descuento
    console.log("Su compra con descuento en el Mes Aniversario es de $: " + preciocondescuento);
    console.log("Gracias por elegirnos");
    
    
}
else {

    console.log("El valor a pagar es de: $", preciototal);

}