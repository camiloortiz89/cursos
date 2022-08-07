//! CONCEPTO:
//! ASYNC INDICA QUE UNA FUNCION RETORNA UNA PROMESA

async function funcAsync() {
    return 'Funcion con Await y Promesas';
}

//* Muestra el mensaje de la funcion
funcAsync().then(valor => console.log(valor));

//! ASYNC Y AWAIT
//* AWAIT Espera al resultado de una promesa
//! SOLO SE PUEDE TENER AWAIT'S DENTRO DE FUNCIONES 'ASYNC'

async function funcAsyncYAwait(){
    let miPromesa = new Promise(RESOLVED => {
        RESOLVED('Funcion Async con Await');
    });

    //Ejecuto la promesa y retorna la promesa
    console.log(await miPromesa);
}

funcAsyncYAwait();

//! ASYNC, AWAIT Y SETTIMEOUT

async function funcAwaitSetTime(){
    let miPromesa = new Promise(RESOLVED =>{
        //Se ejecuta 3 segundos despues
        setTimeout(() => RESOLVED('Funcion con Async, Await y SetTimeOut'), 3000);
    });

    //Mostramos el setTimeOut
    console.log(await miPromesa);
}

