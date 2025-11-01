# Mingda Bi - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🧩 Modular component architecture
- 🎯 Smooth scrolling navigation
- 💼 Project showcase
- 📧 Contact section

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navigation, Footer
│   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   ├── ui/            # Reusable UI components (Cards, Titles)
│   └── icons/         # SVG icons
├── data/              # Data files (skills, projects, experience, contact)
└── App.jsx            # Main application component
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-react
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `contact.js` - Contact information and about section
- `skills.js` - Technical skills
- `projects.js` - Project portfolio
- `experience.js` - Work experience

### Modify Styling

The project uses Tailwind CSS. You can customize:
- Colors in component files (currently using blue-500/purple-600 gradient)
- Spacing and layout in component JSX
- Global styles in `src/index.css`

## License

© 2025 Mingda Bi. All rights reserved.

## Built With

🤖 Generated with [Claude Code](https://claude.com/claude-code)
