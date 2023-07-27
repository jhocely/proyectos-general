let rehearsal = document.getElementById("tittle");

function obtenerNombre(saludar) {
    let nombre = prompt("introduce tu nombre");
    saludar(nombre)
}

function saludar(nombre) {
    rehearsal.textContent = ("Hola "+ nombre);
}


obtenerNombre(saludar)



// let rehearsal = document.getElementById("tittle");
// let saludar;
// function obtenerNombre(saludar) {
    //     let nombre = prompt("introduce tu nombre");
    //     saludar(nombre)
    // }
    
    // obtenerNombre(saludar = (nombre) =>  {
        //     rehearsal.textContent = ("Hola "+ nombre);
        // })





        // let nums = prompt("introduce los numeros que deseas duplicar separados por una coma");
        
        // let nums2 = nums.split(',')
        
        // console.log(nums2);
        
        // let duplicar = nums2.map( (number) =>{
        //     return number * 2
        // })
        
        // rehearsal.textContent = duplicar


// EJEMPLO
  function mostrarConsola(num) {
    console.log(num);
  }  

  function calcular(num1, num2, callback) {
    let suma = num1 + num2
    callback(suma)
  }

  calcular(1,3,mostrarConsola)