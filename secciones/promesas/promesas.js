let promesa = new Promise((resolve, reject) => {
    let resp = {
        resolve: 200,
        description: 'esta info es importante'
    }
    resolve(resp)
    reject('falló')
})


promesa.then(res => {
    console.log(res.description);
}) .catch(error => {
    console.error(error);
})


