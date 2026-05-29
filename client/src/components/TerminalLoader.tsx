import { useState, useEffect } from "react";

const LINES = [
  "> Booting system...",
  "> Loading runtime: Next.js + TypeScript",
  "> Importing components... OK",
  "> Mounting interface... OK",
  "> Rendering portfolio... OK",
  "> Welcome, Toheeb Salaudeen.",
];

// How long each character takes to type in ms
const CHAR_DELAY = 35;
// Pause between lines in ms
const LINE_DELAY = 180;
// Pause after last line before fade out in ms
const EXIT_DELAY = 600;
// Fade out duration in ms — must match CSS transition
const FADE_DURATION = 800;

export default function TerminalLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineText, setCurrentLineText] = useState("");
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const wait = (ms: number) =>
      new Promise<void>(resolve => {
        setTimeout(resolve, ms);
      });

    const typeLines = async () => {
      for (let i = 0; i < LINES.length; i++) {
        const line = LINES[i];

        // Type each character
        for (let c = 0; c <= line.length; c++) {
          if (cancelled) return;
          setCurrentLineText(line.slice(0, c));
          await wait(CHAR_DELAY);
        }

        if (cancelled) return;

        // Commit the completed line and clear the active typing line
        setDisplayedLines(prev => [...prev, line]);
        setCurrentLineText("");

        // Pause before next line
        if (i < LINES.length - 1) {
          await wait(LINE_DELAY);
        }
      }

      // All lines done — pause then fade out
      await wait(EXIT_DELAY);
      if (cancelled) return;
      setFading(true);

      await wait(FADE_DURATION);
      if (cancelled) return;
      onComplete();
    };

    typeLines();

    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-[800ms] ease-out"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="w-full max-w-xl px-6 md:px-0">
        {/* Terminal window chrome */}
        <div className="border border-border rounded-sm overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-muted border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive opacity-80" />
            <span className="w-3 h-3 rounded-full bg-accent/40 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-accent opacity-80" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              bridgeware — terminal
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-card p-6 min-h-48 font-mono text-sm space-y-1">
            {/* Completed lines */}
            {displayedLines.map((line, idx) => (
              <p
                key={idx}
                className={
                  line.startsWith("> Welcome")
                    ? "text-accent neon-glow"
                    : line.endsWith("OK")
                      ? "text-accent/80"
                      : "text-muted-foreground"
                }
              >
                {line}
              </p>
            ))}

            {/* Currently typing line with blinking cursor */}
            {currentLineText !== "" || displayedLines.length < LINES.length ? (
              <p className="text-foreground">
                {currentLineText}
                <span className="terminal-cursor" />
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
