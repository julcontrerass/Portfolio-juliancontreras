// Sistema de traducciones para el portfolio
const translations = {
  es: {
    // Navbar
    'nav.inicio': 'Inicio',
    'nav.sobre-mi': 'Sobre Mí',
    'nav.conocimientos': 'Conocimientos',
    'nav.educacion': 'Educación',
    'nav.experiencia': 'Experiencia',
    'nav.proyectos': 'Proyectos',
    'nav.redes': 'Redes',
    'nav.contacto': 'Contacto',

    // Hero
    'hero.title': 'Julian Contreras',
    'hero.subtitle': 'Desarrollador Full Stack',
    'hero.cta': 'Conoce más sobre mí',

    // Sobre Mí
    'about.title': 'Sobre Mí',
    'about.text1': 'Soy un desarrollador frontend con experiencia en Vue.js (Vue 2), enfocado en crear interfaces modernas, intuitivas y eficientes. Actualmente me encuentro ampliando mi perfil hacia el desarrollo backend, aprendiendo Java con Spring Boot y el manejo de bases de datos relacionales y no relacionales, con el objetivo de convertirme en un desarrollador full stack.',
    'about.text2': 'Me apasiona aprender nuevas tecnologías, optimizar procesos y participar en proyectos que representen un desafío. Busco seguir creciendo profesionalmente, combinando mis habilidades en frontend con un sólido conocimiento en backend para construir aplicaciones completas, escalables y de alto rendimiento.',
    'about.viewCV': 'Ver CV',

    // Conocimientos
    'skills.title': 'Conocimientos',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',

    // Educación
    'education.title': 'Educación',
    'education.Talento.title': 'Back-End / Java',
    'education.Talento.institution': 'Talento Tech',
    'education.Talento.period': '2025 - Actualidad',
    'education.Talento.description': 'Formación en Backend con Java, Spring Boot, bases de datos',
    'education.Talento.specialization': 'Especialización en Backend',
    'education.utn.period': '2024 - Actualidad',
    'education.utn.title': 'Tecnicatura universitaria en programación',
    'education.utn.institution': 'Universidad Tecnológica Nacional',
    'education.utn.description': 'Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.',
    'education.utn.specialization': 'Especialización en Backend',
    'education.analytics.period': '2024',
    'education.analytics.title': 'Data Analytics',
    'education.analytics.institution': 'CoderHouse',
    'education.analytics.description': 'Certificación Data Analytics',
    'education.python.period': '2024',
    'education.python.title': 'Python',
    'education.python.institution': 'Plataforma5',
    'education.python.description': 'Curso intensivo en Python.',
    'education.js.period': '2023',
    'education.js.title': 'JavaScript',
    'education.js.institution': 'CoderHouse',
    'education.js.description': 'Curso intensivo en JavaScript',
    'education.certificate': 'Ver Certificado',

    // Experiencia
    'experience.title': 'Experiencia Laboral',
    'experience.social.period': '2025 - Presente',
    'experience.social.title': 'Desarrollador Frontend',
    'experience.social.company': 'Social learning.',
    'experience.social.description': 'Desarrollo y mantenimiento de plataformas propias de la empresa, por ejemplo teclab, ipp, onmex.',
    'experience.social.task1': 'Desarrollo de soluciones y nuevas implementacion',
    'experience.social.task2': 'Liderazgo de equipo de 4 desarrolladores juniors que realizan las practicas',

    // Proyectos
    'projects.title': 'Proyectos',
    'projects.filter.all': 'Todos',
    'projects.filter.personal': 'Personales',
    'projects.filter.course': 'Cursos',
    'projects.filter.university': 'Facultad',
    'projects.filter.sold': 'Vendidos',
    'projects.category.personal': 'Personal',
    'projects.category.course': 'Curso',
    'projects.category.university': 'Facultad',
    'projects.category.sold': 'Vendido',
    'projects.gravity.title': 'Gravity Falls',
    'projects.gravity.desc1': 'Desarrollé un videojuego estilo RPG inspirado en Gravity Falls como proyecto final de Programación II (UTN), utilizando C++ y la librería SFML',
    'projects.gravity.desc2': 'El juego incluye:',
    'projects.gravity.desc3': 'Menú interactivo con créditos, nueva partida y carga de partida. Múltiples mapas, diálogos, recolección de ítems y combates con disparos.Sistema de guardado y carga mediante archivos .dat',
    'projects.cien.title': 'Cien o Escalera',
    'projects.cien.desc1': 'Desarrollé Cien o Escalera, un juego de dados creado en C/C++ con Code::Blocks como parte de un trabajo grupal en la UTN.',
    'projects.cien.desc2': 'Características principales:',
    'projects.cien.desc3': 'Modalidad de juego individual o en pareja. Menú principal con opciones de nueva partida, puntuación más alta y salida. Interfaz basada en menús interactivos. Este proyecto destaca mis habilidades de programación en C++ y colaboración en equipo.',
    'projects.gestor.title': 'Gestor De Productos',
    'projects.gestor.desc1': 'Desarrollé un proyecto final en JavaScript para el curso de CoderHouse, destacado dentro del top 10 de la cursada.',
    'projects.gestor.desc2': 'El sistema permite agregar, editar y eliminar productos para su posterior publicación en una tienda. El diseño fue implementado con HTML y CSS, mientras que la lógica y funcionalidades se desarrollaron en JavaScript.',
    'projects.tateti.title': 'Ta-Te-Ti',
    'projects.tateti.desc1': 'Desarrollé Ta-Te-Ti, un juego clásico implementado con React.js y CSS.',
    'projects.tateti.desc2': 'Permite a dos jugadores competir y lleva un registro de puntuaciones, destacando por su simplicidad y una implementación efectiva con tecnologías modernas.',
    'projects.nike.title': 'Nike E-commerce',
    'projects.nike.desc1': 'Desarrollé AirLand, una aplicación de ecommerce de zapatillas inspirada en tiendas como Nike',
    'projects.nike.desc2': 'La app permite explorar, seleccionar y comprar productos, ofreciendo una experiencia de compra fluida. Este proyecto resalta mis habilidades en trabajo en equipo y en la construcción de plataformas ecommerce con tecnologías modernas.',
    'projects.nike.desc3': 'Frontend: JavaScript y React',
    'projects.countries.title': 'Countries',
    'projects.countries.desc1': 'Desarrollé una aplicación web de gestión y visualización de países',
    'projects.countries.desc2': 'La app permite buscar y consultar información detallada de distintos países, brindando una experiencia fluida y amigable. Este proyecto demuestra mi capacidad para trabajar con tecnologías modernas y crear soluciones efectivas de visualización de datos en la web.',
    'projects.countries.desc3': 'Frontend: JavaScript, React y CSS',
    'projects.gestion.title': 'Gestión de Artículos',
    'projects.gestion.desc1': 'Aplicación de escritorio para la gestión de artículos de un catálogo comercial genérico. Desarrollada en C# con Windows Forms y SQL Server.',
    'projects.gestion.desc2': 'Funcionalidades:',
    'projects.gestion.desc3': '• Listado y búsqueda de artículos por múltiples criterios\n• CRUD completo (Agregar, modificar, eliminar artículos)\n• Gestión de marcas y categorías\n• Soporte para múltiples imágenes por artículo\n• Persistencia en base de datos SQL Server\n• Arquitectura en capas (Modelo, Negocio, Presentación, Acceso a Datos)',
    'projects.promoweb.title': 'Promo WEB',
    'projects.promoweb.desc1': 'Aplicación web para gestión de promociones y sorteos. Los clientes ingresan códigos de vouchers obtenidos en compras para participar por premios.',
    'projects.promoweb.desc2': 'Características principales:',
    'projects.promoweb.desc3': '• Validación de códigos promocionales contra base de datos\n• Sistema de selección de premios\n• Registro de clientes con validación de DNI\n• Pre-carga de datos para clientes existentes\n• Notificación por email de participación exitosa\n• Arquitectura en capas (Modelo, Negocio, Presentación, Acceso a Datos)\n• Validación completa de datos (emails, números, campos requeridos)',
    'projects.grito.title': 'Grito De Carnaval 2025',
    'projects.grito.desc1': 'Landing page desarrollada para un cliente que organizaba el evento "Grito De Carnaval 2025". Proyecto freelance completamente vendido y entregado.',
    'projects.grito.desc2': 'Características del proyecto:',
    'projects.grito.desc3': '• Diseño moderno y atractivo adaptado a la temática del carnaval\n• Información completa del evento (fecha, lugar, lineup de artistas)\n• Sección de precios con diferentes categorías de entradas\n• Galería de fotos de ediciones anteriores\n• Formulario de contacto y compra de tickets\n• Diseño responsive para móviles y tablets\n• Optimización de rendimiento y SEO',
    'projects.demo': 'Ver Demo',
    'projects.code': 'Código',
    'projects.viewMore': 'Ver más',

    // Redes Sociales
    'social.title': 'Redes Sociales',

    // Contacto
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success.title': '¡Éxito!',
    'contact.success.message': 'Mensaje enviado correctamente. Te contactaré pronto.',
    'contact.error.title': 'Error',
    'contact.error.fields': 'Por favor, completa todos los campos.',
    'contact.error.email': 'Por favor, ingresa un email válido.',
    'contact.error.send': 'Hubo un problema al enviar el mensaje.',

    // Footer
    'footer.copyright': '© 2025 Julian Contreras. Todos los derechos reservados.',

    // Loading
    'loading.text': 'Cargando Portfolio...'
  },

  en: {
    // Navbar
    'nav.inicio': 'Home',
    'nav.sobre-mi': 'About Me',
    'nav.conocimientos': 'Skills',
    'nav.educacion': 'Education',
    'nav.experiencia': 'Experience',
    'nav.proyectos': 'Projects',
    'nav.redes': 'Social',
    'nav.contacto': 'Contact',

    // Hero
    'hero.title': 'Julian Contreras',
    'hero.subtitle': 'Full Stack Developer',
    'hero.cta': 'Learn more about me',

    // About
    'about.title': 'About Me',
    'about.text1': 'I am a frontend developer with experience in Vue.js (Vue 2), focused on creating modern, intuitive and efficient interfaces. Currently I am expanding my profile towards backend development, learning Java with Spring Boot and handling relational and non-relational databases, with the goal of becoming a full stack developer.',
    'about.text2': 'I am passionate about learning new technologies, optimizing processes and participating in projects that represent a challenge. I seek to continue growing professionally, combining my frontend skills with solid backend knowledge to build complete, scalable and high-performance applications.',
    'about.viewCV': 'View Resume',

    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',

    // Education
    'education.title': 'Education',
    'education.Talento.title': 'Back-End / Java',
    'education.Talento.institution': 'Talento Tech',
    'education.Talento.period': '2025 - Present',
    'education.Talento.description': 'Training in Backend with Java, Spring Boot, databases',
    'education.Talento.specialization': 'Backend Specialization',
    'education.utn.period': '2024 - Present',
    'education.utn.title': 'University Technical Degree in Programming',
    'education.utn.institution': 'National Technological University',
    'education.utn.description': 'Comprehensive training in software development, systems architecture and agile methodologies.',
    'education.utn.specialization': 'Backend Specialization',
    'education.analytics.period': '2024',
    'education.analytics.title': 'Data Analytics',
    'education.analytics.institution': 'CoderHouse',
    'education.analytics.description': 'Data Analytics Certification',
    'education.python.period': '2024',
    'education.python.title': 'Python',
    'education.python.institution': 'Plataforma5',
    'education.python.description': 'Intensive Python course.',
    'education.js.period': '2023',
    'education.js.title': 'JavaScript',
    'education.js.institution': 'CoderHouse',
    'education.js.description': 'Intensive JavaScript course',
    'education.certificate': 'View Certificate',

    // Experience
    'experience.title': 'Work Experience',
    'experience.social.period': '2025 - Present',
    'experience.social.title': 'Frontend Developer',
    'experience.social.company': 'Social learning.',
    'experience.social.description': 'Development and maintenance of the company\'s own platforms, for example teclab, ipp, onmex.',
    'experience.social.task1': 'Development of solutions and new implementations',
    'experience.social.task2': 'Team leadership of 4 junior developers doing their internships',

    // Projects
    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.filter.personal': 'Personal',
    'projects.filter.course': 'Courses',
    'projects.filter.university': 'University',
    'projects.filter.sold': 'Sold',
    'projects.category.personal': 'Personal',
    'projects.category.course': 'Course',
    'projects.category.university': 'University',
    'projects.category.sold': 'Sold',
    'projects.gravity.title': 'Gravity Falls',
    'projects.gravity.desc1': 'I developed an RPG-style video game inspired by Gravity Falls as a final project for Programming II (UTN), using C++ and the SFML library',
    'projects.gravity.desc2': 'The game includes:',
    'projects.gravity.desc3': 'Interactive menu with credits, new game and load game. Multiple maps, dialogues, item collection and shooting combat. Save and load system using .dat files',
    'projects.cien.title': 'Hundred or Ladder',
    'projects.cien.desc1': 'I developed Hundred or Ladder, a dice game created in C/C++ with Code::Blocks as part of a group project at UTN.',
    'projects.cien.desc2': 'Main features:',
    'projects.cien.desc3': 'Single or pair game mode. Main menu with options for new game, highest score and exit. Interface based on interactive menus. This project highlights my programming skills in C++ and team collaboration.',
    'projects.gestor.title': 'Product Manager',
    'projects.gestor.desc1': 'I developed a final project in JavaScript for the CoderHouse course, featured in the top 10 of the class.',
    'projects.gestor.desc2': 'The system allows you to add, edit and delete products for later publication in a store. The design was implemented with HTML and CSS, while the logic and functionality were developed in JavaScript.',
    'projects.tateti.title': 'Tic-Tac-Toe',
    'projects.tateti.desc1': 'I developed Tic-Tac-Toe, a classic game implemented with React.js and CSS.',
    'projects.tateti.desc2': 'It allows two players to compete and keeps a score record, standing out for its simplicity and effective implementation with modern technologies.',
    'projects.nike.title': 'Nike E-commerce',
    'projects.nike.desc1': 'I developed AirLand, a sneakers ecommerce application inspired by stores like Nike',
    'projects.nike.desc2': 'The app allows you to explore, select and purchase products, offering a smooth shopping experience. This project highlights my skills in teamwork and building ecommerce platforms with modern technologies.',
    'projects.nike.desc3': 'Frontend: JavaScript and React',
    'projects.countries.title': 'Countries',
    'projects.countries.desc1': 'I developed a web application for managing and visualizing countries',
    'projects.countries.desc2': 'The app allows you to search and consult detailed information about different countries, providing a smooth and friendly experience. This project demonstrates my ability to work with modern technologies and create effective data visualization solutions on the web.',
    'projects.countries.desc3': 'Frontend: JavaScript, React and CSS',
    'projects.gestion.title': 'Article Management',
    'projects.gestion.desc1': 'Desktop application for managing articles in a generic commercial catalog. Developed in C# with Windows Forms and SQL Server.',
    'projects.gestion.desc2': 'Features:',
    'projects.gestion.desc3': '• Listing and searching articles by multiple criteria\n• Complete CRUD (Add, modify, delete articles)\n• Brand and category management\n• Support for multiple images per article\n• SQL Server database persistence\n• Layered architecture (Model, Business, Presentation, Data Access)',
    'projects.promoweb.title': 'Promo WEB',
    'projects.promoweb.desc1': 'Web application for managing promotions and raffles. Customers enter voucher codes obtained from purchases to participate for prizes.',
    'projects.promoweb.desc2': 'Main features:',
    'projects.promoweb.desc3': '• Validation of promotional codes against database\n• Prize selection system\n• Customer registration with ID validation\n• Pre-loading data for existing customers\n• Email notification of successful participation\n• Layered architecture (Model, Business, Presentation, Data Access)\n• Complete data validation (emails, numbers, required fields)',
    'projects.grito.title': 'Grito De Carnaval 2025',
    'projects.grito.desc1': 'Landing page developed for a client organizing the "Grito De Carnaval 2025" event. Freelance project fully sold and delivered.',
    'projects.grito.desc2': 'Project features:',
    'projects.grito.desc3': '• Modern and attractive design adapted to carnival theme\n• Complete event information (date, location, artist lineup)\n• Pricing section with different ticket categories\n• Photo gallery from previous editions\n• Contact form and ticket purchase\n• Responsive design for mobile and tablets\n• Performance optimization and SEO',
    'projects.demo': 'View Demo',
    'projects.code': 'Code',
    'projects.viewMore': 'View More',

    // Social
    'social.title': 'Social Media',

    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success.title': 'Success!',
    'contact.success.message': 'Message sent successfully. I will contact you soon.',
    'contact.error.title': 'Error',
    'contact.error.fields': 'Please fill in all fields.',
    'contact.error.email': 'Please enter a valid email.',
    'contact.error.send': 'There was a problem sending the message.',

    // Footer
    'footer.copyright': '© 2025 Julian Contreras. All rights reserved.',

    // Loading
    'loading.text': 'Loading Portfolio...'
  }
};

// Estado actual del idioma
let currentLanguage = localStorage.getItem('portfolio-language') || 'es';

// Función para cambiar el idioma
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('portfolio-language', lang);
  updateContent();
  updateLangButton();

  // Actualizar atributo lang del HTML
  document.documentElement.lang = lang;
}

// Función para actualizar el contenido
function updateContent() {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[currentLanguage][key];

    if (translation) {
      // Si es un input o textarea, actualizar el placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      }
      // Si es un label, actualizar textContent
      else if (element.tagName === 'LABEL') {
        element.textContent = translation;
      }
      // Para el resto de elementos
      else {
        element.textContent = translation;
      }
    }
  });

  // Actualizar el texto del botón de envío del formulario
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn && submitBtn.textContent === 'Enviando...' || submitBtn.textContent === 'Sending...') {
    submitBtn.textContent = translations[currentLanguage]['contact.sending'];
  } else if (submitBtn) {
    submitBtn.textContent = translations[currentLanguage]['contact.send'];
  }

  // Actualizar el efecto de escritura del hero si está visible
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero p');

  if (heroTitle && window.scrollY < 100) {
    heroTitle.textContent = translations[currentLanguage]['hero.title'];
    heroSubtitle.textContent = translations[currentLanguage]['hero.subtitle'];
  }
}

