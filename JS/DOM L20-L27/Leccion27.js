//! EVENTO ADDEVENTLISTENER
//* document.addEventListener(EVENTO, FUNCION);
//* EVENTO: el evento que recibira por parametro
//! EL EVENTO NO SE ESCRIBE CON "ON", EJEMPLO: NO SE ESCRIBE: ONCLICK, ONMOUSEUP, ONFOCUS, SE ESCRIBE: CLICK, MOUSEUP, FOCUS

document.addEventListener('mousedown', (evento) =>{
    //Obtengo el elemento en el que se aplico el evento
    console.log(evento.target);

    evento.target.style.background = "red";
});

document.addEventListener('mouseup', (evento) =>{
    //Obtengo el elemento en el que se aplico el evento
    console.log(evento.target);

    evento.target.style.background = "white";
});
