import React from 'react';
import { ArrowUp, Code, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-badge">
                <Code size={18} />
              </div>
              <div className="brand-text">
                <span className="brand-name">{personal.name} {personal.surname}</span>
                <span className="brand-dot">.dev</span>
              </div>
            </div>
            <p className="footer-tagline">
              Frontend & Fullstack разработчик. Создание современных веб-интерфейсов.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4 className="footer-heading">Навигация</h4>
            <div className="footer-links-grid">
              <a href="#about" className="footer-link">Обо мне</a>
              <a href="#projects" className="footer-link">Мои работы</a>
              <a href="#skills" className="footer-link">Навыки и Языки</a>
              <a href="#courses" className="footer-link">Курсы и Обучение</a>
              <a href="#experience" className="footer-link">Опыт работы</a>
              <a href="#contact" className="footer-link">Контакты</a>
            </div>
          </div>

          {/* Back to top CTA */}
          <div className="footer-back-to-top-col">
            <button
              onClick={scrollToTop}
              className="btn btn-secondary scroll-top-btn"
              title="Вернуться наверх страницы"
            >
              <ArrowUp size={18} />
              <span>Наверх</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-divider" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {personal.name} {personal.surname}. Все права защищены.
          </p>

          <div className="footer-tech-badge">
            <span>Сделано с</span>
            <Heart size={14} className="text-pink heart-icon" />
            <span>на React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
