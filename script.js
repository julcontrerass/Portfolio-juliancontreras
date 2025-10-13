// FUNCIONALIDAD DE LA BARRA DE NAVEGACIÓN
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

// Efecto de scroll en la barra de navegación
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Alternar menú móvil
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// DESPLAZAMIENTO SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Solo aplicar scroll suave si es un ancla válida (no es solo "#")
        if (href && href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ANIMACIONES DE DESPLAZAMIENTO
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animación de logos de habilidades
const skillLogoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLogos = entry.target.querySelectorAll('.skill-logo');
            skillLogos.forEach((logo, index) => {
                setTimeout(() => {
                    logo.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        logo.style.transform = 'scale(1)';
                    }, 200);
                }, index * 100);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    skillLogoObserver.observe(card);
});

// SISTEMA DE NOTIFICACIONES FLOTANTES (TOAST)
function showToast(title, message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');

    // Crear elemento toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    // Iconos según el tipo
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.info}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <span class="toast-close">×</span>
    `;

    // Agregar al contenedor
    toastContainer.appendChild(toast);

    // Evento para cerrar manualmente
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    });

    // Auto-remover después de 3 segundos
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}

// FORMULARIO DE CONTACTO CON EMAILJS
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Validación simple
    if (!name || !email || !subject || !message) {
        showToast('Error', 'Por favor, completa todos los campos.', 'error');
        return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Error', 'Por favor, ingresa un email válido.', 'error');
        return;
    }

    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Verificar si EmailJS está disponible
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS no está cargado');
        showToast('Error', 'Error de configuración. Por favor, contacta al administrador.', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
    }

    // Parámetros para EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_name: 'Julian Contreras',
        reply_to: email
    };

    // Enviar email usando EmailJS
    const SERVICE_ID = 'service_jjahjcf';  // Tu Service ID
    const TEMPLATE_ID = 'template_j1sxoa3'; // Tu Template ID

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showToast('¡Éxito!', 'Mensaje enviado correctamente. Te contactaré pronto.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        })
        .catch(function(error) {
            console.error('FAILED...', error);

            // Mostrar mensaje de error más detallado
            let errorMessage = 'Hubo un problema al enviar el mensaje.';

            if (error.text) {
                console.error('Error detalle:', error.text);
                errorMessage += ' Por favor, verifica la configuración de EmailJS.';
            }

            showToast('Error', errorMessage, 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// EFECTO DE ESCRITURA PARA HERO
const heroTitle = document.querySelector('.hero h1');
const heroSubtitle = document.querySelector('.hero p');

function typeWriter(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efecto de escritura después de cargar la página
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(heroTitle, 'Julian Contreras', 150);
        setTimeout(() => {
            typeWriter(heroSubtitle, 'Desarrollador Full Stack', 50);
        }, 2000);
    }, 1000);
});

// EFECTO PARALLAX PARA HERO
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const speed = scrolled * 0.5;
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${speed}px)`;
    }
});

// EFECTO DE PARTÍCULAS PARA HERO
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${5 + Math.random() * 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        hero.appendChild(particle);
    }
}

// Inicializar partículas
createParticles();

// ANIMACIÓN DE CONTADORES
function animateCounters() {
    const counters = [
        { element: null, target: 50, suffix: '+', description: 'Proyectos Completados' },
        { element: null, target: 100, suffix: '%', description: 'Satisfacción del Cliente' },
        { element: null, target: 3, suffix: '+', description: 'Años de Experiencia' }
    ];

    // Crear sección de contadores si no existe
    const aboutSection = document.querySelector('.about');
    const counterSection = document.createElement('div');
    counterSection.className = 'counter-section';
    counterSection.style.cssText = `
        display: flex;
        justify-content: space-around;
        margin-top: 4rem;
        flex-wrap: wrap;
        gap: 2rem;
    `;

    counters.forEach((counter, index) => {
        const counterDiv = document.createElement('div');
        counterDiv.className = 'counter fade-in';
        counterDiv.style.cssText = `
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            min-width: 200px;
        `;
        
        counterDiv.innerHTML = `
            <div class="counter-number" style="font-size: 3rem; font-weight: bold; color: #4a5568; margin-bottom: 1rem;">0${counter.suffix}</div>
            <div class="counter-text" style="color: #666; font-weight: 500;">${counter.description}</div>
        `;
        
        counter.element = counterDiv.querySelector('.counter-number');
        counterSection.appendChild(counterDiv);
    });

    aboutSection.querySelector('.container').appendChild(counterSection);

    // Animar contadores cuando estén a la vista
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    let current = 0;
                    const increment = counter.target / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= counter.target) {
                            counter.element.textContent = counter.target + counter.suffix;
                            clearInterval(timer);
                        } else {
                            counter.element.textContent = Math.floor(current) + counter.suffix;
                        }
                    }, 20);
                });
            }
        });
    }, observerOptions);

    counterObserver.observe(counterSection);
}

