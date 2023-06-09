//! METODO FILTER
//Genera una copia con la misma cantidad o menor a la del array original
//ES INMUTABLE
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mascotas = [
    { nombre: 'Kira', edad: 4, raza: 'Perro' },
    { nombre: 'Gato', edad: 1, raza: 'Gato' },
    { nombre: 'Gigi', edad: 2, raza: 'Gato' }
];

console.log('Filtrar por numeros menores a 5')
const filteredNumbers = num.filter(x => x <= 5);
console.log(num, filteredNumbers);

console.log('-----------------------------------------');

console.log('Filtrar por raza');

const perros = mascotas.filter(x => x.raza === 'Perro');
console.log(perros);
console.log(mascotas);
