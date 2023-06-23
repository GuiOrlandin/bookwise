import { styled } from "@stitches/react";

export const ListOfGenresContainer = styled("button", {
  display: "flex",
  border: "1px solid #8381D9",
  padding: "0.25rem 1rem",
  fontSize: "1rem",

  color: "#8381D9",
  background: "none",
  borderRadius: "999px",

  "&:hover": {
    cursor: "pointer",
    color: "#F8F9FC",
    background: "#2A2879",
    border: "0.5px solid #F8F9FC",
  },

  "&:selected": {
    color: "#F8F9FC",
    background: "#2A2879",
  },

  variants: {
    IsClicked: {
      true: {
        background: "#2A2879",
        color: "#F8F9FC",
        border: "0.5px solid #2A2879",
      },
    },
  },
});
