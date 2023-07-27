let jugar = document.getElementById('ejecutar')
jugar.addEventListener('click', ejecutarJuego)
let numeroAlAazar = Math.floor(Math.random()*100) + 1
let numeroIngresado = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let mensaje2 = document.getElementById('msjfinal')
let intentos = 0


function ejecutarJuego() {
    intentos ++
    intento.textContent = 'intento número '+intentos
    let transfNumeroIngr = parseInt(numeroIngresado.value)

    if (transfNumeroIngr < 1 || transfNumeroIngr > 100 || isNaN(transfNumeroIngr)) {
        mensaje.textContent = 'Porfavor digita un número valido entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }

    if (transfNumeroIngr === numeroAlAazar) {
        mensaje.textContent = '¡Felicidades, has adivinado el número!'
        mensaje.style.color = 'green';
        intento.textContent = ''
        mensaje2.textContent = 'Tuviste un total de '+intentos+' intentos'
        numeroEntrada.disabled = true;
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    } else if (transfNumeroIngr < numeroAlAazar) {
        mensaje.textContent = '¡Mas alto! El número es mayor al que dijiste'
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '¡Mas bajo! El número es menor al que dijiste'
        mensaje.style.color = 'red';
    }
}