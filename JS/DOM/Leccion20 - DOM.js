//! CONCEPTO:
//! DOM (DOCUMENT OBJECT MODEL) - ESTRUCTURA DE ABROL 

//! LECCION 20
    console.log('Primer interaccion con DOM');

//! LECCION 21

    //! IGNORAR SI DA ERROR - PROBLEMA DE QUOKKA
    
    //* getElementById -> Retorna el objeto con el ID correspondiente 
    //Guardo el texto del elemento
    let p = document.getElementById('first').innerHTML;
    console.log(p);

    //* getElementsByTagName -> Retorna un arreglo con los elementos que sean los elementos correspondiente
    p = document.getElementsByTagName('p');
    console.log(p.length);

    //* getElementsByClassName -> Retorna un arreglo con los elementos que tengan la clase correspondiente

    p = document.getElementsByClassName('par');

    //En ELEMENT se guarda los elementos del arreglo P pero no guarda el conjunto de objetos, guarda un objeto a la vez
    for (let element of p) {
        console.log(`Elementos: ${element.innerHTML}`);
    }
