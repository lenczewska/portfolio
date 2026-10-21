import React, { useState } from 'react';
import { Mail, Send, MapPin, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { contacts } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'telegram') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedTelegram(true);
      setTimeout(() => setCopiedTelegram(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Контакты</span>
          </div>
          <h2 className="section-title">
            Давайте создадим <span className="gradient-text">что-то крутое вместе</span>
          </h2>
          <p className="section-subtitle">
            Всегда открыта к обсуждению новых проектов, стажировок, full-time предложений и интересных идей.
          </p>
        </div>

        {/* Centered Contact Information Container */}
        <div className="contact-centered-container">
          {/* Status & Location Card */}
          <div className="contact-status-card glass-card">
            <div className="contact-status-header">
              <span className="pulse-indicator">
                <span className="pulse-dot" />
                <span className="pulse-ring" />
              </span>
              <span className="contact-status-title">Статус занятости</span>
            </div>
            <p className="contact-status-text">{contacts.status}</p>
            <p className="contact-status-location">
              <MapPin size={15} />
              <span>{contacts.location}</span>
            </p>
          </div>

          {/* Direct Channels 2-column Grid */}
          <div className="direct-channels-grid">
            {/* Telegram */}
            <div className="channel-card glass-card">
              <div className="channel-icon-box">
                <Send size={19} />
              </div>
              <div className="channel-details">
                <span className="channel-name">Telegram</span>
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link"
                >
                  {contacts.telegramHandle}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(contacts.telegramHandle, 'telegram')}
                className="channel-action-btn"
                title="Скопировать юзернейм"
                aria-label="Скопировать Telegram"
              >
                {copiedTelegram ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Email */}
            <div className="channel-card glass-card">
              <div className="channel-icon-box">
                <Mail size={19} />
              </div>
              <div className="channel-details">
                <span className="channel-name">Email</span>
                <a href={`mailto:${contacts.email}`} className="channel-link">
                  {contacts.email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(contacts.email, 'email')}
                className="channel-action-btn"
                title="Скопировать почту"
                aria-label="Скопировать Email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              </button>
            </div>

            {/* GitHub */}
            <div className="channel-card glass-card">
              <div className="channel-icon-box">
                <GithubIcon size={19} />
              </div>
              <div className="channel-details">
                <span className="channel-name">GitHub</span>
                <a
                  href={contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link"
                >
                  {contacts.githubHandle}
                </a>
              </div>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-btn"
                title="Перейти на GitHub"
                aria-label="Открыть GitHub"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* LinkedIn */}
            {contacts.linkedin && (
              <div className="channel-card glass-card">
                <div className="channel-icon-box">
                  <LinkedinIcon size={19} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">LinkedIn</span>
                  <a
                    href={contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    {contacts.linkedinHandle}
                  </a>
                </div>
                <a
                  href={contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-btn"
                  title="Перейти в LinkedIn"
                  aria-label="Открыть LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>

          <p className="contact-note">
            Самый быстрый способ связаться со мной — написать в Telegram или на Email.
          </p>
        </div>
      </div>
    </section>
  );
};
