//! LECCION 24 - CAMBIO DE CONTENIDO DE UN ELEMENTO

function cambioContenido() {
    document.getElementById('first').innerHTML = 'Nuevo parrafo';
    document.getElementById('second').innerHTML += ' | Nuevo parrafo pero concatenado';   
}
