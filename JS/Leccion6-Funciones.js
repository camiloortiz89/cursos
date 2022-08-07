//! Funciones
// Es codigo reutilizable, lo definis con un nombre y lo invocas en cualquier momento
/* 
Las funciones de JS podemos invocarlas/llamarlas antes o despues de definirlas
tambien conocido como Hoisting
*/

//*Sintaxis
//! Sin Return
// Sin parametros 
//! Con hoisting
function func (){
    console.log("Esto es una funcion");
}
func();

// Con parametros 
//! Sin hoisting
suma(6, 12);
function suma (a, b){
    console.log(a + b);
}
//* Estas funciones no Retornan ningun valor
//* Aunque si no ponemos de forma explicita el Return, JS lo agrega automaticamente
// *Solo que no Retorna ningun valor

// --------------------------------------------------------------- //

//! Con Return
// Sin parametros
function myFunc (){
    return 'Hola mundo';
}
console.log(myFunc());

// Con parametros
function resta(a, b){
    return a-b;
}
console.log(resta(2, 9));

//! Estas funciones Retornan cualquier valor
//* Lo puedes usar como en el ejemplo, como condicional, guardar su valor en variables, etc

// --------------------------------------------------------------- //

//! Funciones de Tipo Expresion
/*
Si bien la funcion no tiene nombre, se hace referencia a ella con la variable
*/
let x = function (){
    return 9 + 5;
};

let resu = x();
console.log(resu);

// --------------------------------------------------------------- //

//! Self Invoking
//* Tambien conocido como Funcion Anonima

//! Solo se puede invocar despues de su declaracion ya que no tiene nombre
//* Es util cuando necesites cargar cosas al inicio de tu programa
(function(){
    console.log("Ejecutar funcion");
})();

// --------------------------------------------------------------- //

//! Funciones Flecha
//* Similar a la funcion de tipo Expresion
// Se hace referencia al return de la funcion (este caso "Hola mundo") en la variable
const funcFlecha = () => "Hola mundo";
resu = funcFlecha();

console.log(resu);

// --------------------------------------------------------------- //

//! Paso por Valor de Funciones

//* A tener en cuenta
//Valor primitivo (No tiene propiedades ni metodos)
x = 20;

function cambiarValor(a){
    a = 1000;
}
cambiarValor(x);// Le pasas el valor 10 de x
console.log(x)

//! Paso por Referencia de Funciones

const persona = {
    nombre: 'Camilo',
    apellido: 'Ortiz'
}

function cambiarValorObjeto (p){
    p.nombre = 'Nahuel';
    p.apellido = 'Ortiz';
}

//Antes de cambiar valor
console.log(persona);

// Despues de cambiar valor
cambiarValorObjeto(persona);
console.log(persona);