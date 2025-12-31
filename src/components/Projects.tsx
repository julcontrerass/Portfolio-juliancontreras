import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { Project } from '../types/project';
import '../styles/Projects.css';

const ProjectModal: React.FC<{isOpen: boolean; onClose: () => void; project: Project | null}> = ({isOpen, onClose, project}) => {
  const { t } = useTranslation();
  if (!isOpen || !project) return null;

  return (
    <div className={`project-modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="project-modal-content">
        <span className="project-modal-close" onClick={onClose}>&times;</span>
        <div className="project-modal-body">
          <div className="project-modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-modal-info">
            <h2>{project.title}</h2>
            <div className="modal-project-description">
              {project.fullDescription.map((desc, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
            <div className="modal-project-tech">
              {project.technologies.map((tech, index) => (
                <img key={index} src={tech.icon} alt={tech.name} title={tech.name} />
              ))}
            </div>
            <div className="modal-project-links">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-demo">
                  <span>{t('projects.demo')}</span>
                </a>
              )}
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn-code">
                  <span>{t('projects.code')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'jouplab',
      category: 'sold',
      image: '/images/JoupLab&Studio.png',
      title: t('projects.jouplab.title'),
      description: t('projects.jouplab.desc1'),
      fullDescription: [
        t('projects.jouplab.desc1'),
        `<strong>${t('projects.jouplab.desc2')}</strong>`,
        t('projects.jouplab.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
        { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/typescript.png' }
      ],
      demoUrl: 'https://joup-lab-studio.vercel.app/'
    },
    {
      id: 'tuki',
      category: 'university',
      image: '/images/TukiAsistenteDeSalon.png',
      title: t('projects.tuki.title'),
      description: t('projects.tuki.desc1'),
      fullDescription: [
        t('projects.tuki.desc1'),
        `<strong>${t('projects.tuki.desc2')}</strong>`,
        t('projects.tuki.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'C#', icon: 'https://img.icons8.com/color/24/c-sharp-logo.png' },
        { name: 'ASP.NET', icon: 'https://img.icons8.com/color/24/asp.png' },
        { name: 'SQL Server', icon: 'https://img.icons8.com/color/24/microsoft-sql-server.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/TukiTuAsistenteDeSalon.git'
    },
    {
      id: 'grito',
      category: 'sold',
      image: '/images/Carnaval2025.png',
      title: t('projects.grito.title'),
      description: t('projects.grito.desc1'),
      fullDescription: [
        t('projects.grito.desc1'),
        `<strong>${t('projects.grito.desc2')}</strong>`,
        t('projects.grito.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/fluency/48/css3.png' }
      ],
      demoUrl: 'https://gritodecarnaval.vercel.app'
    },
    {
      id: 'promoweb',
      category: 'university',
      image: '/images/Promo WEB.png',
      title: t('projects.promoweb.title'),
      description: t('projects.promoweb.desc1'),
      fullDescription: [
        t('projects.promoweb.desc1'),
        `<strong>${t('projects.promoweb.desc2')}</strong>`,
        t('projects.promoweb.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'C#', icon: 'https://img.icons8.com/color/24/c-sharp-logo.png' },
        { name: 'ASP.NET', icon: 'https://img.icons8.com/color/24/asp.png' },
        { name: 'SQL Server', icon: 'https://img.icons8.com/color/24/microsoft-sql-server.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/TPWeb_Equipo8A.git'
    },
    {
      id: 'gestion',
      category: 'university',
      image: '/images/Gestión de Artículos.png',
      title: t('projects.gestion.title'),
      description: t('projects.gestion.desc1'),
      fullDescription: [
        t('projects.gestion.desc1'),
        `<strong>${t('projects.gestion.desc2')}</strong>`,
        t('projects.gestion.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'C#', icon: 'https://img.icons8.com/color/24/c-sharp-logo.png' },
        { name: '.NET', icon: 'https://img.icons8.com/color/24/net-framework.png' },
        { name: 'SQL Server', icon: 'https://img.icons8.com/color/24/microsoft-sql-server.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/TPWinForm_equipo-8A.git'
    },
    {
      id: 'gravity',
      category: 'university',
      image: '/images/gravity-falls.png',
      title: t('projects.gravity.title'),
      description: t('projects.gravity.desc1'),
      fullDescription: [
        t('projects.gravity.desc1'),
        `<strong>${t('projects.gravity.desc2')}</strong>`,
        t('projects.gravity.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'C++', icon: 'https://img.icons8.com/color/24/c-plus-plus-logo.png' },
        { name: 'SFML', icon: 'https://img.icons8.com/color/24/code.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/GravityFallsGame'
    },
    {
      id: 'cien',
      category: 'university',
      image: '/images/cien-escalera.png',
      title: t('projects.cien.title'),
      description: t('projects.cien.desc1'),
      fullDescription: [
        t('projects.cien.desc1'),
        `<strong>${t('projects.cien.desc2')}</strong>`,
        t('projects.cien.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'C++', icon: 'https://img.icons8.com/color/24/c-plus-plus-logo.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/CienOEscaleraUTN'
    },
    {
      id: 'gestor',
      category: 'course',
      image: '/images/gestor-productos.png',
      title: t('projects.gestor.title'),
      description: t('projects.gestor.desc1'),
      fullDescription: [
        t('projects.gestor.desc1'),
        `<strong>${t('projects.gestor.desc2')}</strong>`,
        t('projects.gestor.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'HTML', icon: 'https://img.icons8.com/fluency/24/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/fluency/24/css3.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/fluency/24/javascript.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/ProyectoFinal_JulianContreras'
    },
    {
      id: 'tateti',
      category: 'personal',
      image: '/images/ta-te-ti.png',
      title: t('projects.tateti.title'),
      description: t('projects.tateti.desc1'),
      fullDescription: [
        t('projects.tateti.desc1'),
        `<strong>${t('projects.tateti.desc2')}</strong>`,
        t('projects.tateti.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/fluency/24/css3.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/Ta-Te-Ti'
    },
    {
      id: 'nike',
      category: 'personal',
      image: '/images/nike-ecommerce.png',
      title: t('projects.nike.title'),
      description: t('projects.nike.desc1'),
      fullDescription: [
        t('projects.nike.desc1'),
        `<strong>${t('projects.nike.desc2')}</strong>`,
        t('projects.nike.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
        { name: 'Node.js', icon: 'https://img.icons8.com/fluency/24/node-js.png' },
        { name: 'Express', icon: 'https://img.icons8.com/fluency/24/express-js.png' },
        { name: 'Firebase', icon: 'https://img.icons8.com/color/24/firebase.png' }
      ],
      codeUrl: 'https://github.com/lauticometti/AirLand'
    },
    {
      id: 'countries',
      category: 'personal',
      image: '/images/countries.png',
      title: t('projects.countries.title'),
      description: t('projects.countries.desc1'),
      fullDescription: [
        t('projects.countries.desc1'),
        `<strong>${t('projects.countries.desc2')}</strong>`,
        t('projects.countries.desc3').replace(/\n/g, '<br />')
      ],
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' },
        { name: 'Node.js', icon: 'https://img.icons8.com/fluency/24/node-js.png' },
        { name: 'SQL', icon: 'https://img.icons8.com/color/24/microsoft-sql-server.png' }
      ],
      codeUrl: 'https://github.com/julcontrerass/Countries-Proyecto-Personal'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <>
      <section className="projects" id="proyectos">
        <div className="container">
          <h2 className="section-title fade-in">{t('projects.title')}</h2>

          <div className="projects-filters fade-in">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              {t('projects.filter.all')}
            </button>
            <button className={`filter-btn ${filter === 'personal' ? 'active' : ''}`} onClick={() => setFilter('personal')}>
              {t('projects.filter.personal')}
            </button>
            <button className={`filter-btn ${filter === 'course' ? 'active' : ''}`} onClick={() => setFilter('course')}>
              {t('projects.filter.course')}
            </button>
            <button className={`filter-btn ${filter === 'university' ? 'active' : ''}`} onClick={() => setFilter('university')}>
              {t('projects.filter.university')}
            </button>
            <button className={`filter-btn ${filter === 'sold' ? 'active' : ''}`} onClick={() => setFilter('sold')}>
              {t('projects.filter.sold')}
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card fade-in" data-category={project.category}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <span className={`project-badge project-badge-${project.category}`}>
                    {t(`projects.category.${project.category}`)}
                  </span>
                </div>
                <div className="project-card-footer">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech-icons">
                    {project.technologies.map((tech, index) => (
                      <img key={index} src={tech.icon} alt={tech.name} title={tech.name} />
                    ))}
                  </div>
                  <div className="project-actions">
                    <button className="btn-view-more" onClick={() => openModal(project)}>
                      {t('projects.viewMore')}
                    </button>
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-view-code">
                        {t('projects.code')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} project={selectedProject} />
    </>
  );
};

export default Projects;
