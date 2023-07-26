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

export const ProfileInfoContainer = styled("div", {
  display: "flex",
  width: "19.25rem",
  height: "33rem",
  padding: "0 5rem",
  marginTop: "8.625rem",
  marginRight: "6rem",
  flexDirection: "column",
  alignItems: "center",
  borderLeft: "1px solid #181C2A",

  h2: {
    color: "#F8F9FC",
    fontSize: "1.25rem",
    marginTop: "1.25rem",
  },

  span: {
    display: "flex",
    color: "#8D95AF",
  },
});

export const NameAndDateMember = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "12.6875rem",

  position: "relative",

  "&::after": {
    content: "''",
    position: "absolute",
    bottom: "0",
    top: "140%",
    borderRadius: "8px",
    left: "40%",
    width: "32px",
    height: "4px",
    background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
  },
});

export const ReadsBooksInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  p: {
    color: "#E6E8F2",
    fontWeight: "700",
    lineHeight: "140%",
  },

  span: {
    color: "#D1D6E4",
    fontSize: "0.875rem",
  },
});

export const PagesReades = styled("div", {
  display: "flex",
  marginTop: "5rem",

  svg: {
    marginRight: "1.25rem",
  },
});

export const BooksAvaliated = styled("div", {
  display: "flex",
  marginTop: "2.875rem",

  svg: {
    marginRight: "1.25rem",
  },
});

export const AutorsReads = styled("div", {
  display: "flex",
  marginTop: "2.875rem",

  svg: {
    marginRight: "1.25rem",
  },
});

export const CategoryMostRead = styled("div", {
  display: "flex",
  marginTop: "2.875rem",

  svg: {
    marginRight: "1.25rem",
  },
});
