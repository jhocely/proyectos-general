let mostrar = document.getElementById("seleccionable")


function agregando() {
    let texto = ''
    let lista = prompt("porfavor ingresa los registros")
    let arreglo = lista.split(',')
    console.log(arreglo);
    for (let index = 0; index < arreglo.length; index++) {
        texto += '<li>' + arreglo[index] + '</li>';
    }
    mostrar.innerHTML = texto
}
agregando()



