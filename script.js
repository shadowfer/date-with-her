// Variables para almacenar la fecha, hora, comida y película seleccionadas
let fechaSeleccionada = null;
let horaSeleccionada = null;
let comidaSeleccionada = null;
let peliculaSeleccionada = null;
let comidaImgSeleccionada = null; // Almacenar la imagen de la comida
let peliculaImgSeleccionada = null; // Almacenar la imagen de la película

// Función para mostrar la siguiente escena
function mostrarSiguienteEscena(escena) {
  document.getElementById(`scene-${escena}`).style.display = 'block';
  document.getElementById(`scene-${escena - 1}`).style.display = 'none';
}

// Event listeners para los botones
document.getElementById('si-button').addEventListener('click', () => {
  mostrarSiguienteEscena(2);
  createHearts(e, e.target);
});

document.getElementById('click-me-button').addEventListener('click', () => {
  mostrarSiguienteEscena(3);
});

document.getElementById('siguiente-button').addEventListener('click', () => {
  fechaSeleccionada = document.getElementById('fecha-input').value;
  horaSeleccionada = document.getElementById('hora-input').value;
  mostrarSiguienteEscena(4);
});

document.getElementById('continuar-button').addEventListener('click', () => {
  mostrarSiguienteEscena(5);
});

document.getElementById('continuar-button-2').addEventListener('click', () => {
  mostrarSiguienteEscena(6);
});

document.getElementById('continuar-button-3').addEventListener('click', () => {
  // Mostrar la fecha, hora, comida y película seleccionadas en la última escena
  document.getElementById('fecha-output').textContent = fechaSeleccionada;
  document.getElementById('hora-output').textContent = horaSeleccionada;
  document.getElementById('comida-output').textContent = comidaSeleccionada;
  document.getElementById('pelicula-output').textContent = peliculaSeleccionada;

  // Mostrar la imagen de la comida y la película seleccionada
  document.getElementById('comida-img-output').src = comidaImgSeleccionada;
  document.getElementById('pelicula-img-output').src = peliculaImgSeleccionada;

  mostrarSiguienteEscena(7);
});

// Almacenar la comida seleccionada
document.querySelectorAll('.opcion-comida').forEach((opcion) => {
  opcion.addEventListener('click', (e) => {
    // Remover la clase 'seleccionada' de las otras opciones
    document.querySelectorAll('.opcion-comida').forEach((el) => el.classList.remove('seleccionada'));
    // Agregar la clase 'seleccionada' a la opción clickeada
    e.target.classList.add('seleccionada');
    comidaSeleccionada = e.target.getAttribute('data-name'); // Almacena el nombre
    comidaImgSeleccionada = e.target.src; // Almacena la imagen
  });
});

// Almacenar la película seleccionada
document.querySelectorAll('.opcion-pelicula').forEach((opcion) => {
  opcion.addEventListener('click', (e) => {
    // Remover la clase 'seleccionada' de las otras opciones
    document.querySelectorAll('.opcion-pelicula').forEach((el) => el.classList.remove('seleccionada'));
    // Agregar la clase 'seleccionada' a la opción clickeada
    e.target.classList.add('seleccionada');
    peliculaSeleccionada = e.target.getAttribute('data-name'); // Almacena el nombre
    peliculaImgSeleccionada = e.target.src; // Almacena la imagen
  });
});

// Aquí comenzamos el código de la barra de emoción
const emocionadaInput = document.getElementById('emocionada-input');

// Actualizar el fondo de la barra conforme se desliza
emocionadaInput.addEventListener('input', (e) => {
  const value = e.target.value;
  
  // Actualizar el fondo que se llena
  updateSliderBackground(value);

  // Si el valor llega al 100%, lanzar confeti y corazones
  if (value == 100) {
    launchConfettiAndHearts();
  }
});

// Función para actualizar el fondo de la barra de progreso
function updateSliderBackground(value) {
  const percentage = value + '%';
  emocionadaInput.style.background = `linear-gradient(90deg, #ff4d4d ${percentage}, #ffe6e6 ${percentage})`;
}

// Función para crear corazones flotando
function createHearts(event, target) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY - 50}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

// Función para lanzar confeti y corazones
function launchConfettiAndHearts() {
  for (let i = 0; i < 50; i++) {
    setTimeout(createConfetti, i * 100);
    setTimeout(createHearts, i * 100);
  }
}

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = `${Math.random() * window.innerWidth}px`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}
