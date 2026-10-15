# Daniel Di Salvo — Personal Portfolio

A modern, bilingual portfolio built to showcase my experience as a **Senior Frontend Engineer**, my technical background, and the projects I'm working on.

Designed and developed with a focus on performance, accessibility, responsive design, and clean, maintainable code.

### Live Demo

**[Visit my portfolio](https://daniel-disalvo-portfolio.vercel.app/en)**

Available in [English](https://daniel-disalvo-portfolio.vercel.app/en) and [Spanish](https://daniel-disalvo-portfolio.vercel.app/es).

## Features

- **Responsive design** — Optimized for desktop, tablet, and mobile devices.
- **Internationalization** — English and Spanish support using next-intl.
- **Light and dark themes** — Theme switching with persistent preferences.
- **Interactive UI** — Subtle animations and terminal-inspired elements.
- **Professional overview** — Experience, technical skills, teaching background, and selected projects.
- **SEO optimization** — Localized metadata, Open Graph images, sitemap, and robots.txt.
- **Accessibility** — Semantic markup and accessible UI controls.

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Internationalization | next-intl |
| Icons | Lucide React, React Icons |
| Animations | Motion |
| Component development | Storybook |
| Testing | Vitest, Playwright |
| CI/CD | GitHub Actions, Vercel |

## Getting Started

### Prerequisites

- Node.js 22
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/DanielDiSalvo/daniel-disalvo-portfolio.git
cd daniel-disalvo-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

For deployment, configure the following environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used to generate absolute URLs for SEO metadata and the sitemap.

## Development & Testing

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run lint         # Run ESLint
npm run test         # Run Vitest tests
npm run test:e2e     # Run Playwright tests
npm run storybook    # Launch Storybook
```

GitHub Actions runs linting, unit tests, and the production build on pushes and pull requests to `main`.

## Deployment

The portfolio is deployed on **Vercel**, with deployments connected to the GitHub repository.

**Production:** https://daniel-disalvo-portfolio.vercel.app

## About Me

I'm Daniel Di Salvo, a software engineer specializing in React, Next.js, React Native, and TypeScript, with experience building web and mobile applications.

I'm also a programming instructor, passionate about sharing knowledge and helping other developers grow.

## Contact

- **Portfolio:** [daniel-disalvo-portfolio.vercel.app](https://daniel-disalvo-portfolio.vercel.app/en)
- **GitHub:** [@DanielDiSalvo](https://github.com/DanielDiSalvo)

---

Built with Next.js, React, and TypeScript by **Daniel Di Salvo**.
