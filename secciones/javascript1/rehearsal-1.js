let boton = document.getElementById("button");
boton.addEventListener("click", askingName);

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");

function askingName() {
    let name = prompt("Please introduce your name");
    showingName(name)
}

function showingName(name) {
    h2.textContent = "hola!"
    h1.textContent = name;
    boton.textContent = "try again"
}
