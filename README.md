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

The build also produces a dedicated, prerendered HTML resume at `/portfolio/resume/`. It is the canonical searchable version of the resume, while `/portfolio/Paramveer_Singh_Bhele_Resume.pdf` remains the downloadable document.

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

The production build includes meaningful prerendered page content, canonical and social metadata, Person/ProfilePage structured data, a searchable HTML resume, a sitemap, explicit search-oriented AI crawler access, an `llms.txt` summary, responsive images, and accessible native case-study disclosures.

## Deployment note

The live root domain currently redirects to `/portfolio/`. Moving the canonical site to `/` requires a coordinated host-level document-root and redirect change; changing Vite's base path alone would break production assets and deep links.

Keep the application at `/portfolio/`, but configure Hostinger's domain root to serve or redirect `/robots.txt` and `/llms.txt` to their `/portfolio/` counterparts. Search crawlers request `robots.txt` at the domain root, and the proposed `llms.txt` convention also uses the root location. Submit `https://paramveerbhele.com/portfolio/sitemap.xml` through Google Search Console and Bing Webmaster Tools after each production release.

## Contact

- [Email](mailto:paramveer.bhele@columbia.edu)
- [LinkedIn](https://www.linkedin.com/in/paramveer-singh-bhele/)
- [GitHub](https://github.com/Param-10)
- [X](https://x.com/ParamveerBhele)
