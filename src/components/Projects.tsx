import React, { useState } from 'react';
import { ExternalLink, Eye, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'frontend'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Все работы' },
    { id: 'fullstack', label: 'Fullstack & SaaS' },
    { id: 'frontend', label: 'Frontend & E-Commerce' },
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fullstack') return project.category === 'fullstack';
    if (activeFilter === 'frontend') return project.category === 'frontend';
    return true;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={15} />
            <span>Мое портфолио</span>
          </div>
          <h2 className="section-title">
            Реализованные <span className="gradient-text">проекты и работы</span>
          </h2>
          <p className="section-subtitle">
            Подборка практических проектов с чистой архитектурой, современным стеком технологий и акцентом на пользовательский опыт.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-container">
          <div className="filter-tabs glass-card">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`filter-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Project Preview Image */}
              <div
                className="project-image-container"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-image-hover-overlay">
                  <span className="btn btn-primary btn-sm">
                    <Eye size={16} />
                    <span>Посмотреть детали</span>
                  </span>
                </div>
                <div className="project-badge-overlay">
                  <span className="badge badge-cyan">{project.categoryLabel}</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="project-content">
                <h3
                  className="project-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.slice(0, 5).map((tag, idx) => (
                    <span key={idx} className="badge badge-tech">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="badge badge-tech">+{project.tags.length - 5}</span>
                  )}
                </div>

                {/* Action Links */}
                <div className="project-card-footer">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary btn-sm"
                  >
                    <Eye size={15} />
                    <span>Детали</span>
                  </button>

                  <div className="project-external-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link-btn"
                        title="Посмотреть исходный код на GitHub"
                        aria-label="GitHub репозиторий"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link-btn"
                        title="Открыть Live Demo в новой вкладке"
                        aria-label="Демо проекта"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
