import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import GameplaySection from './GameplaySection';
import AIScenarios from './AIScenarios';
import GameFeatures from './GameFeatures';
import DonationSection from './DonationSection';
import CTASection from './CTASection';
import { mockGameData } from '../data/mockData';

const LandingPage = () => {
  const [gameData, setGameData] = useState(mockGameData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with radar animation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="military-loader">
        <div className="loading-radar">
          <div className="radar-sweep"></div>
          <div className="radar-dots">
            <div className="radar-dot dot-1"></div>
            <div className="radar-dot dot-2"></div>
            <div className="radar-dot dot-3"></div>
          </div>
        </div>
        <p className="loading-text">Підготовка операції...</p>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <div className="page-background">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>
      
      <HeroSection />
      <GameplaySection decisions={gameData.sampleDecisions} />
      <AIScenarios scenarios={gameData.scenarios} />
      <GameFeatures features={gameData.features} />
      <DonationSection />
      <CTASection testimonials={gameData.testimonials} />
    </div>
  );
};

export default LandingPage;