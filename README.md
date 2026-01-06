# Menu Translate

Landing page for Menu Translate — an iOS app that instantly translates any menu into your language using AI-powered recognition.

## Features

- **AI-Powered Translation** — Snap a photo of any menu and get instant translations
- **100+ Languages** — Support for English, Japanese, Korean, Chinese, French, Spanish, and more
- **Cultural Context** — Get dish insights, ingredients, and regional significance
- **Pronunciation Guide** — Learn how to order with confidence
- **Visual Order Sheets** — Build and show your order to servers

## Tech Stack

- React 19
- Vite 7
- CSS (custom properties, animations)
- Deployed on Vercel

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect the Vite configuration and deploy

The `vercel.json` file is already configured for SPA routing.

### Manual Deployment

```bash
npm run build
```

Upload the contents of the `dist/` folder to any static hosting provider (Netlify, AWS S3, Cloudflare Pages, etc.).

## Project Structure

```
src/
├── components/
│   └── Logo.jsx          # Brand logo component
├── pages/
│   ├── LandingPage3.jsx  # Main landing page
│   └── LandingPage3.css  # Landing page styles
├── App.jsx               # App entry point
├── index.css             # Global styles & CSS variables
└── main.jsx              # React root
```

## License

© 2026 Menu Translate. All rights reserved.
