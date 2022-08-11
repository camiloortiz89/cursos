
    //! LECCION 26 - MANEJO DE EVENTOS

    //* Recibo por parametros el elemento HTML, en este caso un H2
    function cambiarTexto(element) {
        console.log(element);
        console.log(element.innerHTML);
        element.innerHTML = "*se modifica x2*";
        console.log(element.innerHTML);
    }

    //* ONCLICK -> Si haces click sobre el elemento sucede algo...
    //* Vamos a cambiar el contenido del elemento H2 con ID "cambiazo"

    //Funcion sin parametros que modifique el elemento
    function cambiar() {
        document.getElementById("cambiazo").innerHTML = "Cambiamos de contenido";
    }

    document.getElementById("cambiazo").onclick = cambiar;

    //! SE PUEDE MODIFICAR OTRO ELEMENTO 

    //Funcion cambiar pero levemente modificado
    function cambiarOtroElemento() {
        //Se cambia el ID del elemento
        document.getElementById("mostrar").innerHTML = "Contenido cambiado por otro elemento";
    }

    document.getElementById("cambiazo").onclick = cambiarOtroElemento;