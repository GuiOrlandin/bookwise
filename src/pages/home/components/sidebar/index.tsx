import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import {
  AvatarandUserName,
  Content,
  ExplorerButton,
  HomeButton,
  LoginButton,
  LogoutButton,
  ProfileButton,
  SidebarContainer,
  Title,
} from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import bookWise from "../../../../assets/bookwise-logo.svg";
import avatarImage from "../../../../assets/avatarimg.svg";
import { signOut, useSession } from "next-auth/react";
import { sign } from "crypto";
import { LoginAuthenticate } from "@/pages/login/components";
import { Avatar } from "../avatar";
import { Overlay } from "../bookCard/styles";

interface Props {
  UserAuthenticated?: boolean;
  pageSelected: string;
}

export function Sidebar({ UserAuthenticated = false, pageSelected }: Props) {
  const [componentClicked, setComponentClicked] = useState(pageSelected);

  const { data: session } = useSession();
  const userLoged = session?.user;
  const name = userLoged?.name.split(" ");
  console.log(name);
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
      {userLoged ? (
        <>
          <ProfileButton
            IsClicked={componentClicked === "profile"}
            onClick={() => HandleClick(`profile/${userLoged.id}`)}
          >
            <User size={24} />
            Perfil
          </ProfileButton>

          <AvatarandUserName>
            <Avatar
              ImageUrl={userLoged.avatar_url as string}
              width={32}
              height={32}
              userId={userLoged.id}
            />
            <p>{name && name[0]}</p>
            <LogoutButton onClick={() => signOut()}>
              <SignOut size={20} />
            </LogoutButton>
          </AvatarandUserName>
        </>
      ) : (
        <Dialog.Root>
          <Overlay />
          <Dialog.Trigger asChild>
            <LoginButton>
              <p>Fazer login</p>
              <SignIn color="#50B2C0" size={20} />
            </LoginButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Content>
              <Title>Faça login para deixar sua avaliação</Title>

              <LoginAuthenticate />
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </SidebarContainer>
  );
}
