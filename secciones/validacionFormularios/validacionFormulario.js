document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()

    // validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Porfavor digíta tu nombre'
        errorNombre.classList.add('error-message')
    } else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    // validar correo electrónico
    let entradaEmail = document.getElementById('email')
    let errorEmail = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(entradaEmail.value)) {
        errorEmail.textContent = 'Porfavor digíta un correo electónico válido'
        errorEmail.classList.add('error-message')
    } else{
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')
    }

    // validar contraseña
    let contrasenaEntrada = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let contrasenaPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        errorContrasena.textContent = 'La contraseña debe tener entre 8 y 15 caracteres,números, mayúsculas, minúsculas y caracteres especiales'
        errorContrasena.classList.add('error-message')
    } else{
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    // si todos los campos son válidos enviar formulario
    if (!errorNombre.textContent && !errorEmail.textContent && !errorContrasena.textContent) {
        alert('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset();
    }
})