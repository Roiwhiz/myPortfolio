import { Card } from "@/components/ui/card";
import { Zap, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * About Page - Cyberpunk Minimalism
 * Personal narrative focused on journey and approach
 */

export default function About() {
  const ref = useScrollReveal();

  return (
    <div id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-accent/10 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-40 left-5 w-48 h-48 border-2 border-accent/5 rounded-lg opacity-10 animate-spin" style={{ animationDuration: '40s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="animate-fadeInUp mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-underline inline-block">
            How I Got Here
          </h2>
        </div>

        {/* Main Narrative */}
        <div className="max-w-4xl space-y-8 mb-20">
          {/* Section 1: The Wall */}
          <div ref={ref} className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-4 text-accent">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My journey into tech did not start with code. In 2023, the same year I gained admission into Obafemi Awolowo University to study International Relations, I was teaching myself digital marketing in parallel — working through Google's certification courses and YouTube tutorials, learning SEO, SEM, and content strategy with genuine intent to build something from it.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Then I hit a wall. The tools that serious digital marketing requires — SEO platforms, paid ad dashboards, SEM suites — all sit behind paywalls I could not afford. After a year of learning, the path forward was blocked not by ability but by financial access. That was a frustrating place to be.
            </p>
          </div>

          {/* Section 2: The WhatsApp Tutorial */}
          <div ref={ref} className="animate-fadeInUp p-8 bg-muted/10 border border-accent/20 rounded-sm" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2">
              <ArrowRight size={24} />
              The Turning Point
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              In mid-2024, after my first year at university, one of my residential mates shared a web development tutorial in a WhatsApp group. I opened it without much expectation. It made an impression that is difficult to overstate. Something about the directness of it — the idea that you could build something real and functional using nothing but a computer and a browser — clicked in a way that digital marketing never fully had.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              I finished the tutorial and kept going. Udemy courses, then YouTube, then documentation. No bootcamp, no formal CS background, no structured curriculum. Just consistent self-directed learning every day alongside a full academic load.
            </p>
          </div>

          {/* Section 3: Where I Am Now */}
          <div ref={ref} className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-4 text-accent">Where I Am Now</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Since mid-2024 I have gone from that first tutorial to building and deploying production-grade full-stack applications — complex backend architectures, AI agent systems, multi-language frontends, real database design. The stack I work with daily is Next.js, TypeScript, Node.js, PostgreSQL, and Prisma, with experience integrating AI APIs, third-party data sources, and cloud deployment platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              I am a self-taught developer and someone who builds things across domains — from geopolitical intelligence tools to general-purpose web applications. The through-line is not the subject matter. It is the approach: understand the problem deeply, design before you build, and ship something that actually works.
            </p>
          </div>
        </div>

        {/* Core Strengths */}
        <div ref={ref} className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-8 text-accent flex items-center gap-2">
            <Zap size={24} />
            What I Bring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-200 ease-out">
              <h4 className="font-bold mb-3 text-accent">Full-Stack Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Design and implement scalable systems from database schema to user interface, with focus on performance and maintainability.
              </p>
            </Card>
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-200 ease-out">
              <h4 className="font-bold mb-3 text-accent">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                Break down complex requirements into manageable components and deliver pragmatic solutions under constraints.
              </p>
            </Card>
            <Card className="bg-card border-border p-6 hover:border-accent/50 transition-all duration-200 ease-out">
              <h4 className="font-bold mb-3 text-accent">Self-Directed Learning</h4>
              <p className="text-sm text-muted-foreground">
                Rapid skill acquisition through consistent learning and hands-on building. I don't wait for permission to start.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
