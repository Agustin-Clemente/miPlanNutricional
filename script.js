document.addEventListener('DOMContentLoaded', function() {
    const btnRegistrar = document.getElementById('btn-registrar');
    const fechaComidaInput = document.getElementById('fecha-comida');
    const horaComidaInput = document.getElementById('hora-comida');
    const comidaInput = document.getElementById('comida');
    const comidasRegistradasDiv = document.getElementById('comidas-registradas');

   
    

    let comidasRegistradas = JSON.parse(localStorage.getItem('comidasRegistradas')) || [];
    renderComidas();

    btnRegistrar.addEventListener('click', function() {
        const fecha = fechaComidaInput.value;
        const hora = horaComidaInput.value;
        const comida = comidaInput.value;

        if (fecha && hora && comida) {
            const nuevaComida = { fecha, hora, comida };
            comidasRegistradas.push(nuevaComida);
            localStorage.setItem('comidasRegistradas', JSON.stringify(comidasRegistradas));
            renderComidas();

            fechaComidaInput.value = '';
            horaComidaInput.value = '';
            comidaInput.value = '';
        } else {
            alert('Por favor, ingresa la fecha, la hora y la descripción de la comida.');
        }
    });

    /* function renderComidas() {
        comidasRegistradasDiv.innerHTML = '';

        if (comidasRegistradas.length > 0) {
            const ul = document.createElement('ul');

            comidasRegistradas.forEach(comida => {
                const li = document.createElement('li');
                li.textContent = `${comida.fecha} ${comida.hora}: ${comida.comida}`;
                ul.appendChild(li);
            });

            comidasRegistradasDiv.appendChild(ul);
        } else {
            comidasRegistradasDiv.textContent = 'Aún no has registrado ninguna comida.';
        }
    } */
});