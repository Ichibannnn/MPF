// src/components/Portfolio/HeroSection.jsx
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import profileImg from "../../assets/profile.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{ width: "100%", maxWidth: 1200, mx: "auto", px: { xs: 3, sm: 4 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              alt="Profile"
              src={profileImg}
              sx={{
                width: 160,
                height: 160,
                mx: "auto",
                border: 4,
                borderColor: "primary.main",
                boxShadow: (t) => `0 0 40px ${t.palette.primary.main}33`,
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{ mt: 3, fontWeight: 800 }}
            >
              John Doe
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: "text.secondary" }}>
              Full Stack Developer & UI/UX Enthusiast
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 800,
                mx: "auto",
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              I'm a highly skilled full-stack engineer with more than 8 years of
              experience in building web applications. Passionate about creating
              beautiful, functional experiences using modern technologies.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              sx={{ mt: 3 }}
            >
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
                sx={{ border: 1, borderColor: "primary.main" }}
              >
                <Github />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ border: 1, borderColor: "primary.main" }}
              >
                <Linkedin />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:your.email@example.com"
                aria-label="Email"
                sx={{ border: 1, borderColor: "primary.main" }}
              >
                <Mail />
              </IconButton>
            </Stack>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
