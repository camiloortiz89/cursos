//! METODO MAP
// Genera una copia del arreglo original con la misma cantidad de elementos pero con los elementos cambiados

const suma = (ns) => {
    let ac = 0;
    for (let i = 0; i < ns.length; i++) {
        ac += ns[i]
    }
    return ac
}//Se puede reemplazar por el metodo Reduce

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mascotas = [
    { nombre: 'Kira', edad: 4, raza: 'Perro' },
    { nombre: 'Gato', edad: 1, raza: 'Gato' },
    { nombre: 'Gigi', edad: 2, raza: 'Gato' }
];

console.log('Multiplicar * 2');
const multiplicados = num.map(x => x * 2);
console.log(num, multiplicados);

console.log('-----------------------------------------');

console.log('Crear parejas');
const multPares = num.map(x => [x, x]);
console.log(multPares);

console.log('-----------------------------------------');

console.log('Sumar los elementos');
const res1 = suma(num);
console.log(res1);

console.log('-----------------------------------------');

console.log('Sumar edades de mascotas');
const edadMascotas = mascotas.map(x => x.edad);
const res2 = suma(edadMascotas);
console.log(res2);
