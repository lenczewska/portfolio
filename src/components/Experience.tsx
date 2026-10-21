import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} />
            <span>Карьерный путь</span>
          </div>
          <h2 className="section-title">
            Опыт работы и <span className="gradient-text">достижения</span>
          </h2>
          <p className="section-subtitle">
            Практический опыт разработки коммерческих приложений, работа в командах и ключевые результаты.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          <div className="timeline-items">
            {experience.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-node">
                  <div className="timeline-dot" />
                </div>

                <div className="timeline-content glass-card">
                  <div className="timeline-header-row">
                    <div>
                      <div className="timeline-role-row">
                        <h3 className="timeline-role">{item.role}</h3>
                        {item.isCurrent && (
                          <span className="badge badge-success">Текущее место</span>
                        )}
                      </div>
                      <div className="timeline-company">{item.company}</div>
                    </div>

                    <div className="timeline-meta-box">
                      <span className="timeline-period">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="timeline-location">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="timeline-achievements">
                      <h4 className="timeline-achievements-title">Ключевые результаты:</h4>
                      <ul className="timeline-achievements-list">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="timeline-achievement-item">
                            <ChevronRight size={15} className="text-cyan timeline-check" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="timeline-tech-tags">
                    {item.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge badge-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
