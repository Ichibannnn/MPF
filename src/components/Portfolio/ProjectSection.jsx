// src/components/Portfolio/ProjectsSection.jsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { ChevronLeft, ChevronRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { cardSx, chipSx } from "./styles";

import ecommerceImg from "../../assets/ecommerce.png";
import aiImg from "../../assets/ai.png";
import fitnessImg from "../../assets/fitness.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing",
    images: [ecommerceImg],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    description:
      "Machine learning powered analytics dashboard with real-time data visualization and predictive insights",
    images: [aiImg],
    tags: ["Python", "TensorFlow", "React", "D3.js"],
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform fitness application with workout plans, nutrition tracking, and social features",
    images: [fitnessImg],
    tags: ["React Native", "Firebase", "Redux"],
  },
];

export default function ProjectsSection() {
  const [indexes, setIndexes] = useState(() => projects.map(() => 0));

  const prev = (i) =>
    setIndexes((s) => {
      const copy = [...s];
      copy[i] = copy[i] === 0 ? projects[i].images.length - 1 : copy[i] - 1;
      return copy;
    });

  const next = (i) =>
    setIndexes((s) => {
      const copy = [...s];
      copy[i] = copy[i] === projects[i].images.length - 1 ? 0 : copy[i] + 1;
      return copy;
    });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, ...{ px: { xs: 3, sm: 4 } } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((p, idx) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card sx={cardSx}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={p.images[indexes[idx]]}
                      alt={`${p.title} screenshot`}
                      sx={{ height: { xs: 220, sm: 180 }, objectFit: "cover" }}
                    />
                    {p.images.length > 1 && (
                      <>
                        <IconButton
                          onClick={() => prev(idx)}
                          sx={{
                            position: "absolute",
                            left: 8,
                            top: "50%",
                            transform: "translateY(-50%)",
                            bgcolor: "rgba(0,0,0,0.45)",
                          }}
                        >
                          <ChevronLeft color="#fff" />
                        </IconButton>
                        <IconButton
                          onClick={() => next(idx)}
                          sx={{
                            position: "absolute",
                            right: 8,
                            top: "50%",
                            transform: "translateY(-50%)",
                            bgcolor: "rgba(0,0,0,0.45)",
                          }}
                        >
                          <ChevronRight color="#fff" />
                        </IconButton>
                      </>
                    )}
                  </Box>

                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {p.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 2, flexWrap: "wrap" }}
                    >
                      {p.tags.map((t) => (
                        <Chip key={t} label={t} size="small" sx={chipSx} />
                      ))}
                    </Stack>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Button size="small" variant="text">
                        View details
                      </Button>
                      <Stack direction="row" spacing={1}>
                        <IconButton size="small" aria-label="github">
                          <Github />
                        </IconButton>
                        <IconButton size="small" aria-label="linkedin">
                          <Linkedin />
                        </IconButton>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
