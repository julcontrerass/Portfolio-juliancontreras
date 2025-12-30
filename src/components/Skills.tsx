import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="skills" id="conocimientos">
      <div className="container">
        <h2 className="section-title fade-in">{t('skills.title')}</h2>
        <div className="skills-grid">
          <div className="skill-card fade-in">
            <h3>{t('skills.frontend')}</h3>
            <div className="skills-logos">
              <div className="skill-logo">
                <img className="skill-icon" width="48" height="48" src="https://img.icons8.com/fluency/48/vuejs.png" alt="Vue" />
                <div className="skill-name">Vue 2-3</div>
              </div>
              <div className="skill-logo">
                <img className="skill-icon" width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="React" />
                <div className="skill-name">React</div>
              </div>
              <div className="skill-logo">
                <img className="skill-icon" width="48" height="48" src="https://img.icons8.com/fluency/48/html-5.png" alt="HTML" />
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-logo">
                <img className="skill-icon" width="48" height="48" src="https://img.icons8.com/fluency/48/css3.png" alt="CSS" />
                <div className="skill-name">CSS</div>
              </div>
            </div>
          </div>

          <div className="skill-card fade-in">
            <h3>{t('skills.backend')}</h3>
            <div className="skills-logos">
              {['Node.js', 'Java', 'Spring Boot', 'Express', 'Next.js', 'C++', 'C#', '.NET'].map((name, i) => (
                <div key={i} className="skill-logo">
                  <img className="skill-icon" width="48" height="48" src={`https://img.icons8.com/${name === 'Java' ? 'fluency/48/java-coffee-cup-logo' : name === 'Spring Boot' ? 'color/48/spring-logo' : name === 'Node.js' ? 'fluency/48/node-js' : name === 'Express' ? 'fluency/48/express-js' : name === 'Next.js' ? 'fluency/48/nextjs' : name === 'C++' ? 'color/48/c-plus-plus-logo' : name === 'C#' ? 'color/48/c-sharp-logo' : 'color/48/net-framework'}.png`} alt={name} />
                  <div className="skill-name">{name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card fade-in">
            <h3>{t('skills.database')}</h3>
            <div className="skills-logos">
              {['PostgreSQL', 'Firebase', 'MySQL', 'MongoDB'].map((name, i) => (
                <div key={i} className="skill-logo">
                  <img className="skill-icon" width="48" height="48" src={`https://img.icons8.com/color/48/${name === 'PostgreSQL' ? 'postgreesql' : name === 'Firebase' ? 'firebase' : name === 'MySQL' ? 'mysql-logo' : 'mongodb'}.png`} alt={name} />
                  <div className="skill-name">{name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card fade-in">
            <h3>{t('skills.tools')}</h3>
            <div className="skills-logos">
              {['Git', 'Docker', 'AWS', 'VS Code', 'Visual Studio', 'Windsurf', 'SQL Server', 'DBeaver', 'Postman'].map((name, i) => (
                <div key={i} className="skill-logo">
                  <img className="skill-icon" width="48" height="48" src={`https://img.icons8.com/${name === 'Git' ? 'color/48/git' : name === 'Docker' ? 'fluency/48/docker' : name === 'AWS' ? 'color/48/amazon-web-services' : name === 'VS Code' ? 'fluency/48/visual-studio-code-2019' : name === 'Visual Studio' ? 'fluency/48/visual-studio' : name === 'Windsurf' ? 'ios/50/windsurf-editor' : name === 'SQL Server' ? 'color/48/microsoft-sql-server' : name === 'DBeaver' ? 'dusk/64/dbeaver' : 'dusk/48/postman-api'}.png`} alt={name} />
                  <div className="skill-name">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
