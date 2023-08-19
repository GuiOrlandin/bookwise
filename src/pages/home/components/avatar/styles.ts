import { styled } from "@stitches/react";
import Image from "next/image";

export const AvatarContainer = styled("div", {
  position: "relative",
  width: "2.725rem",
  height: "2.725rem",
  padding: "0.12rem",
  backgroundImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
  borderRadius: "999px",

  img: {
    borderRadius: "999px",
  },
});
export const AvatarImage = styled(Image, {});
