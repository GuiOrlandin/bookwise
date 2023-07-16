import { styled } from "@stitches/react";

export const AvaliationsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  marginRight: "4rem",
  background: "#181C2A",
  padding: "1.5rem",
  borderRadius: "8px",
});

export const AvaliationsContainerWithoutBookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  background: "#181C2A",
  padding: "1.5rem",
  borderRadius: "8px",
});

export const AvatarAndStars = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  p: {
    lineHeight: "1.4rem",
    color: "#8D95AF",
  },

  h2: {
    color: "#F8F9FC",
    fontSize: "1rem",
    fontWeight: "400",
  },
});

export const UserInfo = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const NameAndDate = styled("div", {
  display: "flex",
  flexDirection: "column",

  marginLeft: "1rem",
});

export const BookAvaliationContainer = styled("div", {
  display: "flex",
  marginTop: "1.25rem",
});

export const AvaliationContent = styled("div", {
  marginLeft: "1.25rem",

  h2: {
    fontSize: "1rem",
    fontWeight: "700",
  },
  p: {
    lineHeight: "1.4rem",
    color: "#8D95AF",
  },
});

export const BookAvaliationText = styled("p", {
  fontWeight: "700",
  color: "#D1D6E4",

  marginTop: "1.25rem",

  span: {
    color: "#8381D9",

    "&:hover": {
      cursor: "pointer",
      color: "#2A2879",
    },
  },
});

export const AvatarAndStarsWithoutBookContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  p: {
    lineHeight: "1.4rem",
    color: "#8D95AF",
  },

  h2: {
    color: "#F8F9FC",
    fontSize: "1rem",
    fontWeight: "700",
  },
});

export const AvaliationContentWithoutBookContent = styled("div", {
  fontWeight: "400",
  color: "#D1D6E4",

  span: {
    color: "#8381D9",

    "&:hover": {
      cursor: "pointer",
      color: "#2A2879",
    },
  },
});
