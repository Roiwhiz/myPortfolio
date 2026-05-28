import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-8xl font-bold neon-glow mb-6">404</p>

        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>

        <p className="text-muted-foreground font-mono text-sm mb-12 max-w-sm">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50 font-semibold transition-all duration-200 ease-out rounded-sm"
        >
          <Home size={18} />
          Go Home
        </button>
      </div>
    </div>
  );
}
