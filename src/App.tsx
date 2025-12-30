import './styles/variables.css';
import './styles/global.css';
import './styles/dark-theme.css';
import { TranslationProvider } from './context/TranslationContext';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Social from './components/Social';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';
import CVModal from './components/CVModal';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useScrollAnimation();

  return (
    <ThemeProvider>
      <TranslationProvider>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Social />
        <Contact />
        <FloatingNav />
        <CVModal />
        <ThemeToggle />
      </TranslationProvider>
    </ThemeProvider>
  );
}

export default App;
