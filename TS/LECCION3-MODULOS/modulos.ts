import {Persona} from './persona';
let persona1 = new Persona('Camilo');

//! ERROR, NO SE PUEDE IMPORTAR A MENOS QUE EL PAQUETE ESTE EN UN SERVIDOR
//* Ejecutar a traves de un servidor, empaquetarlo y distribuirlo a este servidor
//! REVISAR LA GUIA
console.log(persona1);