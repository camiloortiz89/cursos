    //! LECCION 23 - INTERACCION CON EL DOCUMENT
    function sobreescrituraDocument(){
        //* Document.write -> Escribe texto sobre el documento
        //! PERO...
        document.write(`
            Al ejecutar Document.Write despues de cargar el DOM
            sobreescribe TODO el document, es decir, reemplaza
            todos los elementos del archivo actual
            ¡NO ES BUENA PRACTICA!
        `)
    }