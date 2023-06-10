//! CLOSURES
//* Son la combinacion de una funcion y el alcance lexico que tiene
//* Se crea al momento de ejecutar una funcion

// const x = 'Kira';
// const fn = () => {
//     const y = 'Fluffy';
//     console.log(x, y)
// }

// fn();

import fetch from 'isomorphic-fetch';


// Recibir el dominio y que reciba el path para comsumir los recursos
const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`;

    return ({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x)
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json()),
    });
}

const base = crudder('https://jsonplaceholder.typicode.com');
const todos = base('todos');

todos.get().then(x => console.log(x[0]));