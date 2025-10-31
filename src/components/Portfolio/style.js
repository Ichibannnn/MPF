// src/components/Portfolio/styles.js
// centralizes sx and common style objects for MUI components
export const containerSx = {
  maxWidth: 1200,
  mx: "auto",
  px: { xs: 3, sm: 4, md: 6 },
};

export const cardSx = {
  borderRadius: 2,
  overflow: "hidden",
  boxShadow: 0,
  border: (theme) =>
    `1px solid ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.04)"
        : "rgba(0,0,0,0.08)"
    }`,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: 4,
  },
};

export const chipSx = {
  mr: 1,
  mb: 1,
  backgroundColor: (theme) =>
    theme.palette.mode === "dark"
      ? "rgba(251,191,36,0.08)"
      : "rgba(251,191,36,0.12)",
  color: (theme) => (theme.palette.mode === "dark" ? "#fbbf24" : "#92400e"),
  fontWeight: 600,
};