// Función para actualizar el botón de idioma
function updateLangButton() {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.innerHTML = currentLanguage === 'es'
      ? '<img src="https://img.icons8.com/color/24/usa.png" alt="English" title="Change to English" />'
      : '<img src="https://img.icons8.com/fluency/24/argentina-circular.png" alt="Español" title="Cambiar a Español" />';
  }
}

// Función para crear el botón de cambio de idioma
function createLanguageToggle() {
  const langBtn = document.createElement('button');
  langBtn.id = 'lang-toggle';
  langBtn.className = 'lang-toggle';
  langBtn.innerHTML = currentLanguage === 'es'
    ? '<img src="https://img.icons8.com/color/24/usa.png" alt="English" title="Change to English" />'
    : '<img src="https://img.icons8.com/fluency/24/argentina-circular.png" alt="Español" title="Cambiar a Español" />';

  langBtn.addEventListener('click', () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  });

  // Agregar el botón al navbar
  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    navContainer.appendChild(langBtn);
  }
}

// Función para actualizar las notificaciones toast con el idioma correcto
function updateToastMessages() {
  const originalShowToast = window.showToast;

  window.showToast = function(titleKey, messageKey, type = 'info') {
    const title = translations[currentLanguage][titleKey] || titleKey;
    const message = translations[currentLanguage][messageKey] || messageKey;
    originalShowToast(title, message, type);
  };
}

// Inicializar el sistema de traducción
function initTranslate() {
  // Crear botón de idioma
  createLanguageToggle();

  // Aplicar idioma guardado
  updateContent();

  // Actualizar atributo lang del HTML
  document.documentElement.lang = currentLanguage;

  console.log(`Sistema de traducción inicializado. Idioma: ${currentLanguage}`);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslate);
} else {
  initTranslate();
}

// Exportar funciones para uso global
window.changeLanguage = changeLanguage;
window.getCurrentLanguage = () => currentLanguage;
