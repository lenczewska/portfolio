import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'Обо мне' },
  { id: 'projects', label: 'Мои работы' },
  { id: 'skills', label: 'Навыки и Языки' },
  { id: 'courses', label: 'Обучение и Курсы' },
  { id: 'experience', label: 'Опыт' },
  { id: 'contact', label: 'Контакты' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="brand-logo">
          <div className="logo-badge">
            <Code size={20} className="logo-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{portfolioData.personal.name}</span>
            <span className="brand-dot">.dev</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                  {activeSection === link.id && <span className="active-glow-pill" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Quick CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn btn-primary btn-sm nav-cta-btn"
          >
            <Send size={15} />
            <span>Связаться</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Меню навигации"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  <span className="mobile-link-dot">/</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-primary btn-lg mobile-contact-btn"
            >
              <Send size={18} />
              <span>Написать мне</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
