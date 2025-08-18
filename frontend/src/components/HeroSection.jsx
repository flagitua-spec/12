import React, { useState, useEffect } from 'react';
import { Play, Target, Shield } from 'lucide-react';

const HeroSection = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayClick = () => {
    // Mock functionality - показує алерт
    alert('Демо версія: Переходимо до гри...');
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://i.ibb.co/HLq0GBsx/UMD.png"
          alt="Military drones"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="dynamic-elements">
          <div className={`drone-marker drone-1 ${animationPhase === 0 ? 'active' : ''}`}>
            <Target size={16} />
          </div>
          <div className={`drone-marker drone-2 ${animationPhase === 1 ? 'active' : ''}`}>
            <Target size={16} />
          </div>
          <div className={`drone-marker drone-3 ${animationPhase === 2 ? 'active' : ''}`}>
            <Target size={16} />
          </div>
          <div className="explosion-effects">
            <div className={`explosion ${animationPhase === 3 ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <Shield size={16} />
          <span>СТРАТЕГІЧНА ГРА</span>
        </div>
        
        <h1 className="hero-title">
          ВЕРХОВНИЙ
          <span className="title-subtitle">Візьми на себе тягар лідерства</span>
        </h1>
        
        <p className="hero-description">
          Кожне рішення - це життя країни.
          Стань Президентом країни, що воює. 
          AI генерує унікальні сценарії на основі твоїх рішень.
          Отримай свій психологічний портрет.
          Задонать на актуальні збори.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary" onClick={handlePlayClick}>
            <Play size={18} />
            Спробувати зараз
          </button>
          <button className="btn-secondary">
            Дізнатися більше
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Унікальних сценаріїв</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">AI</div>
            <div className="stat-label">Генерація подій</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Безкінечний сюжет</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;