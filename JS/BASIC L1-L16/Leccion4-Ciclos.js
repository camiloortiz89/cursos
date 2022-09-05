//! Ciclo While
//* Evalua una condicion Verdadera y se ejecutará infinitamente 
//* mientras la misma sea Verdadera, se ejecuta de 0 a N veces

let variable = 0;
while (variable < 3) {
    console.log(variable);
    variable++
}

// --------------------------------------------------------------- //

//! Ciclo Do While
//* Ejecuta todo el codigo siguiente a Do y despues evalua una condicion
//* Se ejecuta de 1 a N veces
variable = 0;
do {
    console.log(variable);
    variable++;
} while (variable < 3);

// --------------------------------------------------------------- //

//! Ciclo For
//* Tiene definido en su sintaxis la inicializacion, condicion e incremento/decremento
//* se ejecuta de 0 a N mientras la condicion sea Verdadera

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// --------------------------------------------------------------- //

//! Palabra Break
//* Rompe el Ciclo/Caso
// Romper/Salir el ciclo cuando encuentre el primer numero Par
for (let j = 0; j <=10 ; j++) {
    if (j % 2 == 0) {
        console.log(j);
        break;
    }
}

//! Palabra continue
// Sigue a la siguiente iteracion 
//* NO ROMPE EL CICLO
// Si el numero es impar, que pase al siguiente caso/iteracion
for (let k = 0; k <= 10; k++) {
    if (k % 2 !== 0) {
        continue;
    }
    
    console.log(k);

}

// --------------------------------------------------------------- //

//! Etiquetas (no es recomendable)
//* Es una "bandera" para decirles al Break/Continue en donde tiene que romper
//* o en donde tiene que seguir

inicio: 
// Si el numero es impar, que pase al siguiente caso/iteracion
for (let k = 0; k <= 10; k++) {
    if (k % 2 !== 0) {
        continue inicio;
    }
    
    console.log(k);

}
