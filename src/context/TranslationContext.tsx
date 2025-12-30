import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.sobre-mi': 'Sobre Mí',
    'nav.conocimientos': 'Conocimientos',
    'nav.educacion': 'Educación',
    'nav.experiencia': 'Experiencia',
    'nav.proyectos': 'Proyectos',
    'nav.redes': 'Redes',
    'nav.contacto': 'Contacto',
    'hero.title': 'Julian Contreras',
    'hero.subtitle': 'Desarrollador Full Stack',
    'hero.cta': 'Conoce más sobre mí',
    'about.title': 'Sobre Mí',
    'about.text1': 'Soy un Desarrollador Full Stack con una sólida base en Frontend, desarrollada a través de mi experiencia en Vue.js (Vue 2), donde me especializo en crear interfaces modernas, intuitivas y eficientes.',
    'about.text2': 'Actualmente he completado mi transición hacia el desarrollo Backend, trabajando con Java y Spring Boot para construir lógica de negocio robusta, y PostgreSQL para gestión de datos. Esto me permite desarrollar aplicaciones completas de extremo a extremo.',
    'about.text3': 'Me apasiona el aprendizaje continuo de nuevas tecnologías, la optimización de procesos y enfrentar desafíos técnicos complejos. Mi objetivo es combinar mis habilidades en Frontend y Backend para construir aplicaciones escalables, robustas y de alto rendimiento.',
    'about.viewCV': 'Ver CV',
    'skills.title': 'Conocimientos',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',
    'education.title': 'Educación',
    'education.certificate': 'Ver Certificado',
    'education.utn.date': '2024 - Actualidad',
    'education.utn.title': 'Tecnicatura universitaria en programación',
    'education.utn.company': 'Universidad Tecnológica Nacional',
    'education.utn.description': 'Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.',
    'education.java.date': '2025 - Actualidad',
    'education.java.title': 'Back-End / Java',
    'education.java.company': 'Talento Tech',
    'education.java.description': 'Formación en Backend con Java, Spring Boot, bases de datos',
    'education.analytics.date': '2024',
    'education.analytics.title': 'Data Analytics',
    'education.analytics.company': 'CoderHouse',
    'education.analytics.description': 'Certificación Data Analytics',
    'education.python.date': '2024',
    'education.python.title': 'Python',
    'education.python.company': 'Plataforma5',
    'education.python.description': 'Curso intensivo en Python.',
    'education.js.date': '2023',
    'education.js.title': 'JavaScript',
    'education.js.company': 'CoderHouse',
    'education.js.description': 'Curso intensivo en JavaScript',
    'experience.title': 'Experiencia Laboral',
    'experience.tukicode.date': '2024 - Presente',
    'experience.tukicode.title': 'Full Stack Developer',
    'experience.tukicode.company': 'TukiCode | Software Studio',
    'experience.tukicode.description': 'Software Studio co-fundado junto a dos compañeros de la facultad, especializado en el desarrollo de proyectos personalizados para diversos clientes.',
    'experience.tukicode.task1': 'Desarrollo full stack de aplicaciones web personalizadas',
    'experience.tukicode.task2': 'Arquitectura y diseño de soluciones tecnológicas',
    'experience.tukicode.task3': 'Gestión de proyectos y comunicación directa con clientes',
    'experience.frontend.date': '2025',
    'experience.frontend.title': 'Desarrollador Frontend',
    'experience.frontend.company': 'Social learning.',
    'experience.frontend.description': 'Desarrollo y mantenimiento de plataformas propias de la empresa.',
    'experience.frontend.task1': 'Desarrollo de soluciones y nuevas implementaciones',
    'experience.frontend.task2': 'Liderazgo de equipo de 4 desarrolladores juniors',
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
    'projects.jouplab.title': 'Joup Lab & Studio',
    'projects.jouplab.desc1': 'Landing page desarrollada para un cliente dedicado a la educación, asesoría y potenciación de café para baristas. Proyecto freelance completamente vendido y entregado.',
    'projects.jouplab.desc2': 'Características del proyecto:',
    'projects.jouplab.desc3': '• Diseño elegante y profesional con estética moderna\n• Secciones informativas sobre servicios educativos y asesorías de café\n• Portafolio de trabajos y logros del estudio\n• Formulario de contacto para consultas\n• Diseño responsive optimizado para todos los dispositivos\n• Interfaz intuitiva y fácil navegación\n• Optimización de rendimiento y carga rápida',
    'projects.grito.title': 'Grito De Carnaval 2025',
    'projects.grito.desc1': 'Landing page desarrollada para un cliente que organizaba el evento "Grito De Carnaval 2025". Proyecto freelance completamente vendido y entregado.',
    'projects.grito.desc2': 'Características del proyecto:',
    'projects.grito.desc3': '• Diseño moderno y atractivo adaptado a la temática del carnaval\n• Información completa del evento (fecha, lugar, lineup de artistas)\n• Sección de precios con diferentes categorías de entradas\n• Galería de fotos de ediciones anteriores\n• Formulario de contacto y compra de tickets\n• Diseño responsive para móviles y tablets\n• Optimización de rendimiento y SEO',
    'projects.promoweb.title': 'Promo WEB',
    'projects.promoweb.desc1': 'Aplicación web para gestión de promociones y sorteos. Los clientes ingresan códigos de vouchers obtenidos en compras para participar por premios.',
    'projects.promoweb.desc2': 'Características principales:',
    'projects.promoweb.desc3': '• Validación de códigos promocionales contra base de datos\n• Sistema de selección de premios\n• Registro de clientes con validación de DNI\n• Pre-carga de datos para clientes existentes\n• Notificación por email de participación exitosa\n• Arquitectura en capas (Modelo, Negocio, Presentación, Acceso a Datos)\n• Validación completa de datos (emails, números, campos requeridos)',
    'projects.gestion.title': 'Gestión de Artículos',
    'projects.gestion.desc1': 'Aplicación de escritorio para la gestión de artículos de un catálogo comercial genérico. Desarrollada en C# con Windows Forms y SQL Server.',
    'projects.gestion.desc2': 'Funcionalidades:',
    'projects.gestion.desc3': '• Listado y búsqueda de artículos por múltiples criterios\n• CRUD completo (Agregar, modificar, eliminar artículos)\n• Gestión de marcas y categorías\n• Soporte para múltiples imágenes por artículo\n• Persistencia en base de datos SQL Server\n• Arquitectura en capas (Modelo, Negocio, Presentación, Acceso a Datos)',
    'projects.gravity.title': 'Gravity Falls',
    'projects.gravity.desc1': 'Desarrollé un videojuego estilo RPG inspirado en Gravity Falls como proyecto final de Programación II (UTN), utilizando C++ y la librería SFML.',
    'projects.gravity.desc2': 'Características del juego:',
    'projects.gravity.desc3': '• Gráficos 2D con sprites y animaciones personalizadas\n• Sistema de movimiento de personajes y colisiones\n• Mecánicas de combate con enemigos\n• Sistema de niveles y progresión\n• Menú de inicio, pausa e interfaz de usuario\n• Música y efectos de sonido\n• Guardado y carga de partidas',
    'projects.cien.title': 'Cien o Escalera',
    'projects.cien.desc1': 'Desarrollé Cien o Escalera, un juego de dados creado en C/C++ con Code::Blocks como parte de un trabajo grupal en la UTN.',
    'projects.cien.desc2': 'Características del juego:',
    'projects.cien.desc3': '• Desarrollado en C/C++ usando CodeBlocks\n• Implementación de reglas completas del juego de dados\n• Interfaz de consola interactiva\n• Sistema de turnos y puntuación\n• Validación de jugadas y detección de ganador\n• Trabajo en equipo aplicando buenas prácticas de programación',
    'projects.gestor.title': 'Gestor De Productos',
    'projects.gestor.desc1': 'Desarrollé un proyecto final en JavaScript para el curso de CoderHouse, destacado dentro del top 10 de la cursada.',
    'projects.gestor.desc2': 'Características del proyecto:',
    'projects.gestor.desc3': '• Gestión completa de productos (agregar, editar, eliminar)\n• Carrito de compras con localStorage\n• Cálculo automático de totales y subtotales\n• Diseño responsive y moderno\n• Validación de formularios\n• Integración con APIs\n• Uso de ES6+ y buenas prácticas de JavaScript',
    'projects.tateti.title': 'Ta-Te-Ti',
    'projects.tateti.desc1': 'Desarrollé Ta-Te-Ti, un juego clásico implementado con React.js y CSS.',
    'projects.tateti.desc2': 'Características del juego:',
    'projects.tateti.desc3': '• Interfaz interactiva con React\n• Detección automática de ganador\n• Sistema de turnos X y O\n• Opción para reiniciar partida\n• Diseño responsive y atractivo\n• Animaciones y efectos visuales\n• Código limpio y componentizado',
    'projects.nike.title': 'Nike E-commerce',
    'projects.nike.desc1': 'Desarrollé AirLand, una aplicación de ecommerce de zapatillas inspirada en Nike. Este proyecto combina un frontend moderno con un backend robusto.',
    'projects.nike.desc2': 'Características principales:',
    'projects.nike.desc3': '• Catálogo de productos con filtros y búsqueda\n• Carrito de compras completo\n• Sistema de autenticación de usuarios\n• Panel de administración para gestión de productos\n• Integración con Firebase para backend\n• Diseño responsive y moderno\n• Pasarela de pago simulada',
    'projects.countries.title': 'Countries',
    'projects.countries.desc1': 'Aplicación web que consume la API REST Countries para mostrar información detallada de países del mundo.',
    'projects.countries.desc2': 'Funcionalidades:',
    'projects.countries.desc3': '• Listado completo de países con información detallada\n• Búsqueda y filtrado por región y nombre\n• Vista de detalles de cada país\n• Diseño responsive y moderno\n• Consumo de API REST\n• Backend con Node.js y Express\n• Base de datos para favoritos y notas',
    'projects.demo': 'Ver Demo',
    'projects.code': 'Código',
    'projects.viewMore': 'Ver más',
    'social.title': 'Redes Sociales',
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.sobre-mi': 'About Me',
    'nav.conocimientos': 'Skills',
    'nav.educacion': 'Education',
    'nav.experiencia': 'Experience',
    'nav.proyectos': 'Projects',
    'nav.redes': 'Social',
    'nav.contacto': 'Contact',
    'hero.title': 'Julian Contreras',
    'hero.subtitle': 'Full Stack Developer',
    'hero.cta': 'Learn more about me',
    'about.title': 'About Me',
    'about.text1': 'I am a Full Stack Developer with a solid Frontend foundation, honed through my experience with Vue.js (Vue 2), where I specialize in creating modern, intuitive, and efficient user interfaces.',
    'about.text2': 'I have successfully transitioned into Backend development and currently work with Java and Spring Boot to build robust business logic, utilizing PostgreSQL for data management. This skill set allows me to develop complete, end-to-end applications.',
    'about.text3': 'I am passionate about continuous learning, process optimization, and tackling complex technical challenges. My goal is to leverage my combined Frontend and Backend expertise to build scalable, robust, and high-performance applications.',
    'about.viewCV': 'View Resume',
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'education.title': 'Education',
    'education.certificate': 'View Certificate',
    'education.utn.date': '2024 - Present',
    'education.utn.title': 'University Degree in Programming',
    'education.utn.company': 'National Technological University',
    'education.utn.description': 'Comprehensive training in software development, systems architecture and agile methodologies.',
    'education.java.date': '2025 - Present',
    'education.java.title': 'Back-End / Java',
    'education.java.company': 'Talento Tech',
    'education.java.description': 'Backend training with Java, Spring Boot, databases',
    'education.analytics.date': '2024',
    'education.analytics.title': 'Data Analytics',
    'education.analytics.company': 'CoderHouse',
    'education.analytics.description': 'Data Analytics Certification',
    'education.python.date': '2024',
    'education.python.title': 'Python',
    'education.python.company': 'Plataforma5',
    'education.python.description': 'Intensive Python course.',
    'education.js.date': '2023',
    'education.js.title': 'JavaScript',
    'education.js.company': 'CoderHouse',
    'education.js.description': 'Intensive JavaScript course',
    'experience.title': 'Work Experience',
    'experience.tukicode.date': '2024 - Present',
    'experience.tukicode.title': 'Full Stack Developer',
    'experience.tukicode.company': 'TukiCode | Software Studio',
    'experience.tukicode.description': 'Software Studio co-founded with two college classmates, specialized in developing customized projects for various clients.',
    'experience.tukicode.task1': 'Full stack development of custom web applications',
    'experience.tukicode.task2': 'Architecture and design of technological solutions',
    'experience.tukicode.task3': 'Project management and direct client communication',
    'experience.frontend.date': '2025',
    'experience.frontend.title': 'Frontend Developer',
    'experience.frontend.company': 'Social learning.',
    'experience.frontend.description': 'Development and maintenance of company\'s own platforms.',
    'experience.frontend.task1': 'Development of solutions and new implementations',
    'experience.frontend.task2': 'Team leadership of 4 junior developers',
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
    'projects.jouplab.title': 'Joup Lab & Studio',
    'projects.jouplab.desc1': 'Landing page developed for a client dedicated to coffee education, consulting and empowerment for baristas. Freelance project fully sold and delivered.',
    'projects.jouplab.desc2': 'Project features:',
    'projects.jouplab.desc3': '• Elegant and professional design with modern aesthetics\n• Informative sections about coffee educational services and consulting\n• Portfolio of studio works and achievements\n• Contact form for inquiries\n• Responsive design optimized for all devices\n• Intuitive interface and easy navigation\n• Performance optimization and fast loading',
    'projects.grito.title': 'Grito De Carnaval 2025',
    'projects.grito.desc1': 'Landing page developed for a client organizing the "Grito De Carnaval 2025" event. Freelance project fully sold and delivered.',
    'projects.grito.desc2': 'Project features:',
    'projects.grito.desc3': '• Modern and attractive design adapted to carnival theme\n• Complete event information (date, location, artist lineup)\n• Pricing section with different ticket categories\n• Photo gallery from previous editions\n• Contact form and ticket purchase\n• Responsive design for mobile and tablets\n• Performance optimization and SEO',
    'projects.promoweb.title': 'Promo WEB',
    'projects.promoweb.desc1': 'Web application for managing promotions and giveaways. Customers enter voucher codes obtained from purchases to participate for prizes.',
    'projects.promoweb.desc2': 'Main features:',
    'projects.promoweb.desc3': '• Validation of promotional codes against database\n• Prize selection system\n• Customer registration with ID validation\n• Pre-load data for existing customers\n• Email notification of successful participation\n• Layered architecture (Model, Business, Presentation, Data Access)\n• Complete data validation (emails, numbers, required fields)',
    'projects.gestion.title': 'Article Management',
    'projects.gestion.desc1': 'Desktop application for managing articles in a generic commercial catalog. Developed in C# with Windows Forms and SQL Server.',
    'projects.gestion.desc2': 'Features:',
    'projects.gestion.desc3': '• Listing and search of articles by multiple criteria\n• Complete CRUD (Add, modify, delete articles)\n• Brand and category management\n• Support for multiple images per article\n• Persistence in SQL Server database\n• Layered architecture (Model, Business, Presentation, Data Access)',
    'projects.gravity.title': 'Gravity Falls',
    'projects.gravity.desc1': 'I developed an RPG-style video game inspired by Gravity Falls as final project for Programming II (UTN), using C++ and SFML library.',
    'projects.gravity.desc2': 'Game features:',
    'projects.gravity.desc3': '• 2D graphics with custom sprites and animations\n• Character movement system and collisions\n• Combat mechanics with enemies\n• Level system and progression\n• Start menu, pause and user interface\n• Music and sound effects\n• Save and load games',
    'projects.cien.title': 'Hundred or Ladder',
    'projects.cien.desc1': 'I developed Hundred or Ladder, a dice game created in C/C++ with Code::Blocks as part of a group work at UTN.',
    'projects.cien.desc2': 'Game features:',
    'projects.cien.desc3': '• Developed in C/C++ using CodeBlocks\n• Implementation of complete dice game rules\n• Interactive console interface\n• Turn and scoring system\n• Play validation and winner detection\n• Teamwork applying good programming practices',
    'projects.gestor.title': 'Product Manager',
    'projects.gestor.desc1': 'I developed a final project in JavaScript for the CoderHouse course, highlighted within the top 10 of the course.',
    'projects.gestor.desc2': 'Project features:',
    'projects.gestor.desc3': '• Complete product management (add, edit, delete)\n• Shopping cart with localStorage\n• Automatic calculation of totals and subtotals\n• Responsive and modern design\n• Form validation\n• API integration\n• Use of ES6+ and good JavaScript practices',
    'projects.tateti.title': 'Tic-Tac-Toe',
    'projects.tateti.desc1': 'I developed Tic-Tac-Toe, a classic game implemented with React.js and CSS.',
    'projects.tateti.desc2': 'Game features:',
    'projects.tateti.desc3': '• Interactive interface with React\n• Automatic winner detection\n• X and O turn system\n• Option to restart game\n• Responsive and attractive design\n• Animations and visual effects\n• Clean and componentized code',
    'projects.nike.title': 'Nike E-commerce',
    'projects.nike.desc1': 'I developed AirLand, a shoe ecommerce application inspired by Nike. This project combines a modern frontend with a robust backend.',
    'projects.nike.desc2': 'Main features:',
    'projects.nike.desc3': '• Product catalog with filters and search\n• Complete shopping cart\n• User authentication system\n• Admin panel for product management\n• Firebase integration for backend\n• Responsive and modern design\n• Simulated payment gateway',
    'projects.countries.title': 'Countries',
    'projects.countries.desc1': 'Web application that consumes the REST Countries API to display detailed information about countries of the world.',
    'projects.countries.desc2': 'Features:',
    'projects.countries.desc3': '• Complete list of countries with detailed information\n• Search and filter by region and name\n• Detail view of each country\n• Responsive and modern design\n• REST API consumption\n• Backend with Node.js and Express\n• Database for favorites and notes',
    'projects.demo': 'View Demo',
    'projects.code': 'Code',
    'projects.viewMore': 'View More',
    'social.title': 'Social Media',
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  }
};

interface TranslationContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const detectSystemLanguage = () => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang.startsWith('en') ? 'en' : 'es';
  };

  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    return localStorage.getItem('portfolio-language') ||
           localStorage.getItem('cvLanguage') ||
           detectSystemLanguage();
  });

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
    localStorage.setItem('cvLanguage', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <TranslationContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
