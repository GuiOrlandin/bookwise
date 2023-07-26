import { styled } from "@stitches/react";

export const ReadBookCardContainer = styled("div", {
  display: "flex",
  padding: "1.25rem 1.5rem",
  background: "#252D4A",
  borderRadius: "8px",
  marginTop: "1rem",

  img: {
    height: "9.5rem",
    width: "6.75rem",
    marginRight: "1.5rem",
  },
});

export const ReadBookCardContainerProfile = styled("div", {
  padding: "1.25rem 1.5rem",
  background: "#252D4A",
  borderRadius: "8px",
  marginTop: "0.5rem",

  img: {
    height: "9.5rem",
    width: "6.75rem",
    marginRight: "1.5rem",
  },
});

export const BookContentAndDateContainerProfile = styled("div", {
  marginTop: "1.5rem",
  p: {
    color: "#D1D6E4",
    fontSize: "0.875rem",
  },
});

export const BookContentAndDateContainer = styled("div", {
  p: {
    color: "#D1D6E4",
    fontSize: "0.875rem",
  },
});

export const ImageBookNameAndStarAvaliationContainer = styled("div", {
  display: "flex",

  img: {
    height: "8.375rem",
    width: "6.125rem",
  },
});

export const StarsAndDateContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.75rem",
});

export const BookNameAndAuthor = styled("div", {
  marginBottom: "1.5rem",
  h2: {
    fontWeight: "700",
    fontSize: "1rem",
    color: "#F8F9FC",
  },

  span: {
    color: "#8D95AF",
    fontSize: "0.875rem",
  },
});

export const BookNameAndAuthorProfile = styled("div", {
  h2: {
    fontWeight: "700",
    fontSize: "1rem",
    color: "#F8F9FC",
  },

  span: {
    display: "flex",
    color: "#8D95AF",
    fontSize: "0.875rem",
    marginBottom: "6rem",
  },
});

export const TextAvaliation = styled("p", {
  marginTop: "1.5rem",
});
