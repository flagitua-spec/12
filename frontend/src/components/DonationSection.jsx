import React, { useState } from 'react';
import { Heart, Shield, ExternalLink, Users, Target, Award } from 'lucide-react';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const donationOptions = [
    {
      name: "Повернись живим",
      description: "Фонд, який допомагає військовим і рятує життя",
      logo: "🛡️",
      url: "https://savelife.in.ua/",
      focus: "Медичне обладнання, евакуація поранених"
    },
    {
      name: "Фонд Сергія Притули",
      description: "Збір коштів на дрони та військове обладнання",
      logo: "🚁",
      url: "https://prytulafoundation.org/",
      focus: "Дрони, військові технології"
    },
    {
      name: "United24",
      description: "Офіційна платформа збору коштів України",
      logo: "🇺🇦",
      url: "https://u24.gov.ua/",
      focus: "Офіційна державна платформа"
    },
    {
      name: "Армія SOS",
      description: "Допомога військовим підрозділам",
      logo: "⚡",
      url: "https://armysos.com.ua/",
      focus: "Екіпіровка, зв'язок, транспорт"
    }
  ];

  const quickAmounts = [100, 500, 1000, 2000, 5000];

  const handleDonationClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="donation-section">
      <div className="container">
        <div className="donation-header">
          <div className="header-badge">
            <Heart size={16} className="heart-pulse" />
            <span>ПІДТРИМКА УКРАЇНИ</span>
          </div>
          
          <h2 className="donation-title">
            Реальна підтримка 
            <span className="title-highlight">Сил Оборони України</span>
          </h2>
          
          <p className="donation-subtitle">
            Ця гра створена для привернення уваги до справжніх героїв. 
            Підтримайте тих, хто захищає нашу свободу реальними справами.
          </p>
        </div>

        <div className="donation-stats">
          <div className="stat-card glass-card">
            <div className="stat-icon">
              <Shield size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">870+</div>
              <div className="stat-label">Днів героїчного опору</div>
            </div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-icon">
              <Target size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">∞</div>
              <div className="stat-label">Незламний дух</div>
            </div>
          </div>
          
          <div className="stat-card glass-card">
            <div className="stat-icon">
              <Award size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-number">🇺🇦</div>
              <div className="stat-label">Перемога буде за нами</div>
            </div>
          </div>
        </div>

        <div className="donation-cards">
          {donationOptions.map((org, index) => (
            <div key={index} className="donation-card glass-card">
              <div className="card-header">
                <div className="org-logo">{org.logo}</div>
                <div className="org-info">
                  <h3 className="org-name">{org.name}</h3>
                  <p className="org-description">{org.description}</p>
                </div>
              </div>
              
              <div className="org-focus">
                <div className="focus-label">Спеціалізація:</div>
                <div className="focus-text">{org.focus}</div>
              </div>
              
              <div className="donation-actions">
                <button 
                  className="donate-btn primary-donate"
                  onClick={() => handleDonationClick(org.url)}
                >
                  <Heart size={16} />
                  Підтримати
                  <ExternalLink size={14} />
                </button>
              </div>
              
              <div className="security-badge">
                <div className="security-icon">🔒</div>
                <span>Офіційні перевірені фонди</span>
              </div>
            </div>
          ))}
        </div>

        <div className="donation-footer">
          <div className="footer-content glass-card">
            <div className="footer-icon">
              <Users size={32} />
            </div>
            <div className="footer-text">
              <h3>Разом до перемоги</h3>
              <p>
                Кожна гривня має значення. Кожен донат наближає нас до перемоги. 
                Дякуємо всім, хто підтримує наших захисників! 
              </p>
              <div className="support-message">
                💙💛 <strong>Слава Україні! Героям слава!</strong> 💛💙
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;