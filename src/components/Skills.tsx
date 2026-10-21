import React, { useState } from 'react';
import { Code2, Layout, Wrench, Globe, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories, languages } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 size={20} />;
      case 'frontend':
        return <Layout size={20} />;
      case 'tools':
        return <Wrench size={20} />;
      default:
        return <Terminal size={20} />;
    }
  };

  const visibleCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>Технологический стек</span>
          </div>
          <h2 className="section-title">
            Навыки и <span className="gradient-text">Языки программирования</span>
          </h2>
          <p className="section-subtitle">
            Технологии, инструменты и языки, с которыми я работаю ежедневно для создания надежных и быстрых веб-продуктов.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-filter-row">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`skill-category-pill ${selectedCategory === 'all' ? 'active' : ''}`}
          >
            Все технологии
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`skill-category-pill ${selectedCategory === category.id ? 'active' : ''}`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="skills-categories-grid">
          {visibleCategories.map((category) => (
            <div key={category.id} className="skill-category-card glass-card">
              <div className="skill-category-header">
                <div className="skill-icon-wrapper">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="skill-category-title">{category.title}</h3>
                  <p className="skill-category-desc">{category.description}</p>
                </div>
              </div>

              {/* Skills List with Progress */}
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-row">
                        <span className="skill-name">{skill.name}</span>
                        {skill.experience && (
                          <span className="skill-exp-badge">{skill.experience}</span>
                        )}
                      </div>
                      <span className="skill-level-text">{skill.levelText}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-progress-glow" />
                      </div>
                    </div>

                    {skill.description && (
                      <p className="skill-micro-desc">{skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages Section */}
        <div className="spoken-languages-container">
          <div className="spoken-languages-header">
            <div className="spoken-icon-badge">
              <Globe size={22} />
            </div>
            <div>
              <h3 className="spoken-title">Владение иностранными языками</h3>
              <p className="spoken-subtitle">Языки для коммуникации, технической документации и работы в интернациональных командах</p>
            </div>
          </div>

          <div className="spoken-languages-grid">
            {languages.map((lang, idx) => (
              <div key={idx} className="spoken-card glass-card">
                <div className="spoken-card-top">
                  <div className="spoken-flag">{lang.flag}</div>
                  <div>
                    <h4 className="spoken-lang-name">{lang.language}</h4>
                    <span className="spoken-lang-level">{lang.level}</span>
                  </div>
                </div>

                <div className="skill-progress-track">
                  <div
                    className="skill-progress-bar spoken-bar"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>

                {lang.description && (
                  <p className="spoken-desc">{lang.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
