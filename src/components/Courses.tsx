import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar, CheckCircle, BookOpen, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Courses: React.FC = () => {
  const { courses, education } = portfolioData;

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={15} />
            <span>Непрерывное развитие</span>
          </div>
          <h2 className="section-title">
            Оконченные <span className="gradient-text">курсы и сертификаты</span>
          </h2>
          <p className="section-subtitle">
            Профильные программы обучения, интенсивы и курсы повышения квалификации для углубления инженерных компетенций.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card glass-card">
              <div className="course-top-meta">
                <span className="badge badge-cyan">
                  <Award size={13} />
                  {course.institution}
                </span>
                <span className="course-period">
                  <Calendar size={13} />
                  {course.period}
                </span>
              </div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>

              {/* Skills Mastered in Course */}
              <div className="course-skills-block">
                <span className="course-skills-title">Изученные темы:</span>
                <div className="course-tags">
                  {course.skillsLearned.map((skill, idx) => (
                    <span key={idx} className="badge badge-tech">
                      <CheckCircle size={11} className="text-accent" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Course Footer & Certificate ID */}
              <div className="course-footer">
                {course.certificateId && (
                  <div className="certificate-id-box">
                    <FileCheck size={14} className="text-emerald" />
                    <span>ID: {course.certificateId}</span>
                  </div>
                )}

                {course.credentialUrl && (
                  <a
                    href={course.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm course-cert-btn"
                  >
                    <span>Сертификат</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Higher Education Block */}
        {education && education.length > 0 && (
          <div className="education-container">
            <div className="education-header">
              <div className="education-icon-box">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="education-section-title">Высшее образование</h3>
                <p className="education-section-subtitle">Фундаментальная академическая подготовка</p>
              </div>
            </div>

            <div className="education-cards-grid">
              {education.map((item) => (
                <div key={item.id} className="education-card glass-card">
                  <div className="edu-period-badge">{item.period}</div>
                  <h4 className="edu-degree">{item.degree}: {item.field}</h4>
                  <div className="edu-university">{item.university}</div>
                  {item.description && (
                    <p className="edu-desc">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
