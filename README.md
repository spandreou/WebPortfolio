# Spyridon Andreou Portfolio

Premium personal portfolio built with Next.js 15, focused on a futuristic product-style UI and a recruiter-friendly presentation of resume, projects, and contact channels.

## Purpose

This project is designed to:
- Present a clear professional profile
- Showcase technical projects with strong scannability
- Provide direct, trustworthy contact options for internships and junior roles

The goal is not a generic template, but a polished, production-ready personal website.

## Live Sections

- `/` Home with high-impact hero and navigation flow
- `/resume` Structured CV experience from local typed data
- `/projects` Curated project showcase with featured and full portfolio views
- `/contact` Final conversion section for collaboration and hiring outreach

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- OGL (for background shader effect)

## Project Structure

```text
.
+-- app/
|   +-- layout.tsx
|   +-- page.tsx
|   +-- resume/page.tsx
|   +-- projects/page.tsx
|   `-- contact/page.tsx
+-- components/
|   +-- Navbar.tsx
|   +-- HeroSection.tsx
|   +-- BackgroundEffect.tsx
|   +-- Iridescence.tsx
|   +-- TargetFrame.tsx
|   +-- ScrollReveal.tsx
|   +-- home/
|   +-- resume/
|   +-- projects/
|   `-- contact/
+-- lib/
|   +-- site-config.ts
|   +-- metadata.ts
|   +-- resume-data.ts
|   +-- projects-data.ts
|   +-- contact-data.ts
|   `-- utils.ts
+-- public/
|   `-- Spyridon_Andreou_CV1.pdf
+-- styles/
|   `-- theme.css
+-- app/globals.css
+-- package.json
`-- README.md
```

## Data Architecture

Content is intentionally local and typed for reliability and maintainability:

- `lib/resume-data.ts`: personal profile, skills, education, experience, certifications, languages
- `lib/projects-data.ts`: project catalog, categories, status, featured flags, links
- `lib/contact-data.ts`: contact cards, social links, CTA content
- `lib/site-config.ts`: global identity and shared links (email, GitHub, CV, metadata defaults)

## Design System Highlights

- Dark futuristic visual identity
- Glassmorphism surfaces with restrained cyan/blue accent
- Subtle glow and cinematic grain for depth
- Scroll-reveal and micro-interactions tuned for clarity (not visual noise)
- Fully responsive layout across mobile, tablet, and desktop

## Getting Started

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## CV Download

The resume download button points to:

- `public/Spyridon_Andreou_CV1.pdf`

If you want to replace the CV, keep the same filename or update `siteConfig.links.cv` in `lib/site-config.ts`.

## Deployment

Optimized for Vercel deployment.

```bash
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` in production for canonical/metadata consistency.

## Current Scope

Included:
- UI foundation and premium styling
- Resume, Projects, Contact experiences
- Typed local data architecture

Not included yet:
- GitHub API integration
- Backend contact form submission
- PDF parsing or upload workflows
- Terminal/admin tooling
