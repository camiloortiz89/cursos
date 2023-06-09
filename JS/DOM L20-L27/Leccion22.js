//! LECCION 22 - INTERCCION CON FORMS

function showData() {
    //* forms[ID] -> obtengo el form deseado por su ID
    let form = document.forms['entrada'];
    let text = '';

    //Recorro todos los elementos INPUTS dentro del form
    for (const iterator of form) {
        //Guardo sus valores
        text += iterator.value;

    }
    //Muestro sus valores
    console.log(text);
}

//*ACCEDER INDIVIDUALMENTE A CADA ELEMENTO
//form[NAME_INPUT] - form['nombre'] -> Guarda el input nombre del form
