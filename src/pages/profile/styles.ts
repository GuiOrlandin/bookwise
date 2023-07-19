import { styled } from "@stitches/react";

export const ProfileContainer = styled("div", {
  display: "flex",
  background: "#0E1116",
});

export const ProfileLogoAndTextDescriptionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "#0E1116",
  marginBottom: "2.5rem",
  gap: "0.75rem",

  h1: {
    color: "#F8F9FC",
    fontSize: "1.5rem",
  },
});

export const ListOfReadsBooks = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "#0E1116",
  margin: "4.5rem 4rem 0 6rem",

  h1: {
    color: "#F8F9FC",
    fontSize: "1.5rem",
  },
});

export const SearchInput = styled("form", {
  display: "flex",

  input: {
    height: "3rem",
    width: "100%",
    marginRight: "-2.9rem",
    padding: "0.875rem 1.25rem",
    background: "#0E1116",
    color: "#8D95AF",
    fontSize: "0.875rem",

    border: "1px solid #303F73",
    borderRadius: "4px",

    "&:focus": {
      outline: "none",
      border: "1px solid #255D6A",
    },
  },

  button: {
    background: "none",
    border: "none",
  },
});
