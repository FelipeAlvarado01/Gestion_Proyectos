const slider = document.getElementById('slider');
const buttons = document.getElementById('buttons');

slider.addEventListener('scroll', function() {
  if (slider.scrollTop === 0) {
    slider.style.opacity = '0';
    setTimeout(() => {
      slider.style.display = 'none';
      buttons.style.display = 'block';
    }, 500); // Tiempo de espera antes de ocultar completamente el slider
  }
});

let isDragging = false;
let startPosition = 0;

slider.addEventListener('mousedown', function(e) {
  isDragging = true;
  startPosition = e.clientY;
});

slider.addEventListener('mouseup', function() {
  isDragging = false;
});

slider.addEventListener('mousemove', function(e) {
  if (isDragging) {
    const deltaY = e.clientY - startPosition;
    slider.scrollTop -= deltaY;
    startPosition = e.clientY;

    if (slider.scrollTop === 0) {
      slider.style.opacity = '0';
      setTimeout(() => {
        slider.style.display = 'none';
        buttons.style.display = 'block';
      }, 500);
    }
  }
});

// Lógica para los botones
const adminButton = document.getElementById('adminButton');
const colabButton = document.getElementById('colabButton');

adminButton.addEventListener('click', function() {
  // Acciones para el usuario administrador
  console.log('Acciones para usuario administrador');
});

colabButton.addEventListener('click', function() {
  // Acciones para el usuario colaborador
  console.log('Acciones para usuario colaborador');
});
