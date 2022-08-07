//! Operadores de Incremento y Decremento
let a =3, b = 2;
let c = a + b;
console.log(c);

//? Incremento
//* Pre-incremento (El operador ++ antes de la variable)
// Primero incrementa en 1 a ${a} y despues lo asigna a ${c}
c = ++a;
console.log(c);
console.log(a);

//* Post-incremento (El operador ++ despues de la variable)
// Primero se le asigna el valor de ${b} a ${c} y luego a ${b} se le incrementa 1
c = b++;
console.log(c);
console.log(b);

//? Decremento
//* Pre-decremento (El operador -- antes de la variable)
// Primero descrementa en 1 a ${a} y despues lo asigna a ${c}
c = --a;
console.log(c);
console.log(a);

//* Post-decremento (El operador -- despues de la variable)
// Primero se le asigna el valor de ${b} a ${c} y luego a ${b} se le decrementa 1
c = b--;
console.log(c);
console.log(b);

// --------------------------------------------------------------- //

//! Operador de Asignacion
let y = 1;

y += 3; // Equivale a: y = y + 3 / Mas
console.log(y);
y -= 3; // Equivale a: y = y - 3 / Menos
console.log(y);
y *= 3; // Equivale a: y = y * 3 / Multiplicacion
console.log(y);
y /= 3; // Equivale a: y = y / 3 / Division
console.log(y);
y %= 3; // Equivale a: y = y % 3 / Resto
console.log(y);
y **= 3; // Equivale a: y = y ** 3 / Exponente
console.log(y);

// --------------------------------------------------------------- //

//! Operador de Comparacion
// Revisa el valor sin importar el tipo
//* Tienen el mismo valor
let x = 3;
y = "3";
let z = x == y;
console.log(z);

// Revisa el valor pero tambien el tipo
//* Tienen el mismo valor pero distinto tipo
z = x === y;
console.log(z);

// --------------------------------------------------------------- //

//! Operador Distinto A
// Revisa el valor sin importar el tipo
//* Tienen el mismo valor
z = x != y;
console.log(z);

// Revisa el valor pero tambien el tipo
//* No tiene los mismos tipos
z = x !== y;
console.log(z);

// --------------------------------------------------------------- //

//! Operadores Relacionales
x = 20;
y = 20;
z = x < y;
console.log(z);
z = x <=y;
console.log(z);
z = x > y;
console.log(z);
z = x >=y;
console.log(z);

// --------------------------------------------------------------- //

//! Operador Ternario
// Variable = (Condicion) ? ExpresionVerdadera : ExpresionFalsa
let resu = (3>2) ? "3 es menor a 2" : "3 es mayor a 2";
console.log(resu);

// Devuelve "Numero Par"
resu = (10 % 2 == 0) ? "Numero Par" : "Numero Impar";
resu

// --------------------------------------------------------------- //

//! Conversion de tipo String a tipo Entero

// Variable tipo String
let miNumero = "10";
console.log(miNumero);

// Convierto la variable String en tipo Numero
let edad = Number(miNumero);
console.log(edad);

// --------------------------------------------------------------- //

//! Funcion isNaN (is Not a Number)
//* Devuelve Booleano
edad = "20x";
// Devuelve Falso
console.log(isNaN(edad));

edad = 20;
//Devuelve Verdadero
console.log(isNaN(edad));