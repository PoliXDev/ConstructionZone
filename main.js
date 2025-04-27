// Importar estilos si se desea
// import './style.css'

// Código para inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
  console.log('Página de construcción cargada correctamente');
  
  const video = document.getElementById('bg-video');
  
  // Intentar reproducir el video cuando se carguen los metadatos
  video.addEventListener('loadedmetadata', function() {
    video.play().catch(function(error) {
      console.error('Error al reproducir el video:', error);
    });
  });
  
  // También intentar reproducir al interactuar con la página
  document.addEventListener('click', function() {
    video.play().catch(function(error) {
      console.error('Error al reproducir el video después de interacción:', error);
    });
  }, { once: true });
}); 