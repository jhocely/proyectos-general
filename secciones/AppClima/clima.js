let api_key = 'eadc6811eeb4a5f34e659c5e06d8a1e8'
let url = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    let ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${url}?q=${ciudad},&appid=${api_key}&units=metric&lang=sp`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}


function mostrarDatosClima(data) {
    let divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    let ciudadNombre = data.name
    let temperatura = data.main.temp
    let descripcion = data.weather[0].description
    let icono = data.weather[0].icon

    let ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    let temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${temperatura} grados celcius`

    let iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    let descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La condición metereológica es ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}