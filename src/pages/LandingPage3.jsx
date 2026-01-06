import Logo from '../components/Logo'
import './LandingPage3.css'

const languages = [
  '日本語', '한국어', '中文', 'ไทย', 'Tiếng Việt', 'Ελληνικά',
  'العربية', 'हिन्दी', 'Русский', 'Português', 'Français', 'Deutsch'
]

export default function LandingPage3() {
  return (
    <div className="lp3">
      {/* Section 1: Hero */}
      <section className="lp3__section lp3__hero">
        <div className="lp3__hero-bg">
          {languages.map((lang, i) => (
            <span
              key={i}
              className="lp3__floating-text"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--delay': `${i * 0.5}s`,
                '--duration': `${15 + Math.random() * 10}s`
              }}
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="lp3__hero-content">
          <Logo size="md" variant="grey" />
          <div className="lp3__hero-main">
            <h1 className="lp3__hero-title">
              The world's menus<br />
              <span>translated.</span>
            </h1>
            <div className="lp3__hero-buttons">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lp3__store-btn lp3__store-btn--ios"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="lp3__store-btn-text">
                  <span className="lp3__store-btn-label">Download on the</span>
                  <span className="lp3__store-btn-store">App Store</span>
                </div>
              </a>
              <div className="lp3__store-btn lp3__store-btn--android lp3__store-btn--disabled">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.523 2.446a.5.5 0 0 0-.682.178l-1.616 2.72a8.987 8.987 0 0 0-6.45 0l-1.616-2.72a.5.5 0 0 0-.86.504l1.5 2.52A9.018 9.018 0 0 0 3 13v1h18v-1a9.018 9.018 0 0 0-4.799-7.352l1.5-2.52a.5.5 0 0 0-.178-.682zM7 10.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3 15v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5H3z"/>
                </svg>
                <div className="lp3__store-btn-text">
                  <span className="lp3__store-btn-label">Android</span>
                  <span className="lp3__store-btn-store">Coming Soon</span>
                </div>
              </div>
            </div>
            <div className="lp3__hero-scroll">
              <span>Scroll to explore</span>
              <div className="lp3__scroll-indicator">
                <div className="lp3__scroll-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem */}
      <section className="lp3__section lp3__problem">
        <div className="lp3__section-content">
          <span className="lp3__section-number">01</span>
          <h2 className="lp3__section-title">
            You've found the perfect local restaurant.
          </h2>
          <p className="lp3__section-text">
            The ambiance is incredible. The food smells amazing.
            But the menu? Completely unreadable.
          </p>
          <div className="lp3__problem-visual">
            <div className="lp3__menu-blur">
              <div className="lp3__menu-line"></div>
              <div className="lp3__menu-line lp3__menu-line--short"></div>
              <div className="lp3__menu-line"></div>
              <div className="lp3__menu-line lp3__menu-line--short"></div>
              <div className="lp3__menu-line"></div>
            </div>
            <span className="lp3__confusion">?</span>
          </div>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="lp3__section lp3__solution">
        <div className="lp3__section-content">
          <span className="lp3__section-number">02</span>
          <h2 className="lp3__section-title">
            One snap changes everything.
          </h2>
          <p className="lp3__section-text">
            Menu Translate uses advanced AI to instantly transform
            any menu into your language—with cultural context,
            pronunciations, and dish insights.
          </p>
          <div className="lp3__solution-visual">
            <div className="lp3__camera-frame">
              <div className="lp3__camera-corner lp3__camera-corner--tl"></div>
              <div className="lp3__camera-corner lp3__camera-corner--tr"></div>
              <div className="lp3__camera-corner lp3__camera-corner--bl"></div>
              <div className="lp3__camera-corner lp3__camera-corner--br"></div>
              <div className="lp3__scan-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features */}
      <section className="lp3__section lp3__features">
        <div className="lp3__section-content">
          <span className="lp3__section-number">03</span>
          <h2 className="lp3__section-title">
            More than translation.
          </h2>

          <div className="lp3__features-list">
            <div className="lp3__feature-item">
              <span className="lp3__feature-number">100+</span>
              <p className="lp3__feature-label">Languages supported</p>
            </div>
            <div className="lp3__feature-item">
              <span className="lp3__feature-number">&lt;10s</span>
              <p className="lp3__feature-label">Average translation time</p>
            </div>
            <div className="lp3__feature-item">
              <span className="lp3__feature-number">∞</span>
              <p className="lp3__feature-label">Menu formats recognized</p>
            </div>
          </div>

          <div className="lp3__feature-details">
            <div className="lp3__feature-detail">
              <h3>AI-Powered Recognition</h3>
              <p>Works with any layout—vertical, horizontal, handwritten, or printed. Our AI adapts to every menu style.</p>
            </div>
            <div className="lp3__feature-detail">
              <h3>Cultural Context</h3>
              <p>Go beyond word-for-word translations. Learn about ingredients, cooking methods, and regional significance.</p>
            </div>
            <div className="lp3__feature-detail">
              <h3>Pronunciation Guide</h3>
              <p>Speak confidently when ordering. Our audio guides help you connect with local culture.</p>
            </div>
            <div className="lp3__feature-detail">
              <h3>Visual Order Sheets</h3>
              <p>Build your order in-app and show it to your server. Communication made simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Experience */}
      <section className="lp3__section lp3__experience">
        <div className="lp3__section-content">
          <span className="lp3__section-number">04</span>
          <h2 className="lp3__section-title">
            From confusion to confidence.
          </h2>

          <div className="lp3__experience-demo">
            <div className="lp3__demo-card lp3__demo-card--before">
              <span className="lp3__demo-label">Before</span>
              <div className="lp3__demo-content">
                <p className="lp3__demo-foreign">親子丼</p>
                <p className="lp3__demo-unknown">???</p>
              </div>
            </div>
            <div className="lp3__demo-arrow">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="lp3__demo-card lp3__demo-card--after">
              <span className="lp3__demo-label">After</span>
              <div className="lp3__demo-content">
                <p className="lp3__demo-foreign">親子丼</p>
                <p className="lp3__demo-translated">Oyakodon</p>
                <p className="lp3__demo-description">Chicken and egg rice bowl — "parent and child" bowl</p>
                <p className="lp3__demo-pronunciation">🔊 oh-yah-koh-don</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="lp3__section lp3__cta">
        <div className="lp3__cta-content">
          <h2 className="lp3__cta-title">
            Your next meal awaits.
          </h2>
          <p className="lp3__cta-subtitle">
            Download Menu Translate and discover local cuisine with confidence.
          </p>
          <div className="lp3__cta-buttons">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lp3__store-btn lp3__store-btn--ios"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="lp3__store-btn-text">
                <span className="lp3__store-btn-label">Download on the</span>
                <span className="lp3__store-btn-store">App Store</span>
              </div>
            </a>
            <div className="lp3__store-btn lp3__store-btn--android lp3__store-btn--disabled">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.523 2.446a.5.5 0 0 0-.682.178l-1.616 2.72a8.987 8.987 0 0 0-6.45 0l-1.616-2.72a.5.5 0 0 0-.86.504l1.5 2.52A9.018 9.018 0 0 0 3 13v1h18v-1a9.018 9.018 0 0 0-4.799-7.352l1.5-2.52a.5.5 0 0 0-.178-.682zM7 10.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM3 15v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5H3z"/>
              </svg>
              <div className="lp3__store-btn-text">
                <span className="lp3__store-btn-label">Android</span>
                <span className="lp3__store-btn-store">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="lp3__footer">
          <Logo size="sm" variant="grey" />
          <p>© 2026 Menu Translate</p>
        </footer>
      </section>
    </div>
  )
}
