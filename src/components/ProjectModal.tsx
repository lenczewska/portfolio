import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Calendar } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Закрыть">
          <X size={22} />
        </button>

        {/* Modal Image Header */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-image-overlay">
            <span className="badge badge-cyan">{project.categoryLabel}</span>
            {project.date && (
              <span className="badge badge-tech">
                <Calendar size={12} />
                {project.date}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.fullDescription}</p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-subtitle">
                <Layers size={18} className="text-accent" />
                Ключевой функционал и возможности
              </h3>
              <ul className="modal-features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle2 size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="modal-section">
            <h3 className="modal-subtitle">Использованный стек технологий</h3>
            <div className="project-tags-row">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge badge-tech">{tag}</span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="modal-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={18} />
                <span>Открыть Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={18} />
                <span>Исходный код (GitHub)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
