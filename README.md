# paramveerbhele.com

Engineering portfolio for Paramveer Singh Bhele, focused on software engineering, AI/ML engineering, AI infrastructure, backend systems, and production product work.

**[View the portfolio](https://paramveerbhele.com/portfolio/)**

## Information architecture

1. Hero
2. Selected Work
3. Experience
4. About
5. Education
6. Leadership & Recognition
7. Skills
8. Contact

The project data, experience, education, skills, links, and recognition content are centralized in `src/data/portfolio.ts`.

## Stack

| Layer | Tools |
| --- | --- |
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, Geist Sans, Geist Mono |
| Motion | Framer Motion with reduced-motion support |
| Icons | Lucide React |
| Rendering | Static prerender + React hydration |
| Deployment | GitHub Pages artifact workflow / custom domain |

## Local development

```bash
npm install
npm run dev
```

The configured base path is `/portfolio/`, matching the current production hosting setup.

## Quality checks

```bash
npm run optimize:images  # regenerate WebP and OG assets after source-image changes
npm run build            # typecheck, client build, SSR bundle, static prerender
npm run lint
npm run preview
```

The production build includes meaningful prerendered page content, canonical and social metadata, Person structured data, a sitemap, robots directives, responsive images, and accessible native case-study disclosures.

## Deployment note

The live root domain currently redirects to `/portfolio/`. Moving the canonical site to `/` requires a coordinated host-level document-root and redirect change; changing Vite's base path alone would break production assets and deep links.

## Contact

- [Email](mailto:bheleparamveer@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/paramveer-singh-bhele/)
- [GitHub](https://github.com/Param-10)
