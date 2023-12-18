// Importar estilos
import './style.css';

// Escribir código JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  if (container) {
    container.innerHTML = `<h1>JS Starter</h1>`;
  } else {
    console.error('El contenedor no fue encontrado');
  }
});
