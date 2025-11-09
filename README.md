# Portfolio - Luqman Hakim

A modern, responsive portfolio website built with React and Vite, showcasing my work as a Cyber Security graduate and Software Developer.

## Features

- 🎨 Modern, clean UI inspired by nevo.is-a.dev
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💫 Beautiful animations and transitions
- 🌙 Dark theme optimized

## Sections

- **Home**: Hero section with introduction
- **About Me**: Personal background and highlights
- **Experience**: Professional work experience timeline
- **Projects**: Showcase of selected projects
- **Skills**: Technical skills and expertise
- **Education**: Academic background and certifications

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom Properties, Flexbox, Grid)

## Customization

To customize the portfolio with your own information:

1. Update personal information in component files:
   - `src/components/Hero.jsx` - Hero section
   - `src/components/About.jsx` - About section
   - `src/components/Experience.jsx` - Work experience
   - `src/components/Projects.jsx` - Projects
   - `src/components/Skills.jsx` - Skills
   - `src/components/Education.jsx` - Education

2. Update contact information in:
   - `src/components/Navigation.jsx` - Social links
   - `src/components/Footer.jsx` - Contact section

3. Customize colors in `src/index.css` by modifying CSS variables:
   ```css
   --bg-primary: #0a0a0a;
   --accent: #00d4ff;
   ```

## License

This project is open source and available under the MIT License.