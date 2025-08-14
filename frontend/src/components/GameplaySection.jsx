import React, { useState } from 'react';
import { Brain, Users, Zap, ChevronRight } from 'lucide-react';

const GameplaySection = ({ decisions }) => {
  const [selectedDecision, setSelectedDecision] = useState(null);
  const [psychProfile, setPsychProfile] = useState({
    leadership: 75,
    strategy: 80,
    humanity: 65,
    determination: 90
  });

  const handleDecisionClick = (decision, index) => {
    setSelectedDecision(index);
    // Mock: оновлюємо психологічний профіль
    const newProfile = { ...psychProfile };
    Object.keys(newProfile).forEach(key => {
      newProfile[key] = Math.max(0, Math.min(100, 
        newProfile[key] + (Math.random() - 0.5) * 20
      ));
    });
    setPsychProfile(newProfile);
    
    setTimeout(() => {
      setSelectedDecision(null);
    }, 3000);
  };

  return (
    <section className="gameplay-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Геймплей</h2>
          <p className="section-subtitle">
            Твої рішення формують долю країни та твій психологічний портрет
          </p>
        </div>

        <div className="gameplay-content">
          <div className="decisions-panel">
            <h3 className="panel-title">
              <Brain size={20} />
              Приклади рішень
            </h3>
            
            <div className="decisions-list">
              {decisions.map((decision, index) => (
                <div 
                  key={index}
                  className={`decision-card ${selectedDecision === index ? 'selected' : ''}`}
                  onClick={() => handleDecisionClick(decision, index)}
                >
                  <div className="decision-scenario">
                    <h4>{decision.scenario}</h4>
                    <p>{decision.description}</p>
                  </div>
                  
                  <div className="decision-options">
                    {decision.options.map((option, optIndex) => (
                      <div key={optIndex} className="decision-option">
                        <span className="option-icon">{option.icon}</span>
                        <span className="option-text">{option.text}</span>
                        <ChevronRight size={16} />
                      </div>
                    ))}
                  </div>

                  {selectedDecision === index && (
                    <div className="decision-consequences">
                      <div className="consequences-title">
                        <Zap size={16} />
                        Наслідки рішення:
                      </div>
                      <ul>
                        {decision.consequences.map((consequence, cIndex) => (
                          <li key={cIndex}>{consequence}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="psychology-panel">
            <h3 className="panel-title">
              <Users size={20} />
              Психологічний портрет
            </h3>
            
            <div className="psych-profile">
              {Object.entries(psychProfile).map(([trait, value]) => (
                <div key={trait} className="trait-meter">
                  <div className="trait-header">
                    <span className="trait-name">
                      {trait === 'leadership' && 'Лідерство'}
                      {trait === 'strategy' && 'Стратегічне мислення'}
                      {trait === 'humanity' && 'Гуманність'}
                      {trait === 'determination' && 'Рішучість'}
                    </span>
                    <span className="trait-value">{Math.round(value)}%</span>
                  </div>
                  <div className="trait-bar">
                    <div 
                      className="trait-fill"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="profile-analysis">
              <h4>Аналіз лідерства:</h4>
              <p>
                {psychProfile.leadership > 80 ? 
                  "Ви демонструєте сильні лідерські якості та готовність брати відповідальність." :
                  psychProfile.leadership > 60 ?
                  "Ваш стиль лідерства збалансований між авторитетом та співпрацею." :
                  "Вам варто розвивати впевненість у прийнятті складних рішень."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;