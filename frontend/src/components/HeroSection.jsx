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
          
          {/* Floating text for drone-1 animation */}
          <div className={`floating-text floating-text-1 ${animationPhase === 0 ? 'active' : ''}`}>
            <span className="text-symbol">∞</span>
            <span className="text-label">Унікальних сценаріїв</span>
          </div>
          
          {/* Floating text for drone-2 animation */}
          <div className={`floating-text floating-text-2 ${animationPhase === 1 ? 'active' : ''}`}>
            <span className="text-symbol">🤖</span>
            <span className="text-label">AI Генерація подій</span>
          </div>
          
          {/* Floating text for drone-3 animation */}
          <div className={`floating-text floating-text-3 ${animationPhase === 2 ? 'active' : ''}`}>
            <span className="text-symbol">🎴</span>
            <span className="text-label">Психологічний портрет гравця</span>
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
          
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary" onClick={handlePlayClick}>
            <Play size={18} />
            Спробувати зараз
          </button>

        </div>
        
        {/* Mobile Game Features - показується тільки на екранах < 1050px */}
        <div className="mobile-game-features">
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <span className="feature-text">Перша гра з AI-генерацією військових сценаріїв</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧠</span>
              <span className="feature-text">Психологічний аналіз стилю лідерства</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span className="feature-text">Базується на реальних подіях та тактиках</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💝</span>
              <span className="feature-text">Можливість задонатити на реальний збір</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;