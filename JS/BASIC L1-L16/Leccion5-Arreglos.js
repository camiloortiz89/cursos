//! Arreglos
//* Es de tipo Object que permite almacenar varios objetos con una posicion (index)

//* Declaracion de Arreglos

//! ¡No se utiliza!
let arreglo1 = new Array('Camilo', 'Nahuel', 'Ortiz');
console.log(arreglo1);

//* ¡Si se utiliza!
/**
 * Es una constante porque no se cambia el tipo de dato (por referencia)
 * La constante almacena la direccion donde se encuentera en memoria
 * pero se puede modificar el contenido del arreglo
 */
const arreglo2 = ['Camilo', 'Nahuel', 'Ortiz'];
console.log(arreglo2);

// --------------------------------------------------------------- //

//! Recorrer arreglos
// No recomendado
console.log(arreglo2[0]);
console.log(arreglo2[1]);
console.log(arreglo2[2]);

//Mas utilizado y recomendable
for (let i = 0; i < arreglo2.length; i++) {
    console.log(`${i+1}: ${arreglo2[i]}`);
}

// --------------------------------------------------------------- //

//! Modificar elementos de un arreglo
arreglo2[2] = "Negrin";
console.log(arreglo2[2]);

// --------------------------------------------------------------- //

//! Agregar elementos a un arreglo
arreglo2.push('Ortiz');
console.log(arreglo2);

// --------------------------------------------------------------- //

//! Saber si la variable es un arreglo
// Opcion 1
console.log(Array.isArray(arreglo2));
// Opcion 2
console.log(arreglo2 instanceof Array);