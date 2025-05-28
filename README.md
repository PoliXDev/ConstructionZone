# ReparatuCarro.com 🚗🔧

## Descripción del proyecto

ReparatuCarro.com será una plataforma web enfocada en conectar usuarios con talleres mecánicos y servicios automotrices en Venezuela de forma personalizada y rápida.

**Funciones principales:**
- Buscador inteligente (por ubicación, avería, servicios).
- Agente de IA conversacional, empático y en lenguaje natural.
- Sistema de suscripción para talleres, tiendas de repuestos y otros servicios automotrices.
- Secciones adicionales:
  - Noticias del mundo automotor
  - Ofertas locales de repuestos
  - Foro de usuarios (problemas, averías, soluciones)

---

## Modelo de negocio

Suscripción mensual para talleres, tiendas y servicios para estar en la plataforma.  
Futuro modelo de monetización a través de publicidad premium.

---

## Tecnologías propuestas

- **Frontend:** HTML5 + TailwindCSS + JavaScript
- **Backend:** Node.js (Express) o Django (por decidir)
- **Base de datos:** MongoDB Atlas o PostgreSQL
- **Agente de IA:** Integración con API de OpenAI / Botpress
- **Hosting:** Vercel (frontend) + Render o Railway (backend)
- **Dominio:** reparatucarro.net / reparatucarro.app / reparatucarro.online

---

## Estructura general del proyecto

1. Diseño UI/UX en Figma
2. Creación de identidad visual (logo, colores, tipografías)
3. Maquetación web responsiva (HTML + TailwindCSS)
4. Desarrollo backend (APIs de comunicación)
5. Integración del chatbot de IA
6. Implementación de sistema de registro de talleres y usuarios
7. Testing de experiencia de usuario y depuración
8. Despliegue de la primera versión pública (MVP)

---

## Instalación y desarrollo

### Requisitos previos
- Node.js >= 18.0.0
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd reparatucarro_com

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

---

## Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. **Conectar repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Importa este repositorio
   - Vercel detectará automáticamente la configuración de Vite

2. **Configuración automática:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Opción 2: Despliegue manual con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Hacer login en Vercel
vercel login

# Desplegar desde el directorio del proyecto
vercel

# Para despliegue en producción
vercel --prod
```

### Opción 3: Despliegue directo

```bash
# Construir el proyecto
npm run build

# Subir la carpeta dist/ a Vercel manualmente
```

---

## Configuración de dominio personalizado

Una vez desplegado en Vercel:

1. Ve a tu proyecto en el dashboard de Vercel
2. Navega a Settings > Domains
3. Agrega tu dominio personalizado (ej: reparatucarro.com)
4. Configura los DNS según las instrucciones de Vercel

---

## Variables de entorno (futuro)

Para el proyecto completo, crear archivo `.env.local`:

```env
# API Keys (ejemplo para futuro desarrollo)
VITE_OPENAI_API_KEY=tu_api_key_aqui
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
VITE_API_BASE_URL=https://api.reparatucarro.com
```

---

## Prioridades actuales

- ✅ Finalizar prototipo visual en Figma
- ✅ Página de mantenimiento desplegada
- 🚧 Registrar el dominio
- 🚧 Maquetar la primera versión en HTML + TailwindCSS
- 🚧 Definir e integrar el servicio de agente de IA

---

## Estado del proyecto

### Página de mantenimiento (ACTIVA)
- ✅ Diseño responsivo
- ✅ Video de fondo optimizado
- ✅ Branding consistente
- ✅ Configuración para Vercel
- ✅ Optimización de performance

### Aplicación principal (EN DESARROLLO)
- ✅ Arquitectura SASS 7-1
- ✅ Sistema de variables y mixins
- 🚧 Componentes principales
- 🚧 Páginas funcionales
- 🚧 Integración con backend

---

## Autor
Daniel Alejandro Ruiz Poli

---

## Licencia
MIT License
