import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Binoculars, ChartLineUp, SignIn, User } from "phosphor-react";
import {
  ExplorerButton,
  HomeButton,
  LoginButton,
  ProfileButton,
  SidebarContainer,
} from "./styles";
import bookWise from "../../../../assets/bookwise-logo.svg";

interface Props {
  UserAuthenticated?: boolean;
  pageSelected: string;
}

export function Sidebar({ UserAuthenticated = false, pageSelected }: Props) {
  const [componentClicked, setComponentClicked] = useState(pageSelected);
  const router = useRouter();

  function HandleClick(component: string) {
    setComponentClicked(component);
    router.push(`/${component}`);
  }

  return (
    <SidebarContainer>
      <Image src={bookWise} quality={100} alt=""></Image>

      <HomeButton
        IsClicked={componentClicked === "home"}
        onClick={() => HandleClick("home")}
      >
        <ChartLineUp size={24} />
        Início
      </HomeButton>
      <ExplorerButton
        IsClicked={componentClicked === "explorer"}
        onClick={() => HandleClick("explorer")}
      >
        <Binoculars size={24} />
        Explorar
      </ExplorerButton>
      {UserAuthenticated && (
        <ProfileButton
          IsClicked={componentClicked === "profile"}
          onClick={() => HandleClick("profile")}
        >
          <User size={24} />
          Perfil
        </ProfileButton>
      )}

      <LoginButton>
        Fazer login <SignIn color="#50B2C0" size={20} />
      </LoginButton>
    </SidebarContainer>
  );
}
