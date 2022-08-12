
    //! LECCION 26 - MANEJO DE EVENTOS

    
    /* 
        !EVENTOS:
        ONCLICK: Cuando clickeas sobre el elemento
        ONLOAD: Cuando termina de cargar la pagina
        ONCHANGE: Cuando detecta un cambio en el elemento
        ONMOUSEOVER: Cuando pasas el cursor encima del elemento o de sus hijos
        ONMOUSEOUT: Cuando quitas el cursor que esta encima del elemento o de sus hijos
    */

    //* Recibo por parametros el elemento HTML, en este caso un H2
    function cambiarTexto(element) {
        element.innerHTML = "Este es mi elemento cambiado";
    }

    //! ONCLICK
    //* Si haces click sobre el elemento sucede algo...
    //* Vamos a cambiar el contenido del elemento H2 con ID "cambiazo"

    //Funcion para cambiar el elemento con ID "second"
    function cambiar() {
        document.getElementById("first").innerHTML = "Cambiamos de contenido";
    }

    document.getElementById("first").onclick = cambiar;


    //! ASOCIAR EVENTO A UN ELEMENTO
    //* SE PUEDE MODIFICAR OTRO ELEMENTO 

    //Funcion cambiar pero levemente modificado
    function cambiarOtroElemento() {
        //Se cambia el ID del elemento
        document.getElementById("first").innerHTML = "Contenido cambiado por otro elemento";
    }

    document.getElementById("second").onclick = cambiarOtroElemento;

    //! ONLOAD
    //* Cuando la pagina termine de recargar pasa algo...
    //! Normalmente se coloca en el BODY, aunque en versiones mas recientes de JS se puede aplicar en otros eventos como las imagenes

    //Mostrar una alerta cuando la pagina termine de cargar
    function cargando (){
        //! COOKIE: La cookie es un archivo donde se guardan los datos del usuario, por ejemplo cuando inicias sesion y tu user aparece en el bloque de texto
        //Saber si las cookies estan habilitadas
        if (navigator.cookieEnabled) {
        alert('Este evento se ejecuta cuando la pagina termine de cargar y tiene habilitada las cookies');
        } else {
        alert('Este evento se ejecuta cuando la pagina termine de cargar y no tiene habilitada las cookies');
        }
    }

    //! Otra formas de escribir lo anterior
    /*
        const cuerpoDelDocumento = document.body
        //!                    SIN PARENTESIS
        cuerpoDelDocumento.onload = cargando;
    
        //!              SIN PARENTESIS
        document.body.onload = cargando;
    */

        //! ONCHANGE
        //* Detecta un cambio despues de salir del elemento, es decir
        //* Se puede utilizar para detectar cambios en un inputText o en elementos de algun formulario...
        //! Ya sea dando click en otro elemento o TAB o ENTER

        // Convertir todos los caracteres a MAYUSCULAS
        function cambiar(elem) {
            elem.value = elem.value.toUpperCase();
        }


        //!ONMOUSEOVER
        //* Cuando pasas el mouse por encima del elemento sucede algo...

        function cambiaRojo(elem) {
            elem.style.color = 'red';
        }

        //!ONMOUSEOUT
        //* Cuando quitas el mouse que esta sobre el elemento

        function cambiaAzul(elem) {
            elem.style.color = 'blue';
        }




