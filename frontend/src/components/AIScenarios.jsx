import React, { useState, useEffect } from 'react';
import { MapPin, Users, Activity, Eye } from 'lucide-react';

const AIScenarios = ({ scenarios = [] }) => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [animationState, setAnimationState] = useState('idle');

  useEffect(() => {
    if (!scenarios || scenarios.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveScenario(prev => (prev + 1) % scenarios.length);
      setAnimationState('moving');
      setTimeout(() => setAnimationState('idle'), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [scenarios]);

  const handleScenarioClick = (index) => {
    if (!scenarios || index >= scenarios.length) return;
    setActiveScenario(index);
    setAnimationState('moving');
    setTimeout(() => setAnimationState('idle'), 1000);
  };

  if (!scenarios || scenarios.length === 0) {
    return null;
  }

  return (
    <section className="ai-scenarios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Сценарії</h2>
          <p className="section-subtitle">
            Інтерактивна карта бойових операцій з динамічними сценаріями
          </p>
        </div>

        <div className="scenarios-content">
          <div className="tactical-map">
            <img 
              src={scenarios[activeScenario]?.image}
              alt="Tactical map"
              className="map-background"
            />
            <div className="map-overlay"></div>
            
            <div className="map-markers">
              {scenarios.map((scenario, index) => (
                <div
                  key={scenario.id}
                  className={`map-marker ${index === activeScenario ? 'active' : ''} ${animationState}`}
                  style={{
                    left: `${20 + index * 25}%`,
                    top: `${30 + index * 15}%`
                  }}
                  onClick={() => handleScenarioClick(index)}
                >
                  <div className="marker-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="marker-pulse"></div>
                </div>
              ))}
            </div>

            <div className="battle-animations">
              <div className={`drone-path ${animationState === 'moving' ? 'active' : ''}`}>
                <div className="drone-icon">✈️</div>
              </div>
              <div className={`artillery-strike ${animationState === 'moving' ? 'active' : ''}`}>
                <div className="strike-effect"></div>
              </div>
            </div>
          </div>

          <div className="scenario-details">
            <div className="scenario-card">
              <div className="scenario-header">
                <h3 className="scenario-title">{scenarios[activeScenario]?.name}</h3>
                <div className={`scenario-status status-${scenarios[activeScenario]?.status.toLowerCase()}`}>
                  <Activity size={14} />
                  {scenarios[activeScenario]?.status}
                </div>
              </div>

              <p className="scenario-description">
                {scenarios[activeScenario]?.description}
              </p>

              <div className="scenario-units">
                <h4>
                  <Users size={16} />
                  Задіяні підрозділи:
                </h4>
                <ul className="units-list">
                  {scenarios[activeScenario]?.units.map((unit, index) => (
                    <li key={index} className="unit-item">
                      <span className="unit-indicator"></span>
                      {unit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scenario-actions">
                <button className="btn-tactical">
                  <Eye size={16} />
                  Детальний аналіз
                </button>
                <button className="btn-tactical-secondary">
                  Змінити стратегію
                </button>
              </div>
            </div>

            <div className="scenarios-navigation">
              {scenarios.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === activeScenario ? 'active' : ''}`}
                  onClick={() => handleScenarioClick(index)}
                >
                  <span className="dot-pulse"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIScenarios;