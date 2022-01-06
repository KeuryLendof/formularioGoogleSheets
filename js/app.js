const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();


    fetch('https://sheet.best/api/sheets/35a3c224-117f-4a51-9131-d4d3474899e6', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Apellido": formulario.apellido.value,
            "Telefono": formulario.telefono.value,
            "Correo": formulario.correo.value,
            "Mensaje": formulario.mensaje.value
        })
    });

    registro.style.display = "none"
    exito.style.display = "flex"
})