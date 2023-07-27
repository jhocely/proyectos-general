try {
    // llamado al backend (a través de una API)
    console.log('llamando al backend');
    throw('Este cliente no esta apto para la compra')
    console.log('salió con éxito');
} catch (error) {
    // tomamos el error y hacemos algo que consideremos correcto
    console.log('algo falló', error);
} finally{
    // se ejecuta siempre por más que falle o no falle
    console.log('se ejecuta siempre');
}