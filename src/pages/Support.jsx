import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './LegalPage.css'

export default function Support() {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <div className="legal-page__header-content">
          <Link to="/" className="legal-page__logo-link">
            <Logo size="md" variant="grey" />
          </Link>
        </div>
      </header>

      <main className="legal-page__content">
        <h1 className="legal-page__title">Support</h1>

        <div className="legal-page__section">
          <p className="legal-page__text">
            Please reach out to{' '}
            <a href="mailto:support@sfng.co" className="legal-page__email-link">support@sfng.co</a> for support.
          </p>
        </div>
      </main>

      <footer className="legal-page__footer">
        <div className="legal-page__footer-content">
          <p className="legal-page__footer-text">© 2026 Menu Translate</p>
        </div>
      </footer>
    </div>
  )
}
