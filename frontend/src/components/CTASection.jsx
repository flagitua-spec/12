import React, { useState } from 'react';
import { Play, Shield, Star, Quote, ArrowRight } from 'lucide-react';

const CTASection = ({ testimonials }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Mock functionality
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const handlePlayNow = () => {
    alert('Демо версія: Запуск гри...');
  };

  const handleBecomePresident = () => {
    alert('Демо версія: Реєстрація на бета-тест...');
  };

  return (
    <section className="cta-section">
      <div className="container">
        {/* Testimonials */}
        <div className="testimonials">
          <h2 className="testimonials-title">Що кажуть гравці</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-quote">
                    <Quote size={20} />
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="main-cta">
          <div className="cta-background">
            <img 
              src="https://i.ibb.co/vxMpcJfd/image.png"
              alt="Command center"
              className="cta-image"
            />
            <div className="cta-overlay"></div>
          </div>
          
          <div className="cta-content">
            <div className="cta-badge">
              <Shield size={16} />
              <span>ГОТОВИЙ ДО ВИКЛИКУ?</span>
            </div>
            
            <h2 className="cta-title">
              Стань лідером нації
              <span className="title-highlight">Визнач долю країни</span>
            </h2>
            
            <p className="cta-description">
              Час прийняти найважливіші рішення в житті. 
              Кожен вибір має значення. Кожна секунда на рахунку.
            </p>
            
            <div className="cta-actions">
              <button className="btn-primary-large" onClick={handlePlayNow}>
                <Play size={20} />
                Грати зараз
              </button>
              <button className="btn-secondary-large" onClick={handleBecomePresident}>
                <Shield size={20} />
                Стань Президентом
              </button>
            </div>

            <div className="cta-stats">
              <div className="stat-item">
                <div className="stat-icon">🎮</div>
                <div className="stat-info">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Активних гравців</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <div className="stat-number">4.8</div>
                  <div className="stat-label">Рейтинг гри</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-info">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Унікальних досягнень</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Будь в курсі оновлень</h3>
            <p className="newsletter-description">
              Отримуй ексклюзивні новини про розробку та перші доступи до нового контенту
            </p>
            
            <form className="newsletter-form" onSubmit={handleEmailSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Твій email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="submit-btn" disabled={isSubscribed}>
                  {isSubscribed ? '✓ Підписано' : 'Підписатися'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="brand-name">ВЕРХОВНИЙ</h3>
              <p className="brand-tagline">Стратегічна гра майбутнього</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Гра</h4>
                <ul>
                  <li><a href="#gameplay">Геймплей</a></li>
                  <li><a href="#features">Особливості</a></li>
                  <li><a href="#scenarios">Сценарії</a></li>
                </ul>
              </div>
              <div className="link-group">
                <h4>Підтримка</h4>
                <ul>
                  <li><a href="#help">Допомога</a></li>
                  <li><a href="#contact">Контакти</a></li>
                  <li><a href="#community">Спільнота</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Верховний. Всі права захищені.</p>
            <p className="footer-disclaimer">
              Гра призначена для освітніх та розважальних цілей. 
              Не містить пропаганди насильства.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CTASection;