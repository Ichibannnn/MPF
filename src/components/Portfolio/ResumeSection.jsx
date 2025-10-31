// src/components/Portfolio/ResumeSection.jsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { Download } from "lucide-react";
import { chipSx } from "./styles";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Zustand",
  "Redux",
  "Tailwind",
  "shadcn/ui",
  "Radix",
  "Vue",
  "Nuxt",
  "Astro",
  "Node",
  "Bun",
  "Workers",
  "Postgres",
  "MongoDB",
  "Redis",
  "Supabase",
  "Fastify",
  "Hono",
  "Vite",
  "Turborepo",
  "Docker",
  "Git",
  "GitHub",
  "Payload",
  "Sanity",
  "ChatGPT",
  "AG Grid",
  "Mapbox",
  "Figma",
];

const workHistory = [
  {
    title: "Lead Front-end Engineer",
    company: "Propbar",
    location: "United Kingdom",
    type: "Full-Time",
    period: "Mar 2023 - Present",
    achievements: [
      "Led the front-end work from the project inception.",
      "Maintained a browser extension, widget and web application as a monorepo.",
    ],
  },
  {
    title: "Senior Front-end Engineer",
    company: "LolaDB",
    location: "United States",
    type: "Contract",
    period: "Jun 2022 - Feb 2023",
    achievements: [
      "Architected the product's front-end structure.",
      "Developed the open-source component library.",
    ],
  },
];

export default function ResumeSection({ resumeUrl }) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, sm: 4 } }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          My Resume / CV
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          I'm a highly skilled full-stack engineer with more than 8 years of
          experience in building web applications. On this page, you can learn
          more about my knowledge stack and my previous work experience.
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
            Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {skills.map((s) => (
              <Chip key={s} label={s} size="small" sx={chipSx} />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Work History
          </Typography>
          <Button
            href={resumeUrl}
            download
            variant="outlined"
            startIcon={<Download />}
          >
            Download Resume
          </Button>
        </Box>

        <Box sx={{ display: "grid", gap: 3 }}>
          {workHistory.map((w, i) => (
            <Box
              key={i}
              sx={{ pl: 3, borderLeft: 2, borderColor: "primary.main", pb: 1 }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                {w.title} — {w.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {w.period} • {w.location} • {w.type}
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                {w.achievements.map((a, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" color="text.secondary">
                      {a}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 6, textAlign: "center", color: "text.secondary" }}>
          © {new Date().getFullYear()} Built with ❤️ by John Doe
        </Box>
      </Box>
    </Box>
  );
}
