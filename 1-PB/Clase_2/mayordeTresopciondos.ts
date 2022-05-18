//Importamos rls para que el usuario ingrese sus datos
import * as rls from "readline-sync";

let numeroUno: number= rls.questionInt("Ingrese el Numero 1: ");
let numeroDos: number= rls.questionInt("Ingrese el Numero 2: ");
let numeroTres: number= rls.questionInt("Ingrese el Numero 3: ");



if (nroUno > nroDos && nroUno > nroTres){
    mayorDeTres=nroUno;
} else if (nroDos > nroTres){
    mayorDeTres=nroDos;
} else {
    mayorDeTres=nroTres;
}