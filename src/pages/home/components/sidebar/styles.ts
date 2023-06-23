import { styled } from "@stitches/react";

export const SidebarContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2.5rem 3.25rem 0 2.5rem",
  margin: "1.25rem  1.25rem",
  borderRadius: "8px",
  with: "14.5rem",
  height: "62.4rem",
  background: "#252D4A",
});

export const HomeButton = styled("button", {
  display: "flex",
  alignItems: "center",
  color: "#8D95AF",
  gap: "0.75rem",
  paddingLeft: "1rem",
  border: "none",
  marginLeft: "-2.7rem",
  marginTop: "4.5rem",
  borderLeft: "4px solid transparent",
  background: "none",

  "&:hover": {
    color: "#F8F9FC",
    cursor: "pointer",
  },

  variants: {
    IsClicked: {
      true: {
        borderLeft: "4px solid",
        borderImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
        borderImageSlice: "1",
        color: "#F8F9FC",
      },
    },
  },
});

export const ExplorerButton = styled(HomeButton, {
  marginTop: "1.6rem",
  marginLeft: "-1.4rem",
  variants: {
    IsClicked: {
      true: {
        borderLeft: "4px solid",
        borderImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
        borderImageSlice: "1",
        color: "#F8F9FC",
      },
    },
  },
});

export const ProfileButton = styled(HomeButton, {
  marginTop: "1.6rem",
  variants: {
    IsClicked: {
      true: {
        borderLeft: "4px solid",
        borderImage: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
        borderImageSlice: "1",
        color: "#F8F9FC",
      },
    },
  },
});

export const LoginButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginTop: "45.2rem",
  marginLeft: "1rem",
  background: "none",
  border: "none",
  color: "#F8F9FC",
});
