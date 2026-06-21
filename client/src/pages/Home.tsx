import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Mail,
  Code2,
  GitBranch,
  Menu,
  X,
  Linkedin,
  ArrowUp,
  Globe,
  Clock,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects as projectsData } from "@/data/projects";
import About from "./About";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FrameworkGroup {
  frontend: string[];
  backend: string[];
}

interface DevToolGroup {
  ide: string[];
  apiTesting: string[];
  databaseTools: string[];
  versionControl: string[];
  packageManagers: string[];
  codeQuality: string[];
  debugging: string[];
  testing: string[];
  containers: string[];
}

interface Skills {
  languages: string[];
  frameworks: FrameworkGroup;
  databaseAndOrm: string[];
  stateAndData: string[];
  validation: string[];
  designSystem: string[];
  aiAndSearch: string[];
  localization: string[];
  infrastructure: string[];
  developmentTools: DevToolGroup;
}

// ─── Label maps ──────────────────────────────────────────────────────────────

const SKILL_LABELS: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks",
  databaseAndOrm: "Database & ORM",
  stateAndData: "State & Data",
  validation: "Validation",
  designSystem: "Design System",
  aiAndSearch: "AI & Search",
  localization: "Localization",
  infrastructure: "Infrastructure",
};

const DEV_TOOL_LABELS: Record<string, string> = {
  ide: "IDE",
  apiTesting: "API Testing",
  databaseTools: "Database Tools",
  versionControl: "Version Control",
  packageManagers: "Package Managers",
  codeQuality: "Code Quality",
  debugging: "Debugging",
  testing: "Testing",
  containers: "Containers",
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { activeSection, setActiveSection } = useActiveSection(navRef);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      const navHeight = navRef.current?.offsetHeight ?? 0;
      const top =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const projects = projectsData;

  const skills: Skills = {
    languages: ["TypeScript", "JavaScript"],
    frameworks: {
      frontend: ["Next.js", "React"],
      backend: ["Node.js", "Express"],
    },
    databaseAndOrm: ["PostgreSQL", "Prisma", "Redis"],
    stateAndData: ["React Query", "Zustand"],
    validation: ["Zod"],
    designSystem: ["Tailwind CSS", "shadcn/ui"],
    aiAndSearch: ["Gemini API", "Tavily Search API"],
    localization: ["next-intl (i18n)"],
    infrastructure: ["Vercel", "Render"],
    developmentTools: {
      ide: ["VS Code", "Cursor"],
      apiTesting: ["Postman"],
      databaseTools: ["Prisma Studio", "PgAdmin"],
      versionControl: ["Git", "GitHub"],
      packageManagers: ["npm", "pnpm"],
      codeQuality: ["ESLint", "Prettier"],
      debugging: ["Chrome DevTools", "React DevTools"],
      testing: ["Vitest", "Playwright"],
      containers: ["Docker"],
    },
  };

  // Core skills entries — everything except developmentTools
  const coreSkillEntries = (
    Object.entries(skills) as [keyof Skills, Skills[keyof Skills]][]
  ).filter(([key]) => key !== "developmentTools");

  const socialLinks = [
    { icon: Github, url: "https://github.com/Roiwhiz", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/toheeb-salaudeen-83b2382a6/",
      label: "LinkedIn",
    },
    {
      icon: X,
      url: "https://x.com/StackAndStat",
      label: "X (Twitter)",
    },
    { icon: Mail, url: "mailto:roiwhiz@gmail.com", label: "Email" },
  ];

  const projectsRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const devToolsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold neon-glow animate-glowPulse hover:opacity-80 transition-opacity"
          >
            TS
          </button>

          <div className="hidden md:flex gap-6 text-sm">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-200 ease-out relative group ${
                  activeSection === link.id
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    activeSection === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-accent hover:text-accent/80 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm animate-fadeInUp"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDuration: "200ms" }}
            />
            <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-40 md:hidden flex flex-col animate-slideInLeft shadow-2xl shadow-black/50">
              <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-card/95 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-accent">Navigation</h3>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left py-3 px-4 rounded-sm transition-all duration-200 ease-out ${
                      activeSection === link.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="sticky bottom-0 border-t border-border bg-card/95 backdrop-blur-sm p-4">
                <p className="text-xs text-muted-foreground mb-4 text-center">
                  Connect
                </p>
                <div className="flex gap-3 justify-center">
                  {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-muted hover:bg-accent/20 hover:text-accent border border-border hover:border-accent rounded-sm transition-all duration-200 ease-out"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen md:min-h-screen md:flex md:items-center md:justify-center overflow-hidden md:overflow-visible"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607561837/MoBa6NCCrY6EDtDsBXQgye/tech-stack-bg-DmRdkwo8BaTUTKs58UDwUX.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-1" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Toheeb
                <br />
                <span className="neon-glow">Salaudeen</span>
              </h1>
              <p className="text-3xl md:text-4xl text-accent font-mono mb-12 font-bold">
                Software Engineer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 font-semibold transition-all duration-200 ease-out rounded-sm"
                >
                  View My Work
                </button>
                <a
                  href="Toheeb_Salaudeen_Resume.pdf"
                  download="Toheeb_Salaudeen_Resume.pdf"
                  className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/30 font-semibold transition-all duration-200 ease-out rounded-sm text-center"
                >
                  Download CV
                </a>
              </div>
              <div className="flex gap-6">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted hover:bg-accent/10 hover:text-accent border border-border hover:border-accent rounded-sm transition-all duration-200 ease-out"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-lg animate-pulse" />
                <div
                  className="absolute top-10 right-10 w-32 h-32 border-2 border-accent/30 rounded-lg animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-accent/20 rounded-full animate-pulse" />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-accent/40 rounded-lg animate-spin"
                  style={{
                    animationDuration: "30s",
                    animationDirection: "reverse",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-16 h-16 text-accent/60 mx-auto mb-4 animate-bounce" />
                    <p className="text-sm text-muted-foreground font-mono">
                      Software
                    </p>
                    <p className="text-sm text-muted-foreground font-mono">
                      Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center min-h-[100dvh] px-4 py-8">
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, transparent 24%, rgba(0, 255, 65, 0.05) 25%, rgba(0, 255, 65, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, 0.05) 75%, rgba(0, 255, 65, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 65, 0.05) 25%, rgba(0, 255, 65, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 65, 0.05) 75%, rgba(0, 255, 65, 0.05) 76%, transparent 77%, transparent)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div
              className="absolute top-12 right-8 w-24 h-24 border-2 border-accent/20 rounded-lg animate-spin"
              style={{ animationDuration: "30s" }}
            />
            <div className="absolute bottom-24 left-4 w-16 h-16 border-2 border-accent/15 rounded-full animate-pulse" />
            <div
              className="absolute top-1/3 right-1/4 w-32 h-32 border border-accent/10 rounded-full animate-pulse"
              style={{ animationDuration: "4s" }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full">
              <div className="animate-fadeInUp mb-2">
                <h1 className="text-6xl font-bold leading-tight text-center">
                  Toheeb
                </h1>
              </div>
              <div
                className="animate-fadeInUp mb-6"
                style={{ animationDelay: "0.1s" }}
              >
                <h2 className="text-6xl font-bold text-center">
                  <span className="neon-glow">Salaudeen</span>
                </h2>
              </div>
              <div
                className="animate-fadeInUp mb-8"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="px-6 py-2 border border-accent/50 rounded-full bg-accent/5 backdrop-blur-sm">
                  <p className="text-lg text-accent font-mono font-bold tracking-wider">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div
                className="animate-fadeInUp mb-8"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-lg" />
                  <div
                    className="absolute top-2 right-2 w-12 h-12 border border-accent/40 rounded-lg animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                  <div className="absolute bottom-4 left-2 w-8 h-8 border border-accent/25 rounded-full animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-accent/50 animate-bounce" />
                  </div>
                </div>
              </div>
              <div
                className="animate-fadeInUp flex flex-col gap-3 w-full max-w-xs mb-8"
                style={{ animationDelay: "0.4s" }}
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 font-semibold transition-all duration-200 ease-out rounded-sm w-full uppercase tracking-wide text-sm"
                >
                  View My Work
                </button>
                <a
                  href="Toheeb_Salaudeen_Resume.pdf"
                  download="Toheeb_Salaudeen_Resume.pdf"
                  className="px-6 py-3 border border-accent text-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/30 font-semibold transition-all duration-200 ease-out rounded-sm w-full uppercase tracking-wide text-sm text-center"
                >
                  Download CV
                </a>
              </div>
              <div
                className="animate-fadeInUp flex gap-4"
                style={{ animationDelay: "0.5s" }}
              >
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/50 hover:bg-accent/20 hover:text-accent border border-accent/30 hover:border-accent rounded-sm transition-all duration-200 ease-out backdrop-blur-sm"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-bounce text-accent/60 mt-auto mb-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce text-accent">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="reveal py-20 bg-muted/20 border-t border-border"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-underline inline-block">
              <span className="hidden md:inline">Featured </span>Projects
            </h2>
            <p className="text-muted-foreground mx-auto">
              Production-grade applications spanning geopolitical intelligence,
              data visualization, and full-stack systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <Card className="bg-card border-border hover:border-accent transition-all duration-200 ease-out group overflow-hidden h-full">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-accent group-hover:text-foreground transition-all duration-200 ease-out">
                        {project.title}
                      </h3>
                      <span
                        className={`text-xs font-mono px-2 py-1 rounded-sm ${
                          project.status === "Built"
                            ? "bg-accent/10 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-muted text-xs font-mono border border-border text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.repo && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="gap-2">
                            <GitBranch size={16} />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                          >
                            <ExternalLink size={16} />
                            Live
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="reveal py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-underline inline-block">
              Technical Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Technologies and tools I work with regularly across the full
              stack.
            </p>
          </div>

          {/* Core skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {coreSkillEntries.map(([category, value], idx) => (
              <div key={category} style={{ animationDelay: `${idx * 0.1}s` }}>
                <Card className="bg-card border-border p-6 h-full">
                  <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                    <Code2 size={18} />
                    {SKILL_LABELS[category] ?? category}
                  </h3>

                  {/* Frameworks card — two sub-groups */}
                  {category === "frameworks" ? (
                    <div className="space-y-4">
                      {(
                        Object.entries(value as FrameworkGroup) as [
                          string,
                          string[],
                        ][]
                      ).map(([subKey, subItems]) => (
                        <div key={subKey}>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-2">
                            {subKey}
                          </p>
                          <ul className="space-y-1">
                            {subItems.map(item => (
                              <li
                                key={item}
                                className="text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // All other cards — flat string array
                    <ul className="space-y-2">
                      {(value as string[]).map(item => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            ))}
          </div>

          {/* Development Tools section */}
          <div ref={devToolsRef} className="reveal">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-accent">
                Development Tools
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {(
                Object.entries(skills.developmentTools) as [
                  keyof DevToolGroup,
                  string[],
                ][]
              ).map(([subKey, items]) => (
                <div key={subKey}>
                  <p className="text-xs uppercase tracking-widest text-accent/70 font-semibold mb-3">
                    {DEV_TOOL_LABELS[subKey]}
                  </p>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground font-mono"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="reveal py-28 bg-background border-t border-border relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight inline-block">
              Let&apos;s Connect
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-4 mb-6" />
            <p className="text-muted-foreground max-w-3xl text-base md:text-lg leading-relaxed">
              <span className="hidden md:inline">
                Reach out directly or find me on social platforms. I&apos;m
                always interested in discussing interesting problems,
                collaborations, and innovative ideas.
              </span>
              <span className="md:hidden">
                Let&apos;s connect and explore opportunities to collaborate on
                exciting projects!
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
              <div className="flex items-center gap-10 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 border border-accent/10 group-hover:scale-105 transition-transform duration-300">
                  <Mail size={26} className="text-accent" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground/80 font-semibold mb-2">
                    Email
                  </h3>
                  <div className="w-8 h-[2px] bg-accent rounded-full mb-3" />
                  <a
                    href="mailto:roiwhiz@gmail.com"
                    className="text-base text-foreground font-medium hover:text-accent transition-colors duration-200 font-mono break-all"
                  >
                    roiwhiz@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
              <div className="flex items-center gap-10 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 border border-accent/10 group-hover:scale-105 transition-transform duration-300">
                  <Globe size={26} className="text-accent" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground/80 font-semibold mb-2">
                    Location
                  </h3>
                  <div className="w-8 h-[2px] bg-accent rounded-full mb-3" />
                  <p className="text-base text-foreground/90 font-medium leading-relaxed">
                    Nigeria
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 hover:border-accent/40 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
              <div className="flex items-center gap-10 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 border border-accent/10 group-hover:scale-105 transition-transform duration-300">
                  <Clock size={26} className="text-accent" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground/80 font-semibold mb-2">
                    Response Time
                  </h3>
                  <div className="w-8 h-[2px] bg-accent rounded-full mb-3" />
                  <p className="text-base text-foreground/90 font-medium leading-relaxed">
                    Instant (I check messages daily)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 rounded-sm transition-all duration-200 ease-out animate-fadeInUp"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="py-12 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-base text-muted-foreground">
              © {new Date().getFullYear()} Toheeb Salaudeen. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-all duration-200 ease-out"
                  aria-label={label}
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
