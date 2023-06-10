//! TRAMPOLINES
//* Elimina la barrera de Tail Call Optimization

//! El siguiente codigo, tira el error Maximum call stack size exceeded
/*
const suma = (num, sum = 0) => (
    num === 0
    ? sum
    : suma(num - 1, sum + num)
    );
    
    const res = suma(10000); //Razon del error
    console.log(res);
*/

//! Recursividad utilizando Trampolines para que no de el error de MCSSE
//Recibe y retorna una Function, el ...args y junta/guarda todos los argumentos dentro de un Array
const trampoline = fn => (...args) => {
    let result = fn(...args); //Llama a la fn y le pasa todos los argumentos que se guardaron
    while (typeof result === 'function') {
        result = result();
    }
    return result;
}

const suma = (num, sum = 0) => (
    num === 0
    ? sum
    : () => suma(num - 1, sum + num)
    );

const tsuma = trampoline(suma);
const res = tsuma(10000);
console.log(res);


