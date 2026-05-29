---
name: portfolio-seo-geo
description: Use this skill when improving a personal portfolio website for SEO, GEO, AEO, AI crawler readability, recruiter-agent discoverability, structured data, sitemap, robots.txt, llms.txt, Open Graph metadata, and accessibility without changing the visual design.
---

# Portfolio SEO / GEO / AEO Skill

## Goal

Improve a personal portfolio website so that search engines, AI search systems, recruiter tools, browser agents, and hiring agents can crawl, understand, classify, cite, and navigate it.

This skill is for non-visual improvements only.

## Hard Constraints

- Do not redesign the UI.
- Do not change layout, colors, typography, spacing, animations, or visual components unless required for accessibility.
- Do not add keyword stuffing.
- Do not add hidden text.
- Do not create doorway pages.
- Do not make unsupported SEO/GEO/AEO claims.
- Do not block normal crawlers unless explicitly requested.
- Do not remove existing working content.
- Do not break the build.
- Do not introduce dependencies unless necessary and approved.

## User Identity

The website belongs to:

Paramveer Singh Bhele

Positioning:
Software Engineer & AI/ML Engineer building practical intelligent systems.

Background:
- CS graduate from University of South Florida
- Incoming Columbia MS AI student with AI Infrastructure concentration
- Focus areas: software engineering, applied AI/ML, backend/API systems, full-stack products, AI infrastructure, data/research systems

Links:
- Website: https://paramveerbhele.com/
- GitHub: https://github.com/Param-10
- LinkedIn: https://www.linkedin.com/in/paramveer-singh-bhele/
- Email: bheleparamveer@gmail.com
- Resume: /resume.pdf

Key Projects:
- Polaris
- Adversarial Spam Detection
- CarbonCTRL
- Robotics Research

## SEO/GEO/AEO Tasks

When asked to optimize this portfolio, perform these tasks:

### 1. Metadata

Audit and improve:
- title tag
- meta description
- canonical URL
- robots meta tag
- author metadata
- theme-color
- Open Graph tags
- Twitter card tags
- favicon references
- resume metadata if appropriate

Recommended title:
Paramveer Singh Bhele | Software Engineer & AI/ML Engineer

Recommended description:
Portfolio of Paramveer Singh Bhele, a Software Engineer and AI/ML Engineer building practical intelligent systems across full-stack products, backend/API systems, applied ML, AI infrastructure, and research-driven software.

### 2. Structured Data

Add JSON-LD using:
- WebSite
- WebPage
- ProfilePage
- Person

The Person entity should include:
- name
- alternateName
- url
- email
- image
- jobTitle
- sameAs links
- alumniOf
- knowsAbout

Use accurate information only.

### 3. Projects

Represent key projects clearly in visible DOM text and, where reasonable, structured data.

Projects:

Polaris:
Gemini-powered GitHub App that scans infrastructure-as-code pull requests and posts security findings fast.
GitHub: https://github.com/Param-10/hackthebay
Demo: https://polaris-livid-one.vercel.app/

Adversarial Spam Detection:
Adversarial ML pipeline alternating BERT classifier tuning with Qwen3-4B spam generation.
GitHub: https://github.com/Param-10/adversarial-spam-detection

CarbonCTRL:
AI-powered emissions platform that estimates company CO2 impact and generates reduction plans.
GitHub: https://github.com/Param-10/CarbonCTRL
Demo: https://carbonctrl.us

Robotics Research:
Human-robot interaction research and robot app development using Misty, Pepper, Gemini AI, Android, and Google Cloud SDK.
No fake GitHub link if no public repo exists.

### 4. Crawl Files

Create or improve:
- /public/robots.txt
- /public/sitemap.xml
- /public/llms.txt

robots.txt:
- Allow normal crawling.
- Include sitemap URL.
- Do not block AI crawlers unless explicitly requested.

sitemap.xml:
- Include canonical homepage.
- Include resume PDF if public and stable.
- Use the correct deployed path.

llms.txt:
- Plain text.
- Concise.
- Include identity, role, links, resume, projects, and skills.
- No keyword stuffing.
- No unsupported claims.
- Treat as optional agent-readable context, not a guaranteed ranking mechanism.

### 5. Accessibility and Agent Readability

Ensure:
- nav links have aria-labels
- external links are real anchor tags
- resume button is a real anchor tag
- project links are real anchor tags
- image alt text is descriptive
- semantic tags are used where appropriate
- important content is visible in the rendered DOM
- buttons that navigate are anchors, not click-only buttons
- content does not require user interaction to exist in the DOM

### 6. React/Vite SPA Crawl Safety

For React/Vite:
- Keep important content in React-rendered HTML.
- Do not rely on delayed client-side state for metadata.
- Put core metadata in index.html where possible.
- Keep project descriptions as readable text.
- Preserve hash navigation if used.
- Ensure build output includes public crawl files.

### 7. Validation

After changes:
- Run npm run build.
- Fix all build errors.
- Summarize modified files.
- Summarize added files.
- List manual verification steps:
  - Google Search Console
  - sitemap submission
  - URL inspection
  - Rich Results Test
  - LinkedIn Post Inspector
  - robots.txt check
  - deployed /llms.txt check