# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint check (no auto-fix flag)
```

There is no test suite. ESLint uses the v9 flat config format (`eslint.config.js`).

## Architecture

Single-page React 18 app built with Vite. All page sections render in sequence inside `App.jsx`:

**Hero → About → Skills → Projects → Experience → Education → Certificates → Contact**

### Key design decisions

**Content is centralized** — `src/data/portfolioData.js` is the single source of truth for all text, links, project metadata, skill lists, timeline entries, and certificate data. Section components import from here; never hardcode content inside components.

**Theme system** — `src/context/ThemeContext.jsx` manages dark/light mode state, persisted to `localStorage` with OS preference fallback. Tailwind uses the `class` strategy (`dark` on `<html>`). Custom design tokens are in `tailwind.config.js`: primary `#6366f1`, secondary `#a855f7`, and `dark.*` surface colors.

**Scroll animations** — `src/hooks/useScrollReveal.js` exports Framer Motion variants (fade-up, fade-down, fade-left, fade-right). Components use these with `whileInView` for entrance animations.

**Contact form** — EmailJS (`@emailjs/browser`) handles delivery. Requires three environment variables:
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```
Copy `.env.example` to `.env` and fill in values before testing the contact form.

**Routing** — React Router v6 with a Vercel SPA rewrite (`vercel.json`) and a Netlify redirect (`netlify.toml`) so all paths resolve to `/index.html`.

### Path alias

`@` resolves to `./src` (configured in `vite.config.js`). Use it for all imports from `src/`.

### UI primitives

Reusable components live in `src/components/ui/`: `SectionHeading`, `ProjectCard`, `SkillBadge`, `TimelineItem`, `CustomCursor`, `PageLoader`, `ScrollProgressBar`, `ScrollToTop`, `ThemeToggle`. Use these before creating new ones.
