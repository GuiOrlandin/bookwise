import { styled } from "@stitches/react";

export const HomeContainer = styled("div", {
  display: "flex",
  background: "#0E1116",
  height: "100%",
});

export const HomeIndicator = styled("div", {
  display: "flex",
  gap: "0.75rem",
  height: "2rem",
  alignItems: "center",
  marginLeft: "4.75rem",
  marginTop: "4.5rem",

  color: "#F8F9FC",
  fontSize: "1.5rem",
});

export const RecentlyReviewedBooks = styled("div", {
  display: "flex",
  flexDirection: "column",
  color: "#F8F9FC",
  marginLeft: "4.75rem",
  marginTop: "2.5rem",

  p: {
    fontSize: "0.875rem",
  },
});
