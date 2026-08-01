# Nilesh Kumar — Portfolio

My personal developer portfolio — built to showcase full-stack projects, technical skills, and achievements, with a focus on AI-integrated web applications.

**Live Site:** [your-live-portfolio-url.com](#) <!-- TODO: paste your deployed URL -->

---

## ✨ Overview

A responsive, animated single-page portfolio built with React + Vite and Tailwind CSS, featuring:

- Smooth scroll-spy navigation with an animated active-link indicator
- Light/dark theme toggle
- Framer Motion scroll-reveal and hover micro-interactions throughout
- A projects showcase with live demo & source links
- A skills grid organized by category
- A "Why Me" section with fast facts, highlights, and certifications
- Fully responsive — mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| **Framework** | React, Vite |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Routing / Scroll** | Custom `useScrollSpy` hook, native anchor scrolling |

---

## 📂 Project Structure

```
src/
├── assets/
│   └── images/
│       ├── hero.png
│       ├── picofme.png
│       └── projects/          # project screenshots
├── components/
│   ├── layout/
│   │   └── Navbar.jsx
│   ├── projects/
│   │   └── ProjectChecklistItem.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── WhySection.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       └── SectionHeading.jsx
├── data/
│   ├── achievements.js
│   ├── personalInfo.js
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useScrollSpy.js
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

---

## 🧩 Featured Projects

| Project | Description | Stack |
|---|---|---|
| **[Medixthon](#)** | Full-stack AI-driven hospital management system with 3 role-based portals and Gemini AI features (Symptom Analyzer, Medicine Scanner, Lab Report Analyzer). | React, Node.js, Express, MongoDB, Clerk, Gemini AI, Stripe, Cloudinary |
| **[AI SaaS Customer Support Chatbot](#)** | Multi-tenant AI chatbot SaaS with an embeddable JS widget for automated customer support. | Next.js, MongoDB, Scalekit, Gemini API, Vercel |
| **[Krishi Sakhi](#)** | AI-powered farming assistant with multilingual voice support — **National Winner, Smart India Hackathon 2025** among 10,000+ teams. | React.js, Node.js, Express.js, MongoDB, Gemini API, ElevenLabs, Twilio |
| **[Talkie](https://github.com/NILESH2327/Talkie)** | Real-time MERN chat application with Socket.IO — instant messaging, live presence, and image sharing. | React, Vite, Node.js, Express, MongoDB, Socket.IO, JWT |

> Replace the `#` links above with your live demo URLs once deployed.

---

---

- **Portfolio:** [your-live-portfolio-url.com](#)
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
