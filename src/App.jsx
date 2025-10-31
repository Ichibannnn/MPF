import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Download,
  Home,
  Briefcase,
  FileText,
} from "lucide-react";

import profileImage from "./assets/profile.jpeg";

import mis1 from "./assets/mis1.png";
import mis2 from "./assets/mis2.png";
import mis3 from "./assets/mis3.png";
import mis4 from "./assets/mis4.png";
import mis5 from "./assets/mis5.png";
import mis6 from "./assets/mis6.png";
import mis7 from "./assets/mis7.png";
import mis8 from "./assets/mis8.png";
import mis9 from "./assets/mis9.png";

const projects = [
  {
    id: 1,
    title: "MIS Helpdesk",
    description:
      "A Ticketing Management System for Management Information System department.",
    images: [mis1, mis2, mis3, mis4, mis5, mis6, mis7, mis8, mis9],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Elixir ETD",
    description:
      "Project for Engineering and Technical Department (ETD) warehouse that keep tracks and manages all transactions from receiving to dispatching of materials.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    ],
    tags: ["Python", "TensorFlow", "React", "D3.js"],
  },
  {
    id: 3,
    title: "Elixir M&S (Feedmill)",
    description:
      "Project for Materials & Supplies warehouse that keep tracks and manages all transactions from receiving to dispatching of materials.",
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    ],
    tags: ["React Native", "Firebase", "Redux"],
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Tailwind",
  "shadcn/ui",
  // "Nuxt",
  // "Astro",
  "Node",
  // "Bun",
  // "Workers",
  "Postgres",
  // "MongoDB",
  // "Redis",
  // "Supabase",
  // "Fastify",
  "Hono",
  "Vite",
  // "Turborepo",
  "Docker",
  "Git",
  "GitHub",
  // "Payload",
  // "Sanity",
  // "ChatGPT",
  // "AG Grid",
  // "Mapbox",
  "Figma",
];

const workHistory = [
  {
    title: "Junior Software Developer",
    company: "RDF Feed, Livestock & Foods, Inc.",
    location: "Brgy. Lara, City of San Fernando, Pampanga",
    type: "Full-Time",
    period: "February 2024 - Present",
    achievements: [
      "Led the front-end work from the project inception.",
      "Maintained a browser extension, widget and web application as a monorepo.",
      "Architected a highly complex real-estate map service.",
      "Implemented a sophisticated data grid of property comparables.",
    ],
  },
  {
    title: "Entry Level Software Developer",
    company: "RDF Feed, Livestock & Foods, Inc.",
    location: "Brgy. Lara, City of San Fernando, Pampanga",
    type: "Full-Time",
    period: "August 2022 - January 2024",
    achievements: [
      "Was solving complex problems using the latest Web Standards.",
      "Architected the product's front-end structure.",
      "Accomplished the development of sophisticated UI components.",
      "Developed the open-source component library.",
      "Crafted responsive marketing landing pages.",
    ],
  },
  // {
  //   title: "Senior Front-end Engineer",
  //   company: "Casago",
  //   location: "🇺🇸 United States",
  //   type: "Full-Time",
  //   period: "Oct 2021 - Apr 2022",
  //   achievements: [
  //     "Joined the new company after Nokori's acquisition.",
  //     "Helped to adapt and embed the new assets into the franchise ecosystem.",
  //     "Developed the ground for the new property analytics project.",
  //   ],
  // },
];

function ProjectCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "280px",
        overflow: "hidden",
        borderRadius: "12px 12px 0 0",
      }}
    >
      <img
        src={images[currentIndex]}
        alt={`Project slide ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease",
        }}
      />
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          color: "white",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
        }
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          color: "white",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
        }
      >
        <ChevronRight size={24} />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: idx === currentIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                idx === currentIndex ? "#faa414" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#071021",
        color: "white",
        position: "relative",
        overflow: "hidden",
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
      }}
    >
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .zigzag {
          width: 60px;
          height: 4px;
          background: repeating-linear-gradient(
            135deg,
            #faa414 0px,
            #faa414 5px,
            transparent 5px,
            transparent 10px
          );
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(10, 25, 47, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          zIndex: 1000,
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "800",
              color: "#faa414",
            }}
          >
            {/* //Ichiban */}
          </div>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {[
              { id: "home", label: "Home", icon: <Home size={18} /> },
              {
                id: "projects",
                label: "Projects",
                icon: <Briefcase size={18} />,
              },
              { id: "resume", label: "Resume", icon: <FileText size={18} /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: activeSection === item.id ? "#faa414" : "#8892b0",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "color 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#faa414")}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = "#8892b0";
                  }
                }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: "80px" }}>
        {/* Hero Section */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 24px",
              textAlign: "center",
              animation: "scaleIn 0.8s ease-out",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "4px solid #faa414",
                boxShadow: "0 0 60px rgba(251, 191, 36, 0.3)",
                objectFit: "cover",
                marginBottom: "32px",
              }}
            />

            <h1
              style={{
                fontSize: "56px",
                fontWeight: "800",
                margin: "0 0 16px 0",
                color: "#faa414",
                letterSpacing: "-0.02em",
              }}
            >
              Gib Ibanson Pangilinan
            </h1>

            <p
              style={{
                fontSize: "24px",
                color: "#8892b0",
                marginBottom: "24px",
                fontWeight: "400",
              }}
            >
              Full Stack Developer & UI/UX Enthusiast
            </p>

            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 40px",
                color: "#8892b0",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              I'm a Software Developer with more than 3 years of experience in
              building web applications. Passionate about creating beautiful,
              functional experiences using modern technologies.
            </p>

            <div
              style={{ display: "flex", gap: "16px", justifyContent: "center" }}
            >
              {[
                {
                  icon: <Github size={24} />,
                  link: "https://github.com/Ichibannnn",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={24} />,
                  link: "https://www.linkedin.com/in/gib-ibanson-pangilinan-5a3098193/?trk=opento_sprofile_pfeditor",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={24} />,
                  link: "ichipangilinan2@gmail.com",
                  label: "Email",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    border: "1px solid rgba(251, 191, 36, 0.2)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    color: "#8892b0",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(251, 191, 36, 0.1)";
                    e.currentTarget.style.color = "#faa414";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.color = "#8892b0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          style={{
            minHeight: "100vh",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "48px",
                color: "#ccd6f6",
              }}
            >
              Featured Projects
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "32px",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s",
                    animation: `fadeIn 0.6s ease-out ${
                      index * 0.15
                    }s backwards`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "#faa414";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <ProjectCarousel images={project.images} />

                  <div style={{ padding: "28px" }}>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        color: "#ccd6f6",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        color: "#8892b0",
                        marginBottom: "20px",
                        lineHeight: "1.6",
                        fontSize: "14px",
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "6px 12px",
                            background: "rgba(251, 191, 36, 0.1)",
                            color: "#faa414",
                            borderRadius: "6px",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          style={{
            minHeight: "100vh",
            padding: "80px 24px",
            background: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "24px",
                color: "#ccd6f6",
              }}
            >
              My Resume / CV
            </h2>

            <p
              style={{
                color: "#8892b0",
                lineHeight: "1.8",
                marginBottom: "16px",
              }}
            >
              I'm a highly skilled full-stack engineer with more than 8 years of
              experience in building web applications. On this page, you can
              learn more about my knowledge stack and my previous work
              experience.
            </p>

            <div className="zigzag" style={{ marginBottom: "48px" }} />

            {/* Skills */}
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "16px",
                color: "#ccd6f6",
              }}
            >
              Skills
            </h3>

            <p
              style={{
                color: "#8892b0",
                lineHeight: "1.8",
                marginBottom: "24px",
              }}
            >
              Here are the frameworks, libraries, services and runtimes I have
              experience with. This is not a complete list! I'm constantly
              gaining new skills, and hence it can be a little bit outdated.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "48px",
              }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#8892b0",
                    borderRadius: "6px",
                    fontSize: "14px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#faa414";
                    e.currentTarget.style.color = "#faa414";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.color = "#8892b0";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Work History */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#ccd6f6",
                }}
              >
                Work History
              </h3>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: "rgba(251, 191, 36, 0.1)",
                  border: "1px solid #faa414",
                  borderRadius: "8px",
                  color: "#faa414",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#faa414";
                  e.currentTarget.style.color = "#071021";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(251, 191, 36, 0.1)";
                  e.currentTarget.style.color = "#faa414";
                }}
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>

            <p
              style={{
                color: "#8892b0",
                lineHeight: "1.8",
                marginBottom: "32px",
              }}
            >
              Below you will find a summary of my past employment experience.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              {workHistory.map((job, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    paddingLeft: "32px",
                    borderLeft: "2px solid rgba(251, 191, 36, 0.3)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-6px",
                      top: "8px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#faa414",
                      boxShadow: "0 0 0 4px #071021",
                    }}
                  />

                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#ccd6f6",
                      marginBottom: "8px",
                    }}
                  >
                    {job.title}
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "8px",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#faa414", fontWeight: "600" }}>
                      {job.company}
                    </span>
                    <span style={{ color: "#8892b0" }}>•</span>
                    <span style={{ color: "#8892b0" }}>{job.location}</span>
                    <span style={{ color: "#8892b0" }}>•</span>
                    <span style={{ color: "#8892b0" }}>{job.type}</span>
                  </div>

                  <p
                    style={{
                      color: "#8892b0",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    {job.period}
                  </p>

                  <ul
                    style={{
                      color: "#8892b0",
                      lineHeight: "1.8",
                      paddingLeft: "20px",
                    }}
                  >
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ marginBottom: "8px" }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "60px",
                padding: "24px",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "8px",
                borderTop: "2px solid #faa414",
                textAlign: "center",
                color: "#8892b0",
                fontSize: "14px",
              }}
            >
              © 2025 Built with ❤️ by Ichiban
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
