// src/components/Portfolio/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import resumePdf from "../../assets/resume.pdf";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});

  useEffect(() => {
    const ids = ["home", "projects", "resume"];
    ids.forEach(
      (id) => (sectionsRef.current[id] = document.getElementById(id))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        resumeUrl={resumePdf}
      />
      <main style={{ paddingTop: 72 }}>
        <section id="home">
          <HeroSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="resume">
          <ResumeSection resumeUrl={resumePdf} />
        </section>
      </main>
    </ThemeProvider>
  );
}
