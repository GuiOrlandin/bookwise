import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";
import { text } from "stream/consumers";

export const BookCardContainer = styled("div", {
  display: "flex",
  padding: "1rem 1.25rem",
  borderRadius: "8px",
  width: "19.25rem",
  background: "#181C2A",
  position: "relative",

  border: "2px solid transparent",

  "&:hover": {
    border: "2px solid #252D4A",
  },
});

export const ReadMark = styled("div", {
  background: "#0A313C",
  position: "absolute",
  top: "-0.12rem",
  right: "-0.12rem",
  borderRadius: "0 8px 0 4px",
  padding: "0.25rem 0.75rem",

  fontSize: "0.75rem",
  fontWeight: "bold",
  color: "#50B2C0",
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  position: "fixed",
  inset: 0,
  animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
});

export const Trigger = styled(Dialog.Trigger, {
  "&:hover": {
    cursor: "pointer",
  },
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
  right: 325,
  transform: "translate(50%, -50%)",

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray700",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray600",
  },
});

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 2.125rem 2.5rem 2.5rem",
  borderRadius: "8px",
  padding: "1.5rem 2rem 2.5rem 2rem",

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

  h1: {
    fontSize: "1rem",
    color: "#F8F9FC",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "wrap",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },

  p: {
    fontSize: "0.875rem",
    fontWeight: "400",
    color: "#8D95AF",
  },
});

export const BookInfoAndAvaliationContainer = styled("div", {
  display: "flex",
  marginLeft: "1.25rem",

  flexDirection: "column",
  justifyContent: "space-between",
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

  p: {
    marginLeft: "1rem",
  },

  svg: {
    marginTop: "1.4rem",
  },
});

export const CategoryDescriptionContent = styled("div", {
  display: "flex",
  marginLeft: "1rem",
});

export const CategorysContainer = styled("div", {
  display: "flex",

  "span + span": {
    marginRight: "0.3rem",
  },
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

    "&:hover": {
      color: "#2A2879",
    },
  },
});

export const UserAvaliationContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  h2: {
    color: "#F8F9FC",
    fontSize: "1rem",
  },

  p: {
    color: "#E6E8F2",
    fontSize: "0.875rem",
    marginBottom: "1rem",
  },

  button: {
    border: "none",
    color: "#8381D9",
    fontSize: "1rem",
  },
});

export const StarsAvaliationAndUserInfo = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: "1.5rem",
});

export const UserInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const AvaliationText = styled("textarea", {
  height: "10.25rem",
  width: "100%",
  background: "#0E1116",
  border: "1px solid #303F73",
  borderRadius: "8px",
  color: "#E6E8F2",
  padding: "0.875rem 1.25rem",
  fontSize: "0.875rem",
  resize: "none",

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray700",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray600",
  },

  "&:focus": {
    outline: "none",
    border: "1px solid #255D6A",
  },

  "&::placeholder": {
    color: "#8D95AF",
    fontSize: "0.875rem",
  },
});

export const AvaliationTextButtons = styled("div", {
  display: "flex",
  gap: "0.5rem",
  marginTop: "0.75rem",

  button: {
    display: "flex",
    justifyContent: "end",
    position: "relative",
    left: "12.4rem",
  },

  text: {
    display: "flex",
    justifyContent: "start",
    position: "absolute",
    left: "4.5rem",
  },
});

export const CloseAvaliationTextButton = styled("button", {
  display: "flex",
  padding: "0.5rem",
  background: "#252D4A",
  borderRadius: "8px",
  marginLeft: "15.5rem",

  svg: {
    color: "#8381D9",
  },

  "&:hover": {
    cursor: "pointer",
    background: "#303F73",
  },
});

export const SendAvaliationTextButton = styled("button", {
  display: "flex",
  padding: "0.5rem",
  background: "#252D4A",
  borderRadius: "8px",

  svg: {
    color: "#50B2C0",
  },

  "&:hover": {
    cursor: "pointer",
    background: "#303F73",
  },
});
export const ContentOfAuthenticate = styled(Dialog.Content, {
  background: "#181C2A",
  padding: "0 0 3.5rem 4.5rem",
  borderRadius: "8px",

  position: "fixed",
  top: "30%",
  left: "34%",
  transform: "translate(-5%, -5%)",
});

export const TitleOfAuthenticate = styled(Dialog.Title, {
  display: "flex",
  marginLeft: "3.5rem",
  color: "#E6E8F2",
  fontSize: "1rem",
  fontWeight: "700",
});

export const CloseButtonModal = styled(Dialog.Close, {
  display: "flex",
  border: "none",
  margin: "1rem 1rem 1rem 36.75rem",
  background: "none",
  color: "#8D95AF",

  "&:hover": {
    cursor: "pointer",
    color: "#F8F9FC",
  },
});

export const CloseButtonOfAuthenticate = styled(Dialog.Close, {
  display: "flex",
  border: "none",
  marginLeft: "25rem",
  padding: "1rem 1rem 0 0",
  background: "none",
  color: "#8D95AF",

  "&:hover": {
    cursor: "pointer",
    color: "#F8F9FC",
  },
});

export const TextAreaDiv = styled("div", {
  display: "flex",

  span: {
    display: "flex",
    position: "fixed",
    right: "4.5rem",
  },
});

export const AvaliationCommentContainer = styled("div", {
  background: "#181C2A",
  padding: "1.5rem",
  borderRadius: "8px",

  span: {
    position: "absolute",
    fontSize: "0.75rem",
    color: "#7C7C8A",
    marginLeft: "30rem",
    marginTop: "8.7rem",
    zIndex: "2",
  },
});

export const ErrorText = styled("text", {
  display: "flex",
  color: "#DD3333",
  textAlign: "left",

  right: "10.1rem",
});
