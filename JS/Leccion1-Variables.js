//! Tipos de datos
//* Variables Dinamicas

// Tipo de dato String
let nombre = "Camilo"; 
console.log(nombre);

//Tipo de dato Entero
let edad = 19;
console.log(edad);

//Tipo de dato Decimal
let precio = 1.19;
console.log(precio);

//Tipo de dato Booleano
let boolean = true;
console.log(boolean);

// Tipo de dato Arreglo
let arreglo = ["Camilo", "Ortiz"]; 
console.log(arreglo);

// Tipo de dato Objeto
let objeto = { //* Objeto. tiene "Atributos" con un valor asignado
    nombre : "Camilo",
    apellido : "Ortiz"
}
console.log(objeto);

// Tipo de dato funcion
function nom() {
    console.log("Esto es una funcion");
}
console.log(nom);

// Variables constantes (no cambia su valor y son globales)
//! Normalmente se instancian al inicio del programa
const cedula = 52719102;

//* Retornar el tipo de variable
console.log(typeof objeto); 

//! Concatenacion
//* Opcion 1 (Mas largo)
//No respeta espacios o salto de lineas
//* Salto de linea \n
let conc1 = 'Nombre: ' + nombre + '\n' + 'Edad: ' +edad;

//* Opcion 2 (Mas corto)
// Respeta los espacios, tabulaciones y salto de lineas
let conc2 = `${nombre} ${edad}`


