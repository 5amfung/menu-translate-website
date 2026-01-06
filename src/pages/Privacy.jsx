import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './LegalPage.css'

export default function Privacy() {
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
        <h1 className="legal-page__title">Privacy Policy</h1>

        <div className="legal-page__section">
          <p className="legal-page__text">
            This privacy policy applies to the Menu Translate app (hereby referred to as "Application") for mobile devices that was created by Sam Fung (hereby referred to as "Service Provider") as a Commercial service. This service is intended for use "AS IS".
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Information Collection and Use</h2>
          <p className="legal-page__text">
            The Application collects information when you download and use it. This information may include information such as
          </p>
          <ul className="legal-page__list">
            <li className="legal-page__list-item">Your device's Internet Protocol address (e.g. IP address)</li>
            <li className="legal-page__list-item">The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
            <li className="legal-page__list-item">The time spent on the Application</li>
            <li className="legal-page__list-item">The operating system you use on your mobile device</li>
          </ul>
          <p className="legal-page__text">
            The Application does not gather precise information about the location of your mobile device.
          </p>
          <p className="legal-page__text">
            The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
          </p>
          <ul className="legal-page__list">
            <li className="legal-page__list-item">
              <strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.
            </li>
            <li className="legal-page__list-item">
              <strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
            </li>
            <li className="legal-page__list-item">
              <strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.
            </li>
          </ul>
          <p className="legal-page__text">
            The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
          </p>
          <p className="legal-page__text">
            For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Third Party Access</h2>
          <p className="legal-page__text">
            Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
          </p>
          <p className="legal-page__text">
            Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
          </p>
          <ul className="legal-page__list">
            <li className="legal-page__list-item">Google Analytics for Firebase</li>
            <li className="legal-page__list-item">Firebase Crashlytics</li>
            <li className="legal-page__list-item">RevenueCat</li>
          </ul>
          <p className="legal-page__text">
            The Service Provider may disclose User Provided and Automatically Collected Information:
          </p>
          <ul className="legal-page__list">
            <li className="legal-page__list-item">as required by law, such as to comply with a subpoena, or similar legal process;</li>
            <li className="legal-page__list-item">when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
            <li className="legal-page__list-item">with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
          </ul>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Use of Artificial Intelligence</h2>
          <p className="legal-page__text">
            The Application uses Artificial Intelligence (AI) technologies to enhance user experience and provide certain features. The AI components may process user data to deliver personalized content, recommendations, or automated functionalities. All AI processing is performed in accordance with this privacy policy and applicable laws. If you have questions about the AI features or data processing, please contact the Service Provider.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Opt-Out Rights</h2>
          <p className="legal-page__text">
            You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Data Retention Policy</h2>
          <p className="legal-page__text">
            The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at{' '}
            <a href="mailto:support@sfng.co" className="legal-page__email-link">support@sfng.co</a> and they will respond in a reasonable time.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Children</h2>
          <p className="legal-page__text">
            The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
          </p>
          <p className="legal-page__text">
            The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider ({' '}
            <a href="mailto:support@sfng.co" className="legal-page__email-link">support@sfng.co</a>) so that they will be able to take the necessary actions.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Security</h2>
          <p className="legal-page__text">
            The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Changes</h2>
          <p className="legal-page__text">
            This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
          </p>
          <p className="legal-page__text">
            This privacy policy is effective as of 2025-12-08
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Your Consent</h2>
          <p className="legal-page__text">
            By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
          </p>
        </div>

        <div className="legal-page__section">
          <h2 className="legal-page__section-title">Contact Us</h2>
          <p className="legal-page__text">
            If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{' '}
            <a href="mailto:support@sfng.co" className="legal-page__email-link">support@sfng.co</a>.
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
