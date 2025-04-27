// vite.config.js
export default {
  // Configuración base para el proyecto (nombre correcto del repositorio)
  base: '/ConstructionZone/',
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true
  },
  
  // Opciones de compilación
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
} 