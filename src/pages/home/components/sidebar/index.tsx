import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import {
  AvatarandUserName,
  ExplorerButton,
  HomeButton,
  LoginButton,
  LogoutButton,
  ProfileButton,
  SidebarContainer,
} from "./styles";
import bookWise from "../../../../assets/bookwise-logo.svg";
import avatarImage from "../../../../assets/avatarimg.svg";

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
      {UserAuthenticated ? (
        <>
          <ProfileButton
            IsClicked={componentClicked === "profile"}
            onClick={() => HandleClick("profile")}
          >
            <User size={24} />
            Perfil
          </ProfileButton>

          <AvatarandUserName>
            <Image src={avatarImage} quality={100} alt=""></Image>
            <p>Jaxson</p>
            <LogoutButton>
              <SignOut size={20} />
            </LogoutButton>
          </AvatarandUserName>
        </>
      ) : (
        <LoginButton>
          <p>Fazer login</p> <SignIn color="#50B2C0" size={20} />
        </LoginButton>
      )}
    </SidebarContainer>
  );
}
