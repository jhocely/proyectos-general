let url = 'https://jsonplaceholder.typicode.com'

// get: pedir información
// let query = 'posts/1'
// fetch(`${url}/${query}`)
//       .then(response => response.json())
//       .then(json => console.log(json))



// post: enviar informacion
// let requestBody = {
//   title: 'Ricardo comenta sobre tu foto',
//   body: '¡Que buena foto',
//   userId: 1,
// }
// fetch(`${url}/posts`,{
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify(requestBody)
// })
//       .then(response => response.json())
//       .then(json => console.log(json))

// put: editar información

// let posteo = 5

// let requestBody2 = {
//     id : 3,
//     title: 'Ricardo comenta sobre tu foto',
//     body: '¡Que buena foto',
//     userId: 5,
//   }
//   fetch(`${url}/posts/${posteo}`,{
//       method: 'PUT',
//       headers: {
//           'Content-type': 'application/json; charset=UTF-8'
//       },
//       body: JSON.stringify(requestBody2)
//   })
//         .then(response => response.json())
//         .then(json => console.log(json))
  
// patch: editar información (solo se edita un atributo)
// let post = 10
// let modificacion = {
//     title : 'Este título ha sido modificado'
// }

// fetch(`${url}/posts/${post}`,{
//           method: 'PATCH',
//           headers: {
//               'Content-type': 'application/json; charset=UTF-8'
//           },
//           body: JSON.stringify(modificacion)
//       })
//             .then(response => response.json())
//             .then(json => console.log(json))



// delete: borrar un item
let elementoAEliminar = 7
fetch(`${url}/posts/${elementoAEliminar}`, {
  method: 'DELETE',
});