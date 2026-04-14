# Keerthi Manoja Potluri Portfolio

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

This repository contains the source code for a recruiter-focused portfolio website that highlights AI/ML work, automation engineering, developer productivity work, experience, projects, certifications, and contact information.

## What This Project Includes

- Clean modern single-page portfolio layout
- Dark and light mode toggle
- Framer Motion animations for section reveals and UI transitions
- Timeline-style experience section
- Project cards with tech stack tags
- Dedicated AI Work section to highlight AI and developer productivity contributions
- Recruiter-friendly hero section and summary blocks
- Responsive layout for desktop, tablet, and mobile
- Resume download button

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Project Structure

```text
Portfolio/
├─ public/
│  └─ Keerthi-Manoja-Potluri-Resume.pdf
├─ src/
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ portfolioData.js
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

## Important Files

### `src/App.jsx`

Contains the full portfolio UI:

- hero section
- about section
- skills section
- experience timeline
- projects section
- AI work spotlight
- certifications section
- contact section
- theme toggle logic
- Framer Motion animations

### `src/portfolioData.js`

This is the main content file. Update this file whenever you want to change:

- name
- title
- contact details
- about section
- skills
- experience
- projects
- AI work content
- education
- certifications
- achievements

If you want to refresh portfolio content later, this is the first file to edit.

### `src/index.css`

Contains:

- Tailwind CSS import
- dark mode variant configuration
- font setup
- global styles
- theme-level font definitions

### `public/Keerthi-Manoja-Potluri-Resume.pdf`

This file is used by the "Download Resume" button.

Replace the placeholder file with your actual PDF resume while keeping the same filename, or update the download link in `src/App.jsx`.

## Current Personalization To Finish

Before the portfolio is fully production-ready, update these placeholders:

1. Add your real GitHub profile URL in `src/portfolioData.js`
2. Add your real LinkedIn profile URL in `src/portfolioData.js`
3. Replace the placeholder resume PDF in `public/Keerthi-Manoja-Potluri-Resume.pdf`

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Build Verification

The project has already been verified successfully with:

```bash
npm run build
```

## Design Notes

This portfolio was designed to feel:

- clean
- minimal
- professional
- modern
- recruiter-friendly

The visual direction uses:

- soft gradient backgrounds
- glass-style cards
- bold typography
- cyan/orange accent contrast
- strong section hierarchy
- clear content grouping

## Future Update Guide

### If you want to add a new project

Add a new object inside the `projects` array in `src/portfolioData.js`.

### If you want to add a new job experience

Add a new object inside the `experience` array in `src/portfolioData.js`.

### If you want to update certifications

Edit the `certifications` array in `src/portfolioData.js`.

### If you want to change styling

Update:

- `src/App.jsx` for layout and component structure
- `src/index.css` for global styles and font/theme setup

### If you want to change colors

Search for utility classes in `src/App.jsx`, especially:

- `cyan-*`
- `orange-*`
- `slate-*`

## Notes

- This project uses a single-page structure for simplicity and fast recruiter scanning.
- Dark mode preference is saved in `localStorage`.
- The GitHub and LinkedIn cards are already wired in and will become active once real links are added.

## Repository Setup Notes

This project was prepared locally by:

1. creating a Vite + React portfolio app structure
2. adding Tailwind CSS and Framer Motion
3. building the portfolio UI from the provided resume data
4. adding a `.gitignore`
5. documenting the project for future maintenance
6. verifying the production build

## Next Recommended Improvement

The next best enhancement would be adding:

- live project/demo links
- GitHub repository links for projects
- a profile photo or personal brand mark
- deployment on Vercel, Netlify, or GitHub Pages
