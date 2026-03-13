# AS SIDDIQI POHAN - Portfolio Website

Modern personal portfolio website built with React + Vite + Tailwind CSS, featuring a tech-minimalist UI, dark mode by default, and responsive layout for mobile to desktop.

## Repository Description (GitHub About)

Informatics Engineering student portfolio showcasing fullstack, Android, and machine learning projects. Built with React, Tailwind CSS, and modern responsive UI patterns.

## Live Focus

- Highlight technical profile and featured projects
- Show grouped skills, experience timeline, and leadership
- Provide direct contact form UI and social links

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React (icons)

## Main Features

- Dark mode default + light/dark toggle
- Smooth scrolling navigation
- Hero section with typewriter animation
- Scroll reveal animations using Intersection Observer
- Responsive layout (mobile-first)
- Centralized editable content via `src/data.js`

## Project Structure

```bash
src/
	components/
		Footer.jsx
		Navbar.jsx
		ProjectCard.jsx
		SectionTitle.jsx
		ThemeToggle.jsx
	hooks/
		useScrollAnimation.js
		useTypewriter.js
	sections/
		About.jsx
		Contact.jsx
		Experience.jsx
		Hero.jsx
		Projects.jsx
		Skills.jsx
	data.js
	App.jsx
	index.css
```

## Getting Started

### 1. Clone repository

```bash
git clone https://github.com/Asddqphn1/web-portofolio.git
cd web-portofolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open: http://localhost:5173/

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Customization

Most portfolio content is centralized in:

- `src/data.js`

Edit this file to update:

- Identity and hero text
- Projects and links
- Skills
- Experience timeline
- Social/contact links

## Contact

- LinkedIn: https://www.linkedin.com/in/as-siddiqi-pohan-394b31312
- GitHub: https://github.com/Asddqphn1
- Instagram: https://www.instagram.com/diqqipohan
- Email: pdiqqi@gmail.com

## License

This project is open for personal branding and learning purposes.
