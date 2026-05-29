# paramveerbhele.com

Personal portfolio website for Paramveer Singh Bhele — software engineer and incoming Columbia MS AI student.

**[→ View Live](https://param-10.github.io/Portfolio-Website/)**

## Sections

- **Hero** — Introduction with portrait, CTAs, and metadata chips
- **About** — Background, scholarships, roles, and leadership
- **Work Experience** — Timeline of internships and campus positions
- **Education** — Columbia University (MS AI) and University of South Florida (BS CS)
- **Projects** — Selected work including Polaris, CarbonCTRL, Adversarial Spam Detection, and RARE Lab research
- **Skills** — Categorized grid across Software Engineering, AI/ML, Backend & Data, and Cloud & Dev Tools
- **Contact** — Email CTA card

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 18, TypeScript |
| Styling | Tailwind CSS, Geist Sans / Geist Mono |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Build | Vite |
| Deploy | GitHub Pages (gh-pages) |

## Local Development

```bash
git clone https://github.com/Param-10/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Open `http://localhost:5173`

## Build & Deploy

```bash
npm run build      # Production build → dist/
npm run preview    # Preview locally
npm run deploy     # Deploy to GitHub Pages
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceTimeline.tsx
│   ├── EducationSection.tsx
│   ├── SelectedWork.tsx
│   ├── SkillsGrid.tsx
│   ├── ContactCTA.tsx
│   ├── DockNav.tsx
│   ├── Footer.tsx
│   ├── LogoBox.tsx
│   └── Reveal.tsx
├── data/
│   └── portfolio.ts        # All content and configuration
├── App.tsx
├── index.css
└── main.tsx
```

## Features

- macOS-style dock navigation with hover magnification
- Light / dark theme toggle with localStorage persistence
- Grayscale portrait that turns color on hover
- Scroll-aware active section highlighting
- Staggered entrance animations with reduced-motion support
- Responsive design across all breakpoints

## Contact

- **Email**: bheleparamveer@gmail.com
- **LinkedIn**: [paramveer-singh-bhele](https://www.linkedin.com/in/paramveer-singh-bhele/)
- **GitHub**: [@Param-10](https://github.com/Param-10)

## License

MIT — see [LICENSE](LICENSE) for details.
