# Toheeb Salaudeen — Geopolitical Intelligence Portfolio

A high-performance, visually distinctive portfolio website showcasing 10 geopolitical intelligence projects. Built with React 19, TypeScript, Tailwind CSS 4, and Vite. Features a cyberpunk minimalism design aesthetic with scroll-triggered animations, smooth navigation, and a fully functional contact form.

**Live Site:** [Portfolio](https://salaudeen-portfolio.vercel.app)  
**GitHub:** [Roiwhiz](https://github.com/Roiwhiz)

---

## 🎨 Design Philosophy

**Cyberpunk Minimalism:**
- Pure black background (`#000000`) with neon green accent color (`#00FF41`)
- Monospace typography: **JetBrains Mono** (headings) + **Fira Code** (body)
- Asymmetric layouts with sharp borders and minimal noise
- Terminal-inspired aesthetic leveraging the intersection of form and function
- Scroll-triggered reveal animations using Intersection Observer
- High contrast for accessibility and visual impact

---

## 🛠 Tech Stack

### **Frontend**
- **React 19** — Modern React with hooks and concurrent features
- **TypeScript** — Type-safe development
- **Vite 7** — Lightning-fast build tool and dev server
- **Tailwind CSS 4** — Utility-first CSS with JIT compilation
- **shadcn/ui** — High-quality, accessible component library
- **Wouter** — Lightweight, React-first client-side router
- **Framer Motion** — Performant animations and micro-interactions
- **Sonner** — Toast notifications
- **Lucide React** — Crisp, minimal SVG icons

### **Development**
- **TypeScript** — Static type checking
- **Prettier** — Code formatting
- **PostCSS + Autoprefixer** — CSS vendor prefixes
- **Vite Plugins** — JSX location tracking, Tailwind integration

### **Deployment**
- **Vercel** — Edge deployment with automatic HTTPS
- **Node.js (v18+)** — Runtime environment

---

## 📦 Project Structure

```
salaudeen-portfolio/
├── client/                          # Frontend application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Main landing page with sections
│   │   │   ├── About.tsx           # About & background section
│   │   │   └── NotFound.tsx        # 404 page
│   │   ├── components/
│   │   │   ├── ErrorBoundary.tsx   # Error fallback UI
│   │   │   ├── TerminalLoader.tsx  # Loading screen
│   │   │   ├── ui/                 # shadcn/ui components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   └── ...
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx    # Dark/light theme management
│   │   ├── hooks/
│   │   │   ├── useActiveSection.ts # Scroll spy for nav
│   │   │   ├── useScrollReveal.ts  # Scroll reveal animations
│   │   │   ├── useComposition.ts   # IME composition handling
│   │   │   └── usePersistFn.ts     # Stable function refs
│   │   ├── lib/
│   │   │   └── utils.ts            # cn() utility for className merging
│   │   ├── data/
│   │   │   └── projects.ts         # Project data (10 projects)
│   │   ├── App.tsx                 # Root component & routing
│   │   ├── main.tsx                # React DOM entry point
│   │   └── index.css               # Global styles & design tokens
│   ├── index.html                  # HTML template
│   └── public/                      # Static assets
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies & scripts
├── tailwind.config.ts              # Tailwind CSS configuration (implicit via Tailwind 4)
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org))
- **pnpm** 10.4.1+ (package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Roiwhiz/salaudeen-portfolio.git
   cd salaudeen-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   Opens at `http://localhost:5173`

---

## 📝 Available Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start Vite dev server with HMR |
| `pnpm build` | Build for production (`dist/public/`) |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

---

## 🎯 Features

### **Pages & Sections**

**Home Page (`/`)**
- Hero section with introduction and social links
- Navigation bar with smooth scroll-to-section
- Projects showcase (10 geopolitical intelligence projects)
- Skills breakdown by domain
- Contact form with validation and toast feedback
- Mobile-responsive design

**About Page (`/about` — embedded in Home)**
- Professional background and career narrative
- Key competencies and engineering depth
- Scroll-triggered reveal animations

**404 Page (`/404`)**
- Custom not-found page with home navigation

### **Interactive Elements**

- **Scroll Spy Navigation** — Highlights active section in navbar
- **Scroll Reveal** — Elements fade in as they enter viewport
- **Smooth Scrolling** — Anchor navigation with easing
- **Form Validation** — Required field checks before submission
- **Toast Notifications** — Success/error feedback on contact form
- **Responsive Design** — Mobile-first breakpoints (sm, md, lg)
- **Dark Mode** — Cyberpunk dark theme (light mode available)
- **Terminal Loader** — Stylized loading screen on initial load

### **Project Showcase**

Each project card displays:
- **Title** & **Status** (Built / In Development)
- **Description** — Problem-driven narrative
- **Tech Stack** — Technologies used
- **Action Links** — GitHub (code) and Live (deployment) buttons

Featured projects:
1. **GeoWatch** — Autonomous geopolitical intelligence agent
2. **Conflict Data Dashboard** — Real-time conflict visualization
3. **UN Resolutions Search Engine** — Vector-based RAG system
4. **Sanctions Tracker** — Multi-jurisdiction aggregation
5. **Trade Flow Visualiser** — Bilateral trade analysis
6. **Multilingual News Aggregator** — Multi-language narrative comparison
7. **Treaty Database** — Full-text searchable treaty collection
8. **Country Risk Intelligence Brief Generator** — Automated risk assessment
9. **Refugee and Displacement Tracker** — Humanitarian data platform
10. **UN General Assembly Voting Tracker** — Geopolitical alignment network

---

## 🎨 Customization Guide

### **Color Scheme**

Edit [client/src/index.css](client/src/index.css) to customize colors:

```css
:root {
  --primary: #00ff41;                /* Accent color (neon green) */
  --primary-foreground: #000000;
  --background: #000000;             /* Page background */
  --foreground: #ffffff;             /* Text color */
  --card: #0a0a0a;                   /* Card background */
  --accent: #00ff41;                 /* Highlights & buttons */
  --border: #1a1a1a;                 /* Borders */
  /* ... */
}
```

### **Typography**

Fonts are imported in [client/index.html](client/index.html):

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

To change fonts:
1. Update the Google Fonts URL
2. Modify `font-family` classes in Tailwind utilities

### **Project Data**

Edit [client/src/data/projects.ts](client/src/data/projects.ts):

```typescript
export const projects = [
  {
    title: "Your Project",
    status: "Built", // or "In Development"
    description: "Project description...",
    tech: ["React", "TypeScript", "..."],
    github: "https://github.com/username/repo",
    live: "https://your-project.com", // or "#" if no live demo
  },
  // Add more projects...
];
```

### **Contact Form**

The form in [client/src/pages/Home.tsx](client/src/pages/Home.tsx) currently logs to toast notifications. To integrate with a backend:

```typescript
const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      toast.success("Message sent!");
    }
  } catch (error) {
    toast.error("Failed to send message");
  }
};
```

### **Social Links**

Update in [client/src/pages/Home.tsx](client/src/pages/Home.tsx):

```typescript
const socialLinks = [
  { icon: Github, url: "https://github.com/your-username", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: Mail, url: "mailto:your-email@example.com", label: "Email" },
];
```

---

## 🚢 Deployment

### **Deploy to Vercel (Recommended)**

1. Push code to GitHub:
   ```bash
   git push origin main
   ```

2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
   - Framework: **Other** (Vite)
   - Build Command: `pnpm build`
   - Output Directory: `dist/public`

3. Set environment variables (if needed):
   - `VITE_ANALYTICS_ENDPOINT` (optional, for analytics)

4. Deploy — Vercel auto-deploys on push to main

### **Deploy to Railway**

1. Create Railway project
2. Connect GitHub repository
3. Set environment:
   - Root Directory: `.`
   - Build Command: `pnpm build`
   - Start Command: `pnpm preview`

4. Deploy

### **Build & Preview Locally**

```bash
pnpm build        # Creates dist/ folder
pnpm preview      # Serve built files locally
```

---

## 🔍 Key Technologies Explained

### **React 19**
Latest React with automatic batching, transitions, and improved developer experience. Enables concurrent rendering for smooth animations without blocking the UI thread.

### **Vite**
Extreme speed through:
- Native ES modules during development (no bundling)
- Lightning-fast Hot Module Replacement (HMR)
- Optimized production builds with esbuild

### **Tailwind CSS 4**
Utility-first CSS framework with:
- **JIT (Just-in-Time) compilation** — Only ship CSS for utilities you use
- **Design tokens** — Consistent spacing, colors, typography
- **Dark mode support** — Built-in theme switching
- **Responsive utilities** — Mobile-first design

### **shadcn/ui**
Copy-paste component library (not npm packages):
- **Customizable** — Modify components directly in your codebase
- **Accessible** — Built on Radix UI primitives (WCAG compliant)
- **Type-safe** — Full TypeScript support
- **Lightweight** — Only bundle components you use

### **Wouter**
Lightweight alternative to React Router:
- **Small bundle size** (~2KB gzipped)
- **Simple API** — `<Route>`, `<Link>`, `useLocation()`
- **No nested routing complexity** — Perfect for portfolios and SPAs

---

## 📱 Responsive Design

Built mobile-first with Tailwind breakpoints:
- **Mobile**: Base styles (default)
- **Tablet** (`md:`): Medium screens and up
- **Desktop** (`lg:`): Large screens and up

Key responsive elements:
- Navigation collapses to hamburger on mobile
- Project grid: 1 column (mobile) → 2 columns (desktop)
- Font sizes scale with `text-lg`, `text-xl`, `text-2xl`, etc.
- Spacing adjusts with `p-4 md:p-6 lg:p-8` patterns

---

## 🎭 Animation & Motion

Animations use two approaches:

### **CSS Transitions** (Recommended for UI)
```css
transition-all duration-200 ease-out
```
For button hovers, state changes, and quick feedback.

### **Scroll Reveal** (useScrollReveal hook)
Uses Intersection Observer to trigger animations as elements enter viewport:
```typescript
const ref = useScrollReveal();
<section ref={ref} className="animate-fadeInUp">
```

### **Framer Motion** (Optional)
Available for complex sequences but not required for this portfolio.

---

## 🔐 Accessibility

- **Semantic HTML** — Proper heading hierarchy, `<section>`, `<nav>`
- **Focus Management** — Visible focus rings on interactive elements
- **Color Contrast** — WCAG AA compliant (white on black)
- **Keyboard Navigation** — All interactive elements accessible via Tab
- **Alt Text** — Image descriptions where applicable
- **ARIA Labels** — Form fields have associated labels

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port
pnpm dev -- --port 3000
```

### TypeScript Errors After Changes
```bash
pnpm check
```

### Build Output Missing CSS
Ensure Tailwind config is detected:
```bash
pnpm build --debug
```

### Browser Not Reflecting Changes
Clear browser cache and restart dev server:
```bash
pnpm dev
# Then Ctrl+Shift+Delete in browser (hard refresh)
```

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Wouter Router](https://github.com/molefrog/wouter)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📄 License

MIT License — Feel free to use this portfolio as a template for your own projects.

---

## 🤝 Contributing

This is a personal portfolio, but improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact

- **GitHub:** [@Roiwhiz](https://github.com/Roiwhiz)
- **LinkedIn:** [Toheeb Salaudeen](https://www.linkedin.com/in/toheeb-salaudeen-83b2382a6/)
- **Email:** hello@example.com (update with your email)

---

## 🎯 Future Enhancements

Potential additions:
- [ ] Blog section with MDX support
- [ ] Analytics dashboard integration
- [ ] Dark/light theme toggle UI
- [ ] Newsletter signup
- [ ] Project filtering by tech stack
- [ ] Case studies with deep dives
- [ ] PDF resume download

---

**Built with precision. Designed for impact.**

*Last updated: May 2026*
