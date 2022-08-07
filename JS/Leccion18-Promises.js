//! CONCEPTO:
//! ES CODIGO QUE IENE VARIOS ESTADOS

// PROMESA
//* RESOLVED (THEN)
// Ó
//! REJECTED (CATCH)
// PROMESA

//Ejecuto la promesa
let miPromesa = new Promise((RESOLVED, REJECTED) =>{
    if (true) {
        //Si es verdadero, invoco la funcion RESOLVED porque es un CALLBACK (valorResolved)
        RESOLVED('Resolvio correctamente');
    } else {
        //Si es falso, invoco la funcion REJECTED porque es un CALLBACK (valorRejected)
        REJECTED('No pudo resolver correctamente');
    }
});

// valorResolved guarda el valor RESOLVED de la promesa y valorRejected el valor REJECTED
//! SOLO SE PUEDE OBTENER UNO U OTRO VALOR, PERO NO LOS DOS A LA VEZ PARA UNA MISMA PROMESA
miPromesa.then(valorResolved => console.log(valorResolved), valorRejected => console.log(valorRejected));