// Importar rls para el ingreso de datos
import * as rls from "readline-sync";

let posicioncompetidor: number = rls.questionInt("Ingrese la posición de llegada del competidor: ");

// Determinar con switch una secuencia de seleccion multiple

switch (posicioncompetidor){
    case 1:
        console.log("Entregar medalla de oro");
        break;
    case 2:
        console.log("Entregar medalla de plata");
        break;
    case 3:
        console.log("Entregar medalla de bronce");
        break;

    default:
        console.log("Entregar mencion de participacion");   


}