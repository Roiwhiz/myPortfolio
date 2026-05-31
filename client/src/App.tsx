import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useState } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import TerminalLoader from "./components/TerminalLoader";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        {loading && <TerminalLoader onComplete={() => setLoading(false)} />}
        <Router />
        <Analytics />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
