
    //! LECCION 26 - MANEJO DE EVENTOS

    //* Recibo por parametros el elemento HTML, en este caso un H2
    function cambiarTexto(element) {
        element.innerHTML = "Este es mi elemento cambiado";
    }

    //* ONCLICK -> Si haces click sobre el elemento sucede algo...
    //* Vamos a cambiar el contenido del elemento H2 con ID "cambiazo"

    //Funcion para cambiar el elemento con ID "second"
    function cambiar() {
        document.getElementById("first").innerHTML = "Cambiamos de contenido";
    }

    document.getElementById("first").onclick = cambiar;

    //! SE PUEDE MODIFICAR OTRO ELEMENTO 

    //Funcion cambiar pero levemente modificado
    function cambiarOtroElemento() {
        //Se cambia el ID del elemento
        document.getElementById("first").innerHTML = "Contenido cambiado por otro elemento";
    }

    document.getElementById("second").onclick = cambiarOtroElemento;