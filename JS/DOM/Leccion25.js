
    //! LECCION 25 - CAMBIO DE ATRIBUTOS DE UN ELEMENTO

    //Cambio de Color    
    let clases = document.getElementsByClassName("cambio_color");

    for (const element of clases) {
        element.style.backgroundColor = "#f9f";
    }

    //* Cambio de HREF en el elemento A
    //Obtengo todos los elementos A deseados
    let link = document.querySelectorAll("a");

    //* Los modifico uno a uno
    for (const element of link) {
        element.href = "http://youtube.com";
    }
    
