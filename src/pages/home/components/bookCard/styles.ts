import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

export const BookCardContainer = styled("div", {
  display: "flex",
  padding: "1rem 1.25rem",
  borderRadius: "8px",
  width: "19.25rem",
  background: "#181C2A",
  margin: "0.75rem",
});

export const Overlay = styled(Dialog.Overlay, {
  background: "#8381D9",
});

export const Portal = styled(Dialog.Portal, {
  height: "100vh",
});

export const Content = styled(Dialog.Content, {
  width: "41.25rem",
  height: "100vh",
  background: "#0E1116",
  overflow: "auto",

  position: "fixed",
  top: "50%",
  left: "32%",
  transform: "translate(50%, -50%)",
});

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "3rem 4rem 3rem 2.5rem",
  borderRadius: "8px",
  padding: "1.5rem 2rem 2.5rem 2rem",
  width: "35.25rem",

  background: "#181C2A",

  span: {
    color: "#8D95AF",
    lineHeight: "2rem",
    fontSize: "0.875rem",
  },
});

export const CardContent = styled("div", {
  display: "flex",
  marginBottom: "2rem",
});

export const NameAndAuthor = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "1.25rem",

  h1: {
    fontSize: "1rem",
    color: "#F8F9FC",
  },

  p: {
    fontSize: "0.875rem",
    fontWeight: "400",
    color: "#8D95AF",
    marginBottom: "2.125rem",
  },
});

export const NameAndAuthorModal = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "1.25rem",

  h1: {
    fontSize: "1.125rem",
    color: "#F8F9FC",
  },

  p: {
    fontSize: "1rem",
    color: "#D1D6E4",
    lineHeight: "2rem",
    marginBottom: "2.125rem",
  },
});

export const StarsAndAvaliations = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "1.25rem",
});

export const BookDescriptionsAndAvaliations = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const BookInformations = styled("div", {
  display: "flex",
  gap: "3.75rem",
  background: "#181C2A",
  borderTop: "1px solid #252D4A",

  p: {
    marginTop: "1.5rem",
    color: "#D1D6E4",
    fontSize: "0.875rem",
  },

  span: {
    color: "#E6E8F2",
    fontSize: "1rem",
    fontWeight: "700",
    lineHeight: "1.4rem",
  },
});

export const CategoryDescriptionContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  svg: {
    marginTop: "1.4rem",
  },
});

export const CategoryDescriptionContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "1rem",
});

export const PagesDescriptionContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  svg: {
    marginTop: "1.4rem",
  },
});

export const PagesDescriptionContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "1rem",
});

export const AvaliationsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem 2rem 2.5rem 2.7rem",
});

export const AvaliationButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  p: {
    color: "#E6E8F2",
    fontSize: "0.875rem",
  },

  button: {
    background: "none",
    border: "none",
    color: "#8381D9",
    fontSize: "1rem",
  },
});
