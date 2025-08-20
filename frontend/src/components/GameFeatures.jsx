import React, { useState } from 'react';
import { Cpu, Infinity, Brain, Plane, ChevronDown, ChevronUp } from 'lucide-react';

const GameFeatures = ({ features }) => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const getFeatureIcon = (iconString) => {
    switch(iconString) {
      case '🤖': return <Cpu size={24} />;
      case '∞': return <Infinity size={24} />;
      case '🧠': return <Brain size={24} />;
      case '🚁': return <Plane size={24} />;
      default: return <Cpu size={24} />;
    }
  };

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <section className="game-features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Особливості гри</h2>
          <p className="section-subtitle">
            Унікальні можливості, що роблять "Верховний" справжнім симулятором лідерства
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${expandedFeature === index ? 'expanded' : ''}`}
            >
              <div className="feature-header" onClick={() => toggleFeature(index)}>
                <div className="feature-icon">
                  {getFeatureIcon(feature.icon)}
                </div>
                <div className="feature-title-section">
                  <h3 className="feature-title">{feature.title}</h3>
                  <div className="expand-indicator">
                    {expandedFeature === index ? 
                      <ChevronUp size={20} /> : 
                      <ChevronDown size={20} />
                    }
                  </div>
                </div>
              </div>

              <p className="feature-description">{feature.description}</p>

              <div className={`feature-benefits ${expandedFeature === index ? 'show' : ''}`}>
                <h4>Переваги:</h4>
                <ul className="benefits-list">
                  {feature.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="benefit-item">
                      <span className="benefit-check">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feature-demo">
                <div className="demo-visualization">
                  {index === 0 && (
                    <div className="ai-demo">
                      <div className="neural-network">
                        <div className="neural-node node-1"></div>
                        <div className="neural-node node-2"></div>
                        <div className="neural-node node-3"></div>
                        <div className="neural-connection conn-1"></div>
                        <div className="neural-connection conn-2"></div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="infinity-demo">
                      <div className="story-branches">
                        <div className="branch branch-1"></div>
                        <div className="branch branch-2"></div>
                        <div className="branch branch-3"></div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="psychology-demo">
                      <div className="mind-graph">
                        <div className="graph-line leadership"></div>
                        <div className="graph-line strategy"></div>
                        <div className="graph-line humanity"></div>
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="warfare-demo">
                      <div className="military-grid">
                        <div className="grid-unit drone"></div>
                        <div className="grid-unit artillery"></div>
                        <div className="grid-unit infantry"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GameFeatures;