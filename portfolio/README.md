# Omar Quinn — Data & BI Analyst Portfolio

A clean, recruiter-friendly portfolio built with **React + Vite + Tailwind CSS**, deployable to Vercel today.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Make it yours (5 minutes)

Almost everything lives in **`src/data/projects.js`**:

- `profile` — your name, positioning, tagline, email, GitHub, LinkedIn, résumé link.
- `skillGroups` — the skills shown on the homepage.
- `projects` — the three case studies (problem, objective, tools, KPIs, insights, recommendations, links).

To swap a dashboard image, open `src/pages/ProjectDetail.jsx` and replace the
`<DashboardPlaceholder />` with:

```jsx
<img src="/dashboards/churn.png" alt="Churn dashboard" className="card w-full" />
```

(Put the image in `public/dashboards/`.)

## Deploy to Vercel

**Option A — GitHub (recommended)**

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Confirm: Build `npm run build`, Output `dist`.
4. Click **Deploy**. Done — you get a live URL.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel        # follow prompts (accept Vite defaults)
vercel --prod # promote to production
```

`vercel.json` already routes all paths to `index.html` so deep links like
`/projects/customer-churn-revenue-risk` work on refresh.

## Project structure

```
omar-quinn-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── projects.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Skills.jsx
    │   ├── Section.jsx
    │   ├── Sparkline.jsx
    │   ├── ProjectCard.jsx
    │   ├── KPIGrid.jsx
    │   └── DashboardPlaceholder.jsx
    └── pages/
        ├── Home.jsx
        └── ProjectDetail.jsx
```