// Inicializar contadores
animateCounters();

// PANTALLA DE CARGA
function createLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
            <p style="font-size: 1.2rem;">Cargando Portfolio...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Remover cargador después de cargar la página
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(loader)) {
                    document.body.removeChild(loader);
                }
            }, 500);
        }, 1500);
    });
}

// Inicializar pantalla de carga
createLoadingScreen();

// ALTERNADOR DE TEMA
function addThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.id = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #4a5568;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10001;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    let isDark = false;
    
    // Crear CSS para tema oscuro
    const darkThemeStyles = document.createElement('style');
    darkThemeStyles.id = 'dark-theme-styles';
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        
        if (isDark) {
            // Aplicar tema oscuro
            darkThemeStyles.textContent = `
                body.dark-theme {
                    background-color: #1a1a1a !important;
                    color: #ffffff !important;
                }
                
                .dark-theme .navbar {
                    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%) !important;
                }
                
                .dark-theme .navbar.scrolled {
                    background: rgba(26, 32, 44, 0.95) !important;
                }
                
                .dark-theme .hero {
                    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%) !important;
                }
                
                /* Fondos intercalados para tema oscuro */
                .dark-theme .about {
                    background-color: #1a202c !important;
                }
                
                .dark-theme .skills {
                    background-color: #2d3748 !important;
                }
                
                .dark-theme .education {
                    background-color: #1a202c !important;
                }
                
                .dark-theme .experience {
                    background-color: #2d3748 !important;
                }
                
                .dark-theme .projects {
                    background-color: #1a202c !important;
                }
                
                .dark-theme .social {
                    background-color: #2d3748 !important;
                }
                
                .dark-theme .contact {
                    background-color: #1a202c !important;
                }
                
                .dark-theme .skill-card,
                .dark-theme .project-card,
                .dark-theme .contact-form {
                    background-color: #4a5568 !important;
                    color: #ffffff !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
                }
                
                .dark-theme .social-link {
                    background-color: #4a5568 !important;
                    color: #ffffff !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
                }
                
                .dark-theme .social-link:hover {
                    background: #ffffff !important;
                    color: #4a5568 !important;
                }
                
                .dark-theme .skill-logo {
                    background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%) !important;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
                }
                
                .dark-theme .skill-logo:hover {
                    box-shadow: 0 10px 25px rgba(0,0,0,0.4) !important;
                }
                
                .dark-theme .about-image,
                .dark-theme .hero-photo,
                .dark-theme .project-image {
                    background: linear-gradient(45deg, #4a5568, #2d3748) !important;
                }
                
                /* Todos los títulos y texto en blanco */
                .dark-theme .section-title,
                .dark-theme .project-title,
                .dark-theme .about-text,
                .dark-theme .about-text p,
                .dark-theme .skill-card h3,
                .dark-theme .timeline-title,
                .dark-theme .timeline-company,
                .dark-theme .timeline-description,
                .dark-theme .timeline-description p,
                .dark-theme .timeline-description li,
                .dark-theme .project-description,
                .dark-theme .skill-name,
                .dark-theme .counter-text {
                    color: #ffffff !important;
                }
                
                .dark-theme .timeline-date {
                    color: #a0aec0 !important;
                }
                
                .dark-theme .form-group input,
                .dark-theme .form-group textarea {
                    background-color: #2d3748 !important;
                    border-color: #4a5568 !important;
                    color: #ffffff !important;
                    box-shadow: inset 0 4px 12px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3) !important;
                }
                
                .dark-theme .form-group input:focus,
                .dark-theme .form-group textarea:focus {
                    border-color: #4a5568 !important;
                    background-color: #1a202c !important;
                    box-shadow: inset 0 4px 12px rgba(0,0,0,0.4), 0 0 0 4px rgba(74, 85, 104, 0.3), 0 2px 8px rgba(74, 85, 104, 0.4) !important;
                    color: #ffffff !important;
                }
                
                .dark-theme .form-group input:hover,
                .dark-theme .form-group textarea:hover {
                    border-color: #718096 !important;
                    background-color: #2d3748 !important;
                    box-shadow: inset 0 5px 15px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.35) !important;
                    color: #ffffff !important;
                }
                
                .dark-theme .form-group label {
                    color: #ffffff !important;
                }
                
                .dark-theme .footer {
                    background-color: #1a1a1a !important;
                    color: #ffffff !important;
                }
                
                .dark-theme .footer p {
                    color: #ffffff !important;
                }
                
                .dark-theme .counter {
                    background-color: #4a5568 !important;
                    color: #ffffff !important;
                }
                
                .dark-theme .counter-number {
                    color: #ffffff !important;
                }
                
                .dark-theme .timeline-content {
                    background-color: #4a5568 !important;
                    color: #ffffff !important;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
                }
                
                .dark-theme .timeline-content:hover {
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4) !important;
                }
                
                .dark-theme .timeline-content::before {
                    border-left-color: #4a5568 !important;
                }
                
                #theme-toggle {
                    background: ${isDark ? '#f7fafc' : '#4a5568'} !important;
                    color: ${isDark ? '#2d3748' : 'white'} !important;
                    z-index: 10001 !important;
                }
            `;
            
            document.head.appendChild(darkThemeStyles);
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '☀️';
            themeToggle.style.background = '#f7fafc';
            themeToggle.style.color = '#2d3748';
        } else {
            // Remover tema oscuro
            if (darkThemeStyles.parentNode) {
                darkThemeStyles.parentNode.removeChild(darkThemeStyles);
            }
            document.body.classList.remove('dark-theme');
            themeToggle.innerHTML = '🌙';
            themeToggle.style.background = '#4a5568';
            themeToggle.style.color = 'white';
        }
    });
    
    document.body.appendChild(themeToggle);
}

