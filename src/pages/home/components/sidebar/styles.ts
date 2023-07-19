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

export const AvatarandUserName = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: 0,
  marginTop: "42rem",
  marginLeft: "0.5rem",
  fontSize: "0.875rem",
  color: "#E6E8F2",

  img: {
    height: "2rem",
    width: "2rem",
  },

  svg: {
    color: "#F75A68",
  },
});

export const LoginButton = styled("button", {
  display: "flex",
  position: "absolute",
  alignItems: "center",
  gap: "0.75rem",
  marginTop: "57rem",
  marginLeft: "1rem",
  background: "none",
  border: "none",
  color: "#F8F9FC",

  p: {
    borderBottom: "1px solid transparent",

    "&:hover": {
      cursor: "pointer",
      borderBottom: "1px solid white",
    },
  },
});

export const LogoutButton = styled("button", {
  background: "none",
  border: "none",

  "&:hover": {
    cursor: "pointer",
  },
});
