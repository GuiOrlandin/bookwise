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

export const PopularBook = styled("div", {
  fontSize: "0.875rem",
  marginRight: "6rem",
  marginTop: "9.125rem",

  p: {
    color: "#F8F9FC",
  },

  span: {
    display: "flex",
    alignItems: "center",
    color: "#8381D9",
    gap: "0.5rem",
  },
});

export const PopularBooksContainer = styled("div", {
  display: "flex",
  marginBottom: "0.75rem",

  img: {
    width: "4rem",
    height: "5.875rem",
  },
});

export const PopularBookAndSeeAllBooks = styled("div", {
  display: "flex",

  justifyContent: "space-between",
  marginBottom: "1rem",

  span: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const LastReadingsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  color: "#F8F9FC",
  fontSize: "0.875rem",
  marginLeft: "4.5rem",
  marginTop: "2.5rem",
});

export const LastReadingsTextAndSeAllButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "#F8F9FC",
  fontSize: "0.875rem",

  button: {
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "none",
    color: "#8381D9",
    gap: "0.5rem",

    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const LastBookReadAndAvaliationListContainer = styled("div", {
  marginRight: "4rem",
});
