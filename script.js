let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado() {
    
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje.style.color= 'red';
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es MAYOR. Intenta de nuevo.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El número es MENOR. Intenta de nuevo.';
        mensaje.style.color = 'yellow';
    }
}