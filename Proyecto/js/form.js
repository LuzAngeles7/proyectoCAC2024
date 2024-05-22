document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let fecha = document.getElementById('fecha').value;
        let email = document.getElementById('emAil').value;
        let telefono = document.getElementById('telefono').value;
        let consulta = document.getElementById('consulta').value;
        let novedades =document.getElementById("novedades").checked;

        
        if (nombre.trim() === '') {
            mensajeError.innerText = 'El campo nombre no puede estar vacío.';
            return;
        }

        if (apellido.trim() === '') {
            mensajeError.innerText = 'El campo apellido no puede estar vacío.';
            return;
        }

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }


        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (fecha === '') {
            mensajeError.innerText = 'Debes seleccionar una fecha de nacimiento.';
            return;
        }

        if (telefono.trim() === '') {
            mensajeError.innerText = 'El campo telfono no puede estar vacío.';
            return;
        }

        if (consulta.trim() === '') {
            mensajeError.innerText = 'El campo consulta no puede estar vacío.';
            return;
        }

        if (!novedades) {
            mensajeError.innerText = 'Debes indicar tu preferencia.';
            return;
        
        }
        
        alert('Formulario enviado con éxito!');
        formulario.submit(); 
 })
}) ;
    
function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

