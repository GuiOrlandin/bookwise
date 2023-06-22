import { styled } from "@stitches/react";

export const BookCardContainer = styled("div", {
  display: "flex",
  padding: "1rem 1.25rem",
  borderRadius: "8px",
  width: "19.25rem",
  background: "#181C2A",
  marginTop: "0.75rem",
});

export const NameAndAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "1.25rem",

  h1: {
    fontSize: "1rem",
    color: "#F8F9FC",
  },

  p: {
    fontSize: "0.875rem",
    color: "#8D95AF",
    marginBottom: "2.125rem",
  },
});