// Agregar alternador de tema
addThemeToggle();

// BOTÓN VOLVER ARRIBA
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #4a5568;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10000;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        const isDarkMode = document.body.classList.contains('dark-theme');
        
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
        
        // Actualizar colores del botón basado en el tema
        if (isDarkMode) {
            scrollBtn.style.background = '#4a5568';
            scrollBtn.style.color = '#e0e0e0';
        } else {
            scrollBtn.style.background = '#4a5568';
            scrollBtn.style.color = 'white';
        }
    });
    
    document.body.appendChild(scrollBtn);
}

// Agregar botón volver arriba
addScrollToTop();

// MODAL PARA CERTIFICADOS
const modal = document.getElementById('certificate-modal');
const modalClose = document.querySelector('.modal-close');
const certificateFrame = document.getElementById('certificate-frame');
const certificateImage = document.getElementById('certificate-image');
const certificateBtns = document.querySelectorAll('.certificate-btn');

// Función para abrir el modal
function openCertificateModal(certificatePath, type) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body

    // Resetear ambos elementos
    certificateFrame.classList.remove('active');
    certificateImage.classList.remove('active');
    certificateFrame.src = '';
    certificateImage.src = '';

    // Mostrar el elemento correcto según el tipo
    if (type === 'pdf') {
        certificateFrame.src = certificatePath;
        certificateFrame.classList.add('active');
    } else if (type === 'image') {
        certificateImage.src = certificatePath;
        certificateImage.classList.add('active');
    }
}

// Función para cerrar el modal
function closeCertificateModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll del body

    // Limpiar contenido después de la animación
    setTimeout(() => {
        certificateFrame.src = '';
        certificateImage.src = '';
        certificateFrame.classList.remove('active');
        certificateImage.classList.remove('active');
    }, 300);
}

