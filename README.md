# Portfolio Julian Contreras - React + TypeScript

Portfolio personal profesional desarrollado con React 18, TypeScript y Vite.

## 🚀 Características

- ⚡ **React 18** con TypeScript para desarrollo robusto
- 🎨 **Diseño Responsive** adaptado a todos los dispositivos
- 🌐 **Multiidioma** (Español/Inglés) con Context API
- 📧 **Formulario de Contacto** integrado con EmailJS
- 🎯 **Navegación Fluida** con detección automática de sección activa
- 🖼️ **Modales Interactivos** para certificados, CV y proyectos
- 🔍 **Filtros Dinámicos** para proyectos por categoría
- ✨ **Animaciones Suaves** y efectos visuales

## 📦 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
\`\`\`

## 🛠️ Tecnologías

- **React 18.3** - Librería UI
- **TypeScript 5.6** - Tipado estático
- **Vite 7.3** - Build tool y dev server
- **EmailJS 4.4** - Servicio de email
- **CSS3** - Estilos personalizados


## 🎯 Componentes

### Navbar
Barra de navegación superior con logo animado y efecto scroll.

### Hero
Sección principal con efecto typewriter animado para el título y subtítulo.

### About
Presentación personal con video del avatar y botón para visualizar CV.

### Skills
Grid de habilidades técnicas categorizado en Frontend, Backend, Databases y Tools.

### Education
Timeline educativo con modales para visualizar certificados.

### Experience
Timeline de experiencia laboral profesional.

### Projects
Grid de proyectos con:
- Filtros por categoría (Todos, Personales, Cursos, Facultad, Vendidos)
- Modal detallado con descripción completa
- Enlaces a demo y código fuente
- Badges de tecnologías utilizadas

### Contact
Formulario de contacto con:
- Validación de campos
- Integración con EmailJS
- Notificaciones toast de éxito/error

### FloatingNav
Barra de navegación flotante inferior con:
- Iconos SVG para cada sección
- Detección automática de sección activa
- Scroll suave al hacer clic
- Cambio de idioma integrado

## 🌐 Sistema de Traducciones

El proyecto utiliza React Context API para manejar traducciones:

\`\`\`typescript
import { useTranslation } from './context/TranslationContext';

function Component() {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  
  return (
    <div>
      <h1>{t('title.key')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}
\`\`\`

Idiomas soportados: Español (es) e Inglés (en).

## 📧 Configuración EmailJS

Para el formulario de contacto, configura tus credenciales de EmailJS en `src/components/Contact.tsx`:

\`\`\`typescript
const SERVICE_ID = 'tu_service_id';
const TEMPLATE_ID = 'tu_template_id';
const PUBLIC_KEY = 'tu_public_key';
\`\`\`


## 👤 Autor

**Julian Contreras**
- LinkedIn: [juliancontreraslucero](https://www.linkedin.com/in/juliancontreraslucero)
- GitHub: [julcontrerass](https://github.com/julcontrerass)
- Email: jjulian.contrerass@gmail.com
