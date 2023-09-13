import { styled } from "@stitches/react";

export const AvaliationsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  background: "#181C2A",
  padding: "1.5rem",
  border: "2px solid transparent",
  borderRadius: "8px",

  img: {
    "&:hover": {
      cursor: "pointer",
    },
  },
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

  span: {
    color: "#8381D9",

    "&:hover": {
      cursor: "pointer",
      color: "#2A2879",
    },
  },
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

  div: {
    display: "flex",
  },
});

export const BookAvaliationText = styled("p", {
  fontWeight: "700",
  color: "#D1D6E4",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  lineClamp: 3,
  WebkitBoxOrient: "vertical",
  marginTop: "1.25rem",

  variants: {
    IsClicked: {
      true: {
        overflow: "visible",
        textOverflow: "ellipsis",
        display: "flex",
      },
    },
  },

  span: {
    marginLeft: "0.25rem",
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
  height: "100%",
  color: "#D1D6E4",

  span: {
    color: "#8381D9",

    "&:hover": {
      cursor: "pointer",
      color: "#2A2879",
    },
  },
});
