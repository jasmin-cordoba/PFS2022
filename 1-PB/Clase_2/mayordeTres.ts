//Importamos rls para que el usuario ingrese sus datos
import * as rls from "readline-sync";

let numeroUno: number= rls.questionInt("Ingrese el Numero 1: ");
let numeroDos: number= rls.questionInt("Ingrese el Numero 2: ");
let numeroTres: number= rls.questionInt("Ingrese el Numero 3: ");

if (numeroUno >numeroDos && numeroTres){
console.log("El numero mayor es: ", numeroUno)

}else{

    if (numeroDos >numeroUno && numeroTres){
        console.log("El numero mayor es:", numeroDos)
    
    }else{
        
        if (numeroTres >numeroUno && numeroDos){
            console.log("El numero mayor es:", numeroTres)
            
        }else{

        }
    }
}

 

