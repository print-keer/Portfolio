import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppShell } from "./components/portfolio-ui";
import { portfolioData } from "./portfolioData";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import AIInnovationPage from "./pages/AIInnovationPage";
import BeyondCodePage from "./pages/BeyondCodePage";
import ContactPage from "./pages/ContactPage";
import { routeSequence } from "./site";

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.target instanceof HTMLElement) {
        const tagName = event.target.tagName.toLowerCase();
        if (["input", "textarea", "select"].includes(tagName)) {
          return;
        }
      }

      const currentIndex = routeSequence.indexOf(location.pathname);
      if (currentIndex === -1) {
        return;
      }

      if (event.key === "ArrowRight" && currentIndex < routeSequence.length - 1) {
        navigate(routeSequence[currentIndex + 1]);
      }

      if (event.key === "ArrowLeft" && currentIndex > 0) {
        navigate(routeSequence[currentIndex - 1]);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [location.pathname, navigate]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <AppShell theme={theme} onToggleTheme={toggleTheme} contact={portfolioData.contact}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/ai-innovation" element={<AIInnovationPage />} />
          <Route path="/beyond-code" element={<BeyondCodePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  );
}

export default AppRoutes;
