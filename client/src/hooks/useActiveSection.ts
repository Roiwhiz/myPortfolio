import { useEffect, useState, RefObject } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

function getActiveSection(navHeight: number): string {
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= navHeight + 10 && rect.bottom >= navHeight) {
        return section;
      }
    }
  }
  return "home";
}

export function useActiveSection(navRef: RefObject<HTMLElement | null>) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight ?? 0;
    setActiveSection(getActiveSection(navHeight));
    const handleScroll = () => {
      setActiveSection(getActiveSection(navHeight));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navRef]);

  return { activeSection, setActiveSection };
}
