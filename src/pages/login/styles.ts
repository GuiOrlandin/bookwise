import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  height: "100%",
  background: "#0E1116",
  padding: "20px",
  margin: 0,
});

export const TextContainer = styled("div", {
  width: "23.25rem",

  h2: {
    color: "#F8F9FC",
  },

  p: {
    color: "#E6E8F2",
  },
});

export const ContainerTest = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",

  alignItems: "center",
  justifyContent: "center",
});