// Event listeners para los botones de certificado
certificateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const certificatePath = btn.getAttribute('data-certificate');
        const type = btn.getAttribute('data-type');
        openCertificateModal(certificatePath, type);
    });
});

// Cerrar modal al hacer clic en la X
modalClose.addEventListener('click', closeCertificateModal);

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeCertificateModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeCertificateModal();
    }
});

// FILTRADO DE PROYECTOS
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all') {
                card.style.display = 'block';
                // Animación de entrada
                card.style.animation = 'fadeIn 0.5s ease';
            } else if (category === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// MODAL DE PROYECTOS
const projectModal = document.getElementById('project-modal');
const projectModalClose = document.querySelector('.project-modal-close');
const viewMoreButtons = document.querySelectorAll('.btn-view-more');

// Función para abrir el modal de proyecto
function openProjectModal(projectCard) {
    const projectData = projectCard.querySelector('.project-data');
    const projectImage = projectCard.querySelector('.project-img').src;
    const projectTitle = projectCard.querySelector('.project-title').textContent;
    const projectDesc = projectData.querySelector('.project-full-desc').innerHTML;
    const projectTech = projectData.querySelector('.project-tech').innerHTML;
    const projectDemoLink = projectData.querySelector('.project-demo-link');
    const projectCodeBtn = projectCard.querySelector('.btn-view-code');

    console.log('Demo Link:', projectDemoLink ? projectDemoLink.textContent.trim() : 'No existe');
    console.log('Code Link:', projectCodeBtn ? projectCodeBtn.href : 'No existe');

    // Actualizar contenido del modal
    document.getElementById('modal-project-img').src = projectImage;
    document.getElementById('modal-project-title').textContent = projectTitle;
    document.getElementById('modal-project-description').innerHTML = projectDesc;
    document.getElementById('modal-project-tech').innerHTML = projectTech;

    // Mostrar/ocultar botón de demo según si existe
    const modalDemoLink = document.getElementById('modal-demo-link');
    if (projectDemoLink && projectDemoLink.textContent.trim() !== '') {
        const demoUrl = projectDemoLink.textContent.trim();
        modalDemoLink.href = demoUrl;
        modalDemoLink.style.display = 'inline-block';
        console.log('Demo URL configurada:', demoUrl);
    } else {
        modalDemoLink.style.display = 'none';
        console.log('No hay demo link disponible');
    }

    // Mostrar/ocultar botón de código según si existe
    const modalCodeLink = document.getElementById('modal-code-link');
    if (projectCodeBtn) {
        modalCodeLink.href = projectCodeBtn.href;
        modalCodeLink.style.display = 'inline-block';
    } else {
        modalCodeLink.style.display = 'none';
    }

    // Mostrar modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de proyecto
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners para botones "Ver más"
viewMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectCard = button.closest('.project-card');
        openProjectModal(projectCard);
    });
});

// Cerrar modal al hacer clic en la X
projectModalClose.addEventListener('click', closeProjectModal);

// Cerrar modal al hacer clic fuera del contenido
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// MODAL CV
const cvModal = document.getElementById('cv-modal');
const cvModalClose = document.querySelector('.cv-modal-close');
const viewCvBtn = document.getElementById('view-cv-btn');
const cvIframe = document.getElementById('cv-iframe');

// Función para abrir el modal del CV
function openCvModal() {
    // Cargar el CV HTML que tiene traducciones incorporadas
    const cvPath = './CV/resume.html';

    cvIframe.src = cvPath;
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal del CV
function closeCvModal() {
    cvModal.classList.remove('active');
    cvIframe.src = '';
    document.body.style.overflow = '';
}

// Event listener para botón "Ver CV"
viewCvBtn.addEventListener('click', openCvModal);

// Cerrar modal al hacer clic en la X
cvModalClose.addEventListener('click', closeCvModal);

// Cerrar modal al hacer clic fuera del contenido
cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        closeCvModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal.classList.contains('active')) {
        closeCvModal();
    }
});

console.log('Portfolio cargado exitosamente! 🚀');