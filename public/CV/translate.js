// Traducciones del CV
const translations = {
    es: {
        // Secciones
        "section.education": "Educación",
        "section.experience": "Experiencia",
        "section.projects": "Proyectos",
        "section.skills": "Habilidades e Intereses",

        // Educación - UTN
        "edu.utn.title": "Tecnicatura Universitaria en Programación",
        "edu.utn.period": "2024 – Actualidad",

        // Educación - Talento Tech
        "edu.talento.title": "Back-End / Java - Formación en Backend con Java, Spring Boot, bases de datos",
        "edu.talento.period": "2025 – Actualidad",
        "edu.talento.spec": "Especialización en Backend",

        // Educación - CoderHouse
        "edu.coder.analytics": "Data Analytics",
        "edu.coder.analytics.period": "2024",
        "edu.coder.js": "Curso intensivo en JavaScript",
        "edu.coder.js.period": "2023",

        // Educación - Plataforma 5
        "edu.plataforma.title": "Curso intensivo en Python",
        "edu.plataforma.period": "2024",

        // Experiencia - TukiCode
        "exp.tukicode.title": "Full Stack Developer",
        "exp.tukicode.period": "2025 – Actualidad",
        "exp.tukicode.type": "Freelance",
        "exp.tukicode.description": "Software Studio co-fundado junto a dos compañeros más de la facultad, especializado en el desarrollo de proyectos personalizados para diversos clientes.",
        "exp.tukicode.task1": "Desarrollo full stack de aplicaciones web personalizadas.",
        "exp.tukicode.task2": "Arquitectura y diseño de soluciones tecnológicas adaptadas a necesidades específicas.",
        "exp.tukicode.task3": "Gestión de proyectos y comunicación directa con clientes para garantizar entregas de calidad.",

        // Experiencia - Social Learning
        "exp.social.title": "Desarrollador Frontend",
        "exp.social.period": "2025",
        "exp.social.task1": "Desarrollo y mantenimiento de plataformas (TecLab, IPP, Onmex) con nuevas implementaciones y mejoras en UX.",
        "exp.social.task2": "Liderazgo de equipo de 4 desarrolladores juniors en prácticas profesionales.",

        // Tipos de Proyectos
        "proj.type.freelance": "Proyecto Freelance",
        "proj.type.academic": "Proyecto Académico/Personal",
        "proj.type.team": "Proyecto en Equipo",

        // Proyectos - Tuki Tu Asistente De Salón
        "proj.tukitu.type": "Proyecto Académico - UTN",
        "proj.tukitu.desc1": "Sistema de gestión de mesas para restaurantes y cafeterías desarrollado en equipo de 3 personas. Gestiona todos los servicios necesarios incluyendo ventas de mesa y mostrador, gestión de stock, controles de caja y operaciones administrativas completas.",
        "proj.tukitu.tech": "Tecnologías: C#, ASP.NET, SQL Server | GitHub: github.com/julcontrerass/TukiTuAsistenteDeSalon.git",

        // Proyectos - Joup Lab & Studio
        "proj.jouplab.desc1": "Landing page profesional para estudio de educación y consultoría de café. Presenta diseño elegante, secciones de información de servicios, portafolio de trabajos, formulario de contacto y diseño responsive completo optimizado para todos los dispositivos.",
        "proj.jouplab.tech": "Tecnologías: HTML, CSS, JavaScript | Live Demo: https://joup-lab-studio.vercel.app/",

        // Proyectos - Grito De Carnaval
        "proj.grito.desc1": "Landing page para evento de carnaval con diseño moderno, diseño responsive, sistema de compra de tickets y galería de fotos. Optimizado para rendimiento y SEO.",
        "proj.grito.tech": "Tecnologías: HTML, CSS y JS | Live Demo: https://gritodecarnaval.vercel.app/",

        // Proyectos - Promo WEB
        "proj.promo.type": "Proyecto Académico - UTN",
        "proj.promo.desc1": "Aplicación web para gestión de promociones y sorteos con validación de códigos de vouchers, registro de clientes con validación de DNI y sistema de notificación por email. Arquitectura en capas con validación completa de datos.",
        "proj.promo.tech": "Tecnologías: C#, ASP.NET, SQL Server | GitHub: github.com/julcontrerass/TPWeb_Equipo8A",

        // Proyectos - Gestión de Artículos
        "proj.gestion.title": "Gestión de Artículos",
        "proj.gestion.type": "Proyecto Académico - UTN",
        "proj.gestion.desc1": "Aplicación de escritorio para gestión de catálogo comercial con funcionalidad CRUD completa, administración de marcas/categorías y soporte para múltiples imágenes por artículo. Persistencia en SQL Server con arquitectura en capas.",
        "proj.gestion.tech": "Tecnologías: C#, .NET, Windows Forms, SQL Server | GitHub: github.com/julcontrerass/TPWinForm_equipo-8A",

        // Proyectos - Gravity Falls
        "proj.gravity.title": "Juego RPG Gravity Falls",
        "proj.gravity.type": "Proyecto Académico - UTN",
        "proj.gravity.desc1": "Videojuego RPG completo con menús interactivos, múltiples mapas, sistemas de diálogo, mecánicas de combate y funcionalidad de guardado/carga usando gestión de archivos.",
        "proj.gravity.tech": "Tecnologías: C++, SFML | GitHub: github.com/julcontrerass/GravityFallsGame",

        // Proyectos - Streaming Platform
        "proj.streaming.title": "Backend de Plataforma de Streaming",
        "proj.streaming.type": "Proyecto Académico - Plataforma 5",
        "proj.streaming.desc1": "Infraestructura backend para plataforma de streaming de video con análisis de contenido, consultas de base de datos de actores y sistemas de filtrado usando Python y principios de POO.",
        "proj.streaming.tech": "Tecnologías: Python",

        // Proyectos - Cien o Escalera
        "proj.cien.type": "Proyecto Académico - UTN",
        "proj.cien.desc1": "Juego de dados en C/C++ con modalidad individual y en pareja, menú interactivo y seguimiento de puntuaciones altas. Proyecto en equipo demostrando habilidades de programación en C++ y colaboración.",
        "proj.cien.tech": "Tecnologías: C++ | GitHub: github.com/julcontrerass/CienOEscaleraUTN",

        // Proyectos - AirLand E-commerce
        "proj.airland.type": "Proyecto Personal en Equipo",
        "proj.airland.desc1": "Plataforma de ecommerce de zapatillas con experiencia de compra completa incluyendo exploración, selección y compra de productos. Demuestra habilidades de trabajo en equipo y desarrollo full-stack.",
        "proj.airland.tech": "Tecnologías: React, Node.js, Express, Firebase | GitHub: github.com/lauticometti/airland",

        // Habilidades
        "skills.frontend.label": "Frontend:",
        "skills.backend.label": "Backend:",
        "skills.database.label": "Base de Datos:",
        "skills.tools.label": "Herramientas:",
        "skills.languages.label": "Idiomas:",
        "skills.languages.text": "Español (Nativo), Inglés (B1 Intermedio), Portugués (Intermedio)",
        "skills.interests.label": "Intereses:",
        "skills.interests.text": "Desarrollo backend, optimización de sistemas, arquitectura escalable, aprendizaje continuo en tecnologías emergentes"
    },
    en: {
        // Sections
        "section.education": "Education",
        "section.experience": "Experience",
        "section.projects": "Projects",
        "section.skills": "Skills & Interests",

        // Education - UTN
        "edu.utn.title": "University Technical Degree in Programming",
        "edu.utn.period": "2024 – Present",

        // Education - Talento Tech
        "edu.talento.title": "Back-End / Java - Backend Training with Java, Spring Boot, databases",
        "edu.talento.period": "2025 – Present",
        "edu.talento.spec": "Backend Specialization",

        // Education - CoderHouse
        "edu.coder.analytics": "Data Analytics",
        "edu.coder.analytics.period": "2024",
        "edu.coder.js": "Intensive JavaScript Course",
        "edu.coder.js.period": "2023",

        // Education - Plataforma 5
        "edu.plataforma.title": "Intensive Python Course",
        "edu.plataforma.period": "2024",

        // Experience - TukiCode
        "exp.tukicode.title": "Full Stack Developer",
        "exp.tukicode.period": "2025 – Present",
        "exp.tukicode.type": "Freelance",
        "exp.tukicode.description": "Software Studio co-founded with two college classmates, specialized in developing customized projects for various clients.",
        "exp.tukicode.task1": "Full stack development of custom web applications.",
        "exp.tukicode.task2": "Architecture and design of technological solutions adapted to specific needs.",
        "exp.tukicode.task3": "Project management and direct client communication to ensure quality deliveries.",

        // Experience - Social Learning
        "exp.social.title": "Frontend Developer",
        "exp.social.period": "2025",
        "exp.social.task1": "Development and maintenance of platforms (TecLab, IPP, Onmex) with new implementations and UX improvements.",
        "exp.social.task2": "Leadership of team of 4 junior developers in professional internships.",

        // Project Types
        "proj.type.freelance": "Freelance Project",
        "proj.type.academic": "Academic/Personal Project",
        "proj.type.team": "Team Project",

        // Projects - Tuki Tu Asistente De Salón
        "proj.tukitu.type": "Academic Project - UTN",
        "proj.tukitu.desc1": "Table management system for restaurants and cafeterias developed in a team of 3. Manages all necessary services including table and counter sales, stock management, cash register controls, and comprehensive administrative operations.",
        "proj.tukitu.tech": "Technologies: C#, ASP.NET, SQL Server | GitHub: github.com/julcontrerass/TukiTuAsistenteDeSalon.git",

        // Projects - Joup Lab & Studio
        "proj.jouplab.desc1": "Professional landing page for coffee education and consulting studio. Features elegant design, service information sections, portfolio showcase, contact form, and full responsive layout optimized for all devices.",
        "proj.jouplab.tech": "Technologies: HTML, CSS, JavaScript | Live Demo: https://joup-lab-studio.vercel.app/",

        // Projects - Grito De Carnaval
        "proj.grito.desc1": "Landing page for carnival event with modern design, responsive layout, ticket purchasing system, and photo gallery. Optimized for performance and SEO.",
        "proj.grito.tech": "Technologies: HTML, CSS, JavaScript | Live Demo: https://gritodecarnaval.vercel.app/",

        // Projects - Promo WEB
        "proj.promo.type": "Academic Project - UTN",
        "proj.promo.desc1": "Web application for managing promotions and giveaways with voucher code validation, customer registration with DNI validation, and email notification system. Layered architecture with complete data validation.",
        "proj.promo.tech": "Technologies: C#, ASP.NET, SQL Server | GitHub: github.com/julcontrerass/TPWeb_Equipo8A",

        // Projects - Article Management
        "proj.gestion.title": "Article Management",
        "proj.gestion.type": "Academic Project - UTN",
        "proj.gestion.desc1": "Desktop application for commercial catalog management with complete CRUD functionality, brand/category management, and multiple image support per article. SQL Server persistence with layered architecture.",
        "proj.gestion.tech": "Technologies: C#, .NET, Windows Forms, SQL Server | GitHub: github.com/julcontrerass/TPWinForm_equipo-8A",

        // Projects - Gravity Falls
        "proj.gravity.title": "Gravity Falls RPG Game",
        "proj.gravity.type": "Academic Project - UTN",
        "proj.gravity.desc1": "Complete RPG video game with interactive menus, multiple maps, dialogue systems, combat mechanics, and save/load functionality using file management.",
        "proj.gravity.tech": "Technologies: C++, SFML | GitHub: github.com/julcontrerass/GravityFallsGame",

        // Projects - Streaming Platform
        "proj.streaming.title": "Streaming Platform Backend",
        "proj.streaming.type": "Academic Project - Plataforma 5",
        "proj.streaming.desc1": "Backend infrastructure for video streaming platform with content analytics, actor database queries, and filtering systems using Python and OOP principles.",
        "proj.streaming.tech": "Technologies: Python",

        // Projects - Cien o Escalera
        "proj.cien.type": "Academic Project - UTN",
        "proj.cien.desc1": "Dice game in C/C++ with single and paired player modes, interactive menu system, and high score tracking. Team project demonstrating C++ programming and collaboration skills.",
        "proj.cien.tech": "Technologies: C++ | GitHub: github.com/julcontrerass/CienOEscaleraUTN",

        // Projects - AirLand E-commerce
        "proj.airland.type": "Personal Team Project",
        "proj.airland.desc1": "Sneaker e-commerce platform with complete shopping experience including product browsing, selection, and purchase functionality. Showcases teamwork and full-stack development skills.",
        "proj.airland.tech": "Technologies: React, Node.js, Express, Firebase | GitHub: github.com/lauticometti/airland",

        // Skills
        "skills.frontend.label": "Frontend:",
        "skills.backend.label": "Backend:",
        "skills.database.label": "Database:",
        "skills.tools.label": "Tools:",
        "skills.languages.label": "Languages:",
        "skills.languages.text": "Spanish (Native), English (B1 Intermediate), Portuguese (Intermediate)",
        "skills.interests.label": "Interests:",
        "skills.interests.text": "Backend development, system optimization, scalable architecture, continuous learning in emerging technologies"
    }
};

// Detectar idioma del sistema del usuario
function detectSystemLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Si el idioma del navegador es inglés, usar 'en', de lo contrario 'es'
    return browserLang.startsWith('en') ? 'en' : 'es';
}

// Idioma por defecto: verifica en este orden
// 1. cvLanguage (preferencia guardada del CV)
// 2. portfolio-language (preferencia del portfolio)
// 3. Idioma del sistema
let currentLanguage = localStorage.getItem('cvLanguage') ||
                     localStorage.getItem('portfolio-language') ||
                     detectSystemLanguage();

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    // Guardar en ambos localStorage keys para sincronizar con el portfolio
    localStorage.setItem('cvLanguage', lang);
    localStorage.setItem('portfolio-language', lang);
    updateContent();
    updateLanguageButtons();
}

// Función para actualizar el contenido
function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = currentLanguage;
}

// Función para actualizar los botones de idioma
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Guardar el idioma inicial detectado para sincronización
    localStorage.setItem('cvLanguage', currentLanguage);
    localStorage.setItem('portfolio-language', currentLanguage);

    // Crear botones de idioma
    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'language-switcher';
    langSwitcher.innerHTML = `
        <button class="lang-btn ${currentLanguage === 'es' ? 'active' : ''}" data-lang="es">ES</button>
        <button class="lang-btn ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    `;
    document.body.insertBefore(langSwitcher, document.body.firstChild);

    // Event listeners para los botones
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Actualizar contenido inicial
    updateContent();
});
