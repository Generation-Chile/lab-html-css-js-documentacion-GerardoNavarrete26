
// seleccionamos el boton UNIRSE por medio de su ID
let form = document.getElementById('cta-form');
// Creamos una funcion al hacer click scroll suavemente hacia el formulario ID form
form.addEventListener('click', function() {
    //encuentra el id form
  let formElement = document.getElementById('form');
  // scroll hacia el fomulario suavemente
formElement.scrollIntoView({ behavior: 'smooth' });
});

  function presionarBoton() {
    // capturar los valores de los inputs
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
  
    
    // muestra una alerta si no estan todos los campos llenos
    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    // mostrar un mensaje de alerta
    alert('Gracias por enviar tu mensaje, revisa la consola por favor');

      // enviar los valores en un objeto a la consola
    console.log({nombre, email, mensaje});

    // limpiar  el formulario 
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  // botones 
  // Seleccionar todos los botones
const buttons = document.querySelectorAll('.cta-form');

// Agregar un evento de mouseover y mouseout
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // le coloca un sombreado al pasar el mouse por encima
        button.style.boxShadow = '5px 4px 10px rgba(0, 0, 0, 0.5)';
    });

    button.addEventListener('mouseout', () => {
        // quita el sombrado el retirar el mouse de encima
        button.style.boxShadow = 'none';
    });
});