# Ankur's Portfolio

A complete, production-ready personal portfolio website built with React 18, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

| Tool            | Purpose                     |
| --------------- | --------------------------- |
| React 18 + Vite | Core framework & build tool |
| Tailwind CSS v3 | Utility-first styling       |
| Framer Motion   | Animations & scroll reveals |
| react-scroll    | Smooth in-page navigation   |
| react-icons     | Icon sets (Si, Fi, Ai)      |
| EmailJS         | Contact form email delivery |
| React Router v6 | Client-side routing         |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your EmailJS credentials (see below)

# 3. Start dev server
npm run dev
# → http://localhost:3000
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your [EmailJS](https://dashboard.emailjs.com/) credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

**EmailJS setup steps:**

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template — use these variable names exactly:
   - `{{user_name}}` — sender's name
   - `{{user_email}}` — sender's email (set as Reply-To)
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Copy your Public Key from **Account → General**

## Customizing Your Data

All placeholder content lives in one file — **`src/data/portfolioData.js`**. Edit the named exports:

| Export             | What it controls                                 |
| ------------------ | ------------------------------------------------ |
| `personalInfo`     | Name, email, phone, social links, resume URL     |
| `heroData`         | Greeting, roles for typing animation, CTA labels |
| `aboutData`        | Bio paragraphs, stats, "What I do" cards         |
| `skillsData`       | Skill categories, icons, proficiency percentages |
| `projectsData`     | Project cards, links, tech stack, colors         |
| `experienceData`   | Work timeline entries                            |
| `educationData`    | Education cards                                  |
| `certificatesData` | Certificate cards with links                     |
| `testimonialsData` | Testimonial quotes and authors                   |

**Adding a resume PDF:** Drop your `resume.pdf` into the `public/` folder — the download button and navbar link will work automatically.

## Available Scripts

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy — the `vercel.json` SPA rewrite is already configured

### Netlify

1. Push to GitHub
2. Connect at [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`, publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. The `netlify.toml` redirect is already configured

## Project Structure

```
src/
├── assets/images/        # Image assets
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Skills, Projects, Experience,
│   │                     # Education, Certificates, Testimonials, Contact
│   └── ui/               # Reusable primitives (cards, badges, cursor, etc.)
├── context/
│   └── ThemeContext.jsx  # Dark/light mode state
├── data/
│   └── portfolioData.js  # ALL your content lives here
├── hooks/
│   ├── useScrollReveal.js
│   └── useScrollDirection.js
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT — feel free to use this as a template for your own portfolio.
