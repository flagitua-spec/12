import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import GameplaySection from './GameplaySection';
import AIScenarios from './AIScenarios';
import GameFeatures from './GameFeatures';
import CTASection from './CTASection';
import { mockGameData } from '../data/mockData';

const LandingPage = () => {
  const [gameData, setGameData] = useState(mockGameData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="military-loader">
        <div className="loading-radar">
          <div className="radar-sweep"></div>
        </div>
        <p className="loading-text">Завантаження операції...</p>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <HeroSection />
      <GameplaySection decisions={gameData.sampleDecisions} />
      <AIScenarios scenarios={gameData.scenarios} />
      <GameFeatures features={gameData.features} />
      <CTASection testimonials={gameData.testimonials} />
    </div>
  );
};

export default LandingPage;