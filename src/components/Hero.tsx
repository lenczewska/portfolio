import React from 'react';
import { ArrowRight, Download, Send, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal, contacts } = portfolioData;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Bio & Intro */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-badge">
            <span className="pulse-indicator">
              <span className="pulse-dot" />
              <span className="pulse-ring" />
            </span>
            <span>{contacts.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Привет, я <span className="gradient-text">{personal.name} {personal.surname}</span>
            <br />
            <span className="hero-subtitle-role">{personal.role}</span>
          </h1>

          {/* Short Bio */}
          <p className="hero-description">
            {personal.tagline}. {personal.shortAbout}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button
              onClick={() => handleScrollTo('projects')}
              className="btn btn-primary btn-lg"
            >
              <span>Смотреть работы</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-secondary btn-lg"
            >
              <Send size={18} />
              <span>Связаться</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
              className="btn btn-outline btn-lg hero-cv-btn"
              title="Запросить полное резюме"
            >
              <Download size={18} />
              <span>Резюме</span>
            </a>
          </div>

          {/* Social Links List */}
          <div className="hero-socials">
            <span className="hero-socials-label">Связь со мной:</span>
            <div className="social-links-row">
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn telegram"
                title="Telegram"
              >
                <TelegramIcon size={19} />
              </a>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>
              {contacts.linkedin && (
                <a
                  href={contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
              )}
              <a
                href={`mailto:${contacts.email}`}
                className="social-btn email"
                title="Написать на почту"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Floating Badges */}
        <div className="hero-visual">
          <div className="hero-card-wrapper">
            {/* Glowing background halo */}
            <div className="avatar-halo" />

            {/* Avatar Image Card */}
            <div className="avatar-card glass-card">
              <img
                src={personal.avatarUrl}
                alt={`${personal.name} ${personal.surname}`}
                className="avatar-img"
              />
              <div className="avatar-overlay">
                <div className="avatar-chip">
                  <span>Frontend & Fullstack Engineer</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react">
              <div className="floating-badge-text">
                <strong>React 19</strong>
                <small>Architecture</small>
              </div>
            </div>

            <div className="floating-badge badge-ts">
              <div className="floating-badge-text">
                <strong>TypeScript</strong>
                <small>Strict Typing</small>
              </div>
            </div>

            <div className="floating-badge badge-next">
              <div className="floating-badge-text">
                <strong>Vite / Next.js</strong>
                <small>Performance</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="container stats-bar-container">
        <div className="stats-grid glass-card">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              {stat.subtext && <div className="stat-subtext">{stat.subtext}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
