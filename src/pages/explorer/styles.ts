import { styled } from "@stitches/react";

export const ExplorerContainer = styled("div", {
  display: "flex",
  width: "100vw",
  background: "#0E1116",
});

export const ExplorerContent = styled("div", {
  display: "flex",
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
});

export const SearchInput = styled("form", {
  display: "flex",
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
  flexWrap: "wrap",
  width: "62.25rem",
});

export const ListOfGenresContainer = styled("div", {
  display: "flex",
  gap: "0.75rem",
  marginLeft: "0.75rem",
});
