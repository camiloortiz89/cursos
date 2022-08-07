//!Concepto:
//! Es pasar por parametros a una funcion

function function1() {
    return 'funcion 1';
}


function function2() {
    return 'funcion 2';
}

//! LAS FUNCIONES SE EJECUTAN DE MANERA SECUENCIAL
//* Se ejecutan a medida que se invocan
//* Tambien se pueden invocar antes de instanciar la funcion ya que aplica "hoisting" y por defecto js "mueve" las funciones al inicio del file
console.log(function1());
console.log(function2());

console.log(function2());
console.log(function1());


//!APLICANDO CALLBACK

// Recibe como parametro la funcion (una funcion es un objeto)
function sum(op1, op2, funCabllback) {
    let res = op1 + op2;

    //! Invoca la funcion, imprimiendo "res" en consola
    funCabllback(`El resultado es: ${res}`);
}

function imprimir(mensaje) {
    console.log(mensaje); 
}

// Con el nombre de la funcion le pasa toda la informacion (parametros y cuerpo) no es necesario () 
sum(5, 3, imprimir);


//! Llamadas Asincronas

//! SETTIMEOUT
function funcionCallback() {
    console.log('Saludo asincrono');
}

//Despues de 3 se ejecuta
// setTimeout(funcionCallback, 3000); 

//!SETINTERVAL

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
};

// setInterval(reloj, 1000);