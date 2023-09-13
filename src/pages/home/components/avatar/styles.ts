import { styled } from "@stitches/react";
import Image from "next/image";

export const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
  borderRadius: "999px",
  padding: "0.12rem",

  img: {
    borderRadius: "999px",
  },
});
export const AvatarImageOnPerfil = styled(Image, {});

export const AvatarImage = styled(Image, {
  "&:hover": {
    cursor: "pointer",
  },
});
