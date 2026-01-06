import './Logo.css'

export default function Logo({ size = 'md', variant = 'light' }) {
  return (
    <div className={`logo logo--${size} logo--${variant}`}>
      <div className="logo__icon">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M10 12h20M10 20h14M10 28h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="30" cy="28" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M28 26l4 4M28 30l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="logo__text">Menu Translate</span>
    </div>
  )
}
