// src/components/Portfolio/Navbar.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Sun,
  Moon,
  Menu,
  X,
  Download,
  Home,
  Briefcase,
  FileText,
} from "lucide-react";
import { useThemeToggle } from "./ThemeProvider";

export default function Navbar({ activeSection, onNavigate, resumeUrl }) {
  const { theme, toggle } = useThemeToggle();
  const muiTheme = useTheme();
  const mobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={16} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={16} /> },
    { id: "resume", label: "Resume", icon: <FileText size={16} /> },
  ];

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            backdropFilter: "blur(6px)",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? "rgba(10,25,47,0.6)"
                : "rgba(255,255,255,0.6)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mr: 2 }}>
            <IconButton
              onClick={toggle}
              color="inherit"
              aria-label="toggle theme"
              sx={{ borderRadius: 1 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, color: "primary.main" }}
            >
              Ichiban
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {!mobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navItems.map((it) => (
                <Button
                  key={it.id}
                  onClick={() => onNavigate(it.id)}
                  startIcon={it.icon}
                  sx={{
                    color:
                      activeSection === it.id
                        ? "primary.main"
                        : "text.secondary",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  <Box sx={{ display: { xs: "none", md: "inline" } }}>
                    {it.label}
                  </Box>
                </Button>
              ))}

              <Button
                href={resumeUrl}
                download
                variant="outlined"
                startIcon={<Download size={16} />}
                sx={{
                  ml: 1,
                  textTransform: "none",
                  borderColor: "primary.main",
                  color: "primary.main",
                }}
              >
                <Box sx={{ display: { xs: "none", md: "inline" } }}>
                  Download Resume
                </Box>
              </Button>
            </Box>
          ) : (
            <IconButton onClick={() => setOpen(true)} aria-label="open menu">
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, color: "primary.main" }}
            >
              Ichiban
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <X />
            </IconButton>
          </Box>

          <Divider sx={{ my: 1 }} />

          <List>
            {navItems.map((it) => (
              <ListItem key={it.id} disablePadding>
                <Button
                  fullWidth
                  onClick={() => {
                    onNavigate(it.id);
                    setOpen(false);
                  }}
                  sx={{
                    justifyContent: "flex-start",
                    color:
                      activeSection === it.id
                        ? "primary.main"
                        : "text.secondary",
                    textTransform: "none",
                  }}
                >
                  {it.icon}
                  <Box sx={{ ml: 1 }}>{it.label}</Box>
                </Button>
              </ListItem>
            ))}

            <ListItem disablePadding sx={{ mt: 1 }}>
              <Button
                fullWidth
                href={resumeUrl}
                download
                variant="outlined"
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderColor: "primary.main",
                  color: "primary.main",
                }}
              >
                <Download size={16} />
                <Box sx={{ ml: 1 }}>Download Resume</Box>
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
