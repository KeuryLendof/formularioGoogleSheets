const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();


    fetch('https://sheet.best/api/sheets/35a3c224-117f-4a51-9131-d4d3474899e6', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": 'keury alberto',
            "Apellido": 'lendof diaz',
            "Telefono": '8497850712',
            "Correo": 'lendofkeury@gmail.com',
            "Mensaje": 'Me encanto tu trabajo soy de EEUU y me gustaria contactarte personalmente, saludos.'
        })
    });
})