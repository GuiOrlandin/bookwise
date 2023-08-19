import { styled } from "@stitches/react";

export const GoogleAuthContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  width: "23.25rem",

  background: "#252D4A",
  border: "none",
  overflow: "none",
  padding: "1.25rem 8.6875rem 1.25rem 1.5rem",
  borderRadius: "8px",
  gap: "1.25rem",

  p: {
    color: "#E6E8F2",
  },

  "&:hover ": {
    background: "#303F73",
    cursor: "pointer",
  },
});

export const GitHubAuthContainer = styled(GoogleAuthContainer, {});

export const LoginContainer = styled("div", {
  display: "flex",
  marginTop: "2.5rem",
  flexDirection: "column",
  gap: "1rem",
});

export const VisitorContainer = styled(GoogleAuthContainer, {
  paddingRight: "6.5rem",
});
