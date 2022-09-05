//! Sentencia IF/ELSE
//* Evalua condicion Verdadero o Falso, se pueden tener If's anidados
//? cuando es 1 linea de codigo, no es necesario utilizar {} 'Llaves'

if (true) {
    console.log("Condicion Verdadera");
} else {
    console.log("Condicion Falsa");
}

//* Mejor practica
if (true) {
    console.log("Condicion Verdadera");
}

if (false) {
    console.log("Condicion Falsa");
}

// --------------------------------------------------------------- //

//! Sentencia SWITCH
/**
 ** El break se utiliza para no seguir con los casos
 ** es decir, cuando ingrese en el caso X, se ejecute el codigo dentro de este
 ** y termine la sentencia
 */

let mes = 11;
let estacion = 'Estación desconocida';

//! Utiliza Comparacion ESTRICTA {===}
switch(mes){

    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;

    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;

    case 6: case 7: case 8:
        estacion = 'Verano';
        break;

    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;

    // Se ejecuta cuando la condicion no coinicide con ninguno de los anteriores casos
    default:
        estacion = 'Valor incorrecto';
}
console.log(estacion);
