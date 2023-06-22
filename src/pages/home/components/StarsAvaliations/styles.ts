import { styled } from "@stitches/react";

export const Stars = styled("div", {
  display: "flex",
  color: "#8381D9",
  gap: "0.25rem",

  svg: {
    "&:hover": {
      variants: {
        weight: "fill",
        backgroundColor: "#8381D9",
      },
    },
  },
});
