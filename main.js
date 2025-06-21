<<<<<<< HEAD
// Importación de estilos
import './sass/style.scss';
=======
// Importar estilos si se desea
import './style.css'
>>>>>>> cbbb3b7 (feat: Actualización de diseño - Fondo de taller mecánico y mejoras visuales)

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
  
<<<<<<< HEAD
  if (isMobile) {
    // Ajustes específicos para móviles
    console.log('Vista móvil detectada');
  }
} 
=======
  // También intentar reproducir al interactuar con la página
  document.addEventListener('click', function() {
    video.play().catch(function(error) {
      console.error('Error al reproducir el video después de interacción:', error);
    });
  }, { once: true });

  // Efectos de parallax
  initParallax();
  
  // Animaciones de scroll
  initScrollAnimations();
  
  // Efectos de hover mejorados
  initHoverEffects();
  
  // Efectos adicionales
  initAdditionalEffects();
});

// Efectos de parallax
function initParallax() {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.header__logo');
  const title = document.querySelector('.header__title');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (header) {
      header.style.transform = `translateY(${rate}px)`;
    }
  });
  
  // Parallax con el mouse
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    if (logo) {
      logo.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    }
    
    if (title) {
      title.style.transform = `translate(${mouseX * 5}px, ${mouseY * 5}px)`;
    }
  });
}

// Animaciones de scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observar elementos para animaciones
  const animatedElements = document.querySelectorAll('.header__container, .footer');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
}

// Efectos de hover mejorados
function initHoverEffects() {
  const container = document.querySelector('.header__container');
  const textElements = document.querySelectorAll('.header__text p');
  
  if (container) {
    container.addEventListener('mouseenter', () => {
      // Efecto de brillo
      container.style.boxShadow = `
        0 30px 60px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        0 0 40px rgba(255, 255, 255, 0.3)
      `;
    });
    
    container.addEventListener('mouseleave', () => {
      container.style.boxShadow = `
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2)
      `;
    });
  }
  
  // Efectos de texto
  textElements.forEach((text, index) => {
    text.addEventListener('mouseenter', () => {
      text.style.transform = 'scale(1.05) translateY(-2px)';
      text.style.textShadow = `
        1px 1px 3px rgba(0, 0, 0, 0.5),
        0 0 30px rgba(255, 255, 255, 0.9)
      `;
    });
    
    text.addEventListener('mouseleave', () => {
      text.style.transform = 'scale(1) translateY(0)';
      text.style.textShadow = `
        1px 1px 3px rgba(0, 0, 0, 0.5),
        0 0 15px rgba(255, 255, 255, 0.6)
      `;
    });
  });
}

// Efectos adicionales
function initAdditionalEffects() {
  // Agregar efectos de vibración al hacer clic
  const container = document.querySelector('.header__container');
  if (container) {
    container.addEventListener('click', () => {
      container.classList.add('vibrate');
      setTimeout(() => {
        container.classList.remove('vibrate');
      }, 300);
    });
  }
  
  // Efectos de carga progresiva
  const elements = document.querySelectorAll('.header__container, .footer');
  elements.forEach((el, index) => {
    el.classList.add('progressive-load');
    setTimeout(() => {
      el.classList.add('loaded');
    }, index * 200);
  });
  
  // Efectos de hover con tooltips
  const logo = document.querySelector('.header__logo');
  if (logo) {
    logo.classList.add('tooltip-container');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = '¡Logo de ReparatuCarro!';
    logo.appendChild(tooltip);
  }
}

// Efecto de typing para el título
function initTypingEffect() {
  const title = document.querySelector('.header__title');
  if (!title) return;
  
  const text = title.textContent;
  title.textContent = '';
  title.style.borderRight = '2px solid white';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      title.style.borderRight = 'none';
    }
  };
  
  // Iniciar el efecto después de un delay
  setTimeout(typeWriter, 1000);
}

// Inicializar efecto de typing
setTimeout(initTypingEffect, 500); 
>>>>>>> cbbb3b7 (feat: Actualización de diseño - Fondo de taller mecánico y mejoras visuales)
