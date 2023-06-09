//! METODO REDUCE
// Tiene 2 argumentos, Acumulador y Elemento, retorna el Acumulador
// ES INMUTABLE

//Funcion Reducer
//const reducer = (acumulador, valorActual) => nuevoAcumulador;

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mascotas = [
    { nombre: 'Kira', edad: 4, raza: 'Perro' },
    { nombre: 'Gato', edad: 1, raza: 'Gato' },
    { nombre: 'Gigi', edad: 2, raza: 'Gato' }
];
const anidado = [1, [2, 3], 4, [5]];

console.log('Retornar suma de los elementos');
//! El segundo parametro (0), es el valor inicial de acc *Puede ser cualquier valor*
const acumulador = num.reduce((acc, elem) => acc + elem, 0);
console.log(acumulador);

console.log('-----------------------------------------');

console.log('Indexar los objetos por nombre de mascotas');
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});
console.log(indexed);
console.log(indexed['Kira']);

console.log('-----------------------------------------');

// Reducir el arreglo 'anidado' a un arreglo simple
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);

console.log('-----------------------------------------');