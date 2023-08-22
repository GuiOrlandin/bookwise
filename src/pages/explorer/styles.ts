import { styled } from "@stitches/react";

export const ExplorerContainer = styled("div", {
  display: "flex",
  width: "100vw",
  background: "#0E1116",
});

export const ExplorerContent = styled("div", {
  display: "flex",
  height: "100vw",
  flexDirection: "column",
  width: "62.25rem",
  margin: "4.5rem 6rem 3rem 5.256rem",
});

export const ExplorerIndicator = styled("div", {
  display: "flex",
  alignItems: "center",
  color: "#F8F9FC",
  gap: "0.75rem",
  marginLeft: "0.75rem",

  fontSize: "1.5rem",
});

export const ExplorerIndicatorAndSearchBookAndAuthor = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "2.5rem",
});

export const SearchInput = styled("form", {
  display: "flex",
  // marginBottom: "2.5rem",
  input: {
    width: "27.0625rem",
    height: "3rem",
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
    marginRight: "2.5rem",
  },
});

export const ListOfBookCards = styled("div", {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  width: "62.25rem",
});

export const ListOfGenres = styled("button", {
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

export const ListOfGenresContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  marginLeft: "0.7rem",
  marginBottom: "2rem",
});
