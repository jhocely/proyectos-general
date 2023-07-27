let parrafo = document.getElementById('mensaje')
let seleccion = document.getElementById('music')
seleccion.addEventListener('change', function borrar() {
    parrafo.innerHTML = ''
})
let botonEnviar = document.getElementById('send')
botonEnviar.addEventListener('click', ejecutar)

function ejecutar() {
    let valorSeleccionado = seleccion.options[seleccion.selectedIndex].value;
    
    switch (valorSeleccionado) {
        case 'punk':
            parrafo.innerHTML = 'Te recomiendo los ramones';
            break;
        case 'hard rock':
            parrafo.innerHTML = 'Te recomiendo los guns & roses';
            break;
        case 'metal':
            parrafo.innerHTML = 'Te recomiendo los pantera';
            break;
        case 'rock & roll':
            parrafo.innerHTML = 'Te recomiendo los rolling stones';
            break;
        case 'pop':
            parrafo.innerHTML = 'Te recomiendo michael jackson';
            break;
    
        default:
            parrafo.innerHTML = 'No conozco este tipo de música';
            break;
    }

    
}
