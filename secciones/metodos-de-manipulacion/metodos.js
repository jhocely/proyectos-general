// metodo .filter

let metodo = document.getElementById("boton1");
metodo.addEventListener("click", obtener);

function obtener() {
  let registros = document.getElementById("registros").value;
  let arreglo = registros.split(",");
  console.log(arreglo);
  let filtro = document.getElementById("boton2");
  filtro.addEventListener("click", filtar);

  function filtar() {
    let registro2 = document.getElementById("registro2").value;
    let resultado = arreglo.filter((x) => x == registro2);
    console.log(resultado);
    let lista = document.getElementById("filtrado");

    setTimeout(() => {
      texto = "";

      for (let index = 0; index < resultado.length; index++) {
        texto += "<li>" + resultado[index] + "</li>";
      }
      lista.innerHTML = texto;
    }, 800);

    setTimeout(() => {
      let convertir = resultado.length;
      let descripcion = document.getElementById("texto");
      descripcion.innerHTML =
        "el proceso de filtrado ha determinado que el valor de registro sometido al proceso de filtrado se encuentró un total de " +
        convertir +
        " veces";
    }, 1000);
  }
}

// ejemplo con un array sencillo

// function obtener() {
//     let datos = prompt('Porfavor digita los registros a validar separados por coma, a fin de poder representar correctamente el uso de este método se recomienda que al menos 2 de los registros se repitan');
//     let arreglo = datos.split(',');
//     console.log(arreglo);
// }

// obtener()
// const resultado = arreglo.filter(x => x == 'carro')

// console.log(resultado);

// ejemplo con un array de objetos
// const arreglo2 = [
//     {nombre: 'pedro', apellido: 'ruiz'},
//     {nombre: 'juan', apellido: 'ruiz'},
//     {nombre: 'maría', apellido: 'ruiz'},
//     {nombre: 'pablo', apellido: 'perez'},
//     {nombre: 'ana', apellido: 'gonzales'},
//     {nombre: 'luis', apellido: 'velez'}
// ]

// const resultado2 = arreglo2.filter(x => x.apellido == 'ruiz')
// console.log(resultado2);

// for (let index = 0; index < resultado2.length; index++) {
//     const element = resultado2[index];
//     console.log(element.nombre, element.apellido);
// }

// método .map

let boton3 = document.getElementById("boton3");
boton3.addEventListener("click", map);

function map() {
  let valoresMap = document.getElementById("registros3").value;
  let arregloMap = valoresMap.split(",");
  console.log(arregloMap);
  let boton4 = document.getElementById("boton4");
  boton4.addEventListener("click", ejecutar);
  function ejecutar() {
    let arregloMap2 = document.getElementById("registros4").value;
    console.log(arregloMap2);
    let boton5 = document.getElementById("boton5");
    boton5.addEventListener("click", ejecutar2);
    function ejecutar2(params) {
      let arregloMap3 = document.getElementById("registros5").value;
      console.log(arregloMap3);
      let ejecutaMap = arregloMap.map((x) => {
        if (x == arregloMap2) {
          return arregloMap3;
        } else {
          return x;
        }
      });
      console.log(ejecutaMap);

      let lista2 = document.getElementById("map");
      let texto2 = "";
      for (let index = 0; index < ejecutaMap.length; index++) {
        texto2 += "<li>" + ejecutaMap[index] + "</li>";
      }
      lista2.innerHTML = texto2;
    }
  }
}

// const arreglo = ['manzana', 'manzana', 'manzana', 'manzana']

// const resultado = arreglo.map(x => {
//     if (x == 'manzana') {
//         return 'naranja'
//     }
// })

// console.log(resultado);







// método .fill

// const arreglo = ['manzana', 'manzana', 'manzana', 'manzana']

// const resultado = arreglo.fill('naranja', 1)
// const resultado2 = arreglo.fill('sandía', 2)

// console.log(resultado2);



// método find

// const arreglo = ['manzana', 'manzana', 'manzana', 'manzana', 'pera', 'lulo', 'pera']
// const resultado = arreglo.find(x => x == 'pera')


// const arreglo = [
    //     {nombre: 'pedro', apellido: 'ruiz'},
    //     {nombre: 'maria', apellido: 'ruiz'},
    //     {nombre: 'juan', apellido: 'ruiz'},
    // ]
    
    // const resultado = arreglo.find(x => x.apellido == 'ruiz')
    
    // console.log(resultado);
    
    
    
    
    
    // método finIndex
    
    // const arreglo = ['manzana', 'manzana', 'manzana', 'manzana', 'pera', 'lulo', 'pera']
    // const resultado = arreglo.findIndex(x => x == 'pera')
    // console.log(resultado);




    // método some

    // const arreglo = ['manzana', 'manzana', 'manzana', 'manzana', 'pera', 'lulo', 'pera']
    // const resultado = arreglo.some(x => x == 'pera')
    // console.log(resultado);




    // método every

    // const arreglo = ['manzana', 'manzana', 'manzana', 'manzana', 'pera', 'lulo', 'pera']
    // const resultado = arreglo.every(x => x == 'pera')
    // console.log(resultado);



    // método pop

    // const arreglo = ['manzana', 'pera', 'lulo', 'limon']
    // const resultado = arreglo.pop()
    // console.log(resultado);
    // console.log(arreglo);




    // método shift

    // const arreglo = ['manzana', 'pera', 'lulo', 'limon']
    // const resultado = arreglo.shift()
    // console.log(resultado);
    // console.log(arreglo);



    // método push

    // const arreglo = ['manzana', 'pera', 'lulo', 'limon']
    // const resultado = arreglo.push('ciruela')
    // console.log(resultado);
    // console.log(arreglo);



    // método unshift
    // const arreglo = ['manzana', 'pera', 'lulo', 'limon']
    // arreglo.splice(1,1,'ciruela')
    // arreglo.splice(1,2,'ciruela')
    // console.log(arreglo);


    // método slice

    // const arreglo = ['manzana', 'pera', 'lulo', 'limon', 'fresa', 'melón']
    // const resultado = arreglo.slice(2,4)
    // console.log(resultado);




    // método concat

    // const arreglo1 = ['manzana', 'pera', 'lulo', 'limon', 'fresa', 'melón']
    // const arreglo2 = ['cebolla', 'lechuga', 'ajo', 'aguacate', 'espinaca', 'pimenton']
    // console.log(arreglo1.concat(arreglo2));






    // método sort
    const arreglo = ['cebolla', 'lechuga', 'ajo', 'aguacate', 'espinaca', 'pimenton']
    console.log(arreglo.sort());

    const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    console.log(number.sort((x,y)=>x-y));