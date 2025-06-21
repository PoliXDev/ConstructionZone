// Importación de estilos
import './sass/style.scss';

// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  console.log('ReparatuCarro.com - Aplicación iniciada');
  
  // Aquí se inicializarán los componentes principales de la aplicación
  initApp();
});

/**
 * Inicializa la aplicación principal
 */
function initApp() {
  // TODO: Inicializar componentes de la aplicación
  
  // Ejemplo: Detectar si es móvil para ajustes específicos
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Ajustes específicos para móviles
    console.log('Vista móvil detectada');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('bg-video');
  const loading = document.getElementById('videoLoading');
  
  // Ocultar loading cuando el video esté listo
  video.addEventListener('loadeddata', function() {
    loading.style.display = 'none';
  });
  
  // Intentar reproducir el video cuando se carguen los metadatos
  video.addEventListener('loadedmetadata', function() {
    video.play().catch(function(error) {
      console.error('Error al reproducir el video:', error);
      loading.textContent = 'Video no disponible';
    });
  });
  
  // También intentar reproducir al interactuar con la página
  document.addEventListener('click', function() {
    video.play().catch(function(error) {
      console.error('Error al reproducir el video después de interacción:', error);
    });
  }, { once: true });
  
  // Manejar errores del video
  video.addEventListener('error', function() {
    loading.textContent = 'Error cargando video';
    console.error('Error al cargar el video');
  });
});
