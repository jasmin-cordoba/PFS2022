//Importamos rls para que el usuario ingrese sus datos
import * as rls from "readline-sync";

let usuario : string = rls.question("Ingrese su nombre de usuario: ");
console.log("El usuario es ", usuario);
let contraseña : string = rls.question("Introduzca su contraseña: ", { 
 hideEchoBack: true 
    });

if (usuario=="Juan" && contraseña=="claveJuan") {
    console.log("El usuario y la contraseña son correctos");
 }else {  

    console.log("Datos ingresados incorrectos");
 }