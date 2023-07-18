import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import avatarImg from "../../../../assets/avatarimg.svg";
import georgeOrwell from "../../../../assets/Book.png";
import {
  AvaliationButtonContainer,
  AvaliationCommentContainer,
  AvaliationText,
  AvaliationTextButtons,
  AvaliationsContainer,
  BookCardContainer,
  BookDescriptionsAndAvaliations,
  BookInformations,
  CardContainer,
  CardContent,
  CategoryDescriptionContainer,
  CategoryDescriptionContent,
  CloseAvaliationTextButton,
  CloseButtonOfAuthenticate,
  Content,
  ContentOfAuthenticate,
  NameAndAuthor,
  NameAndAuthorModal,
  Overlay,
  PagesDescriptionContainer,
  PagesDescriptionContent,
  Portal,
  SendAvaliationTextButton,
  StarsAndAvaliations,
  StarsAvaliationAndUserInfo,
  TitleOfAuthenticate,
  Trigger,
  UserAvaliationContainer,
  UserInfo,
} from "./styles";
import { StarsAvaliations } from "../StarsAvaliations";
import { Avaliations } from "../avaliations";
import { BookOpen, BookmarkSimple, Check, X } from "phosphor-react";
import { LoginAuthenticate } from "@/pages/login/components";

interface Props {
  userAuthenticate?: boolean;
}

export function BookCard({ userAuthenticate = true }: Props) {
  return (
    <Dialog.Root>
      <Trigger asChild>
        <BookCardContainer>
          <Image src={georgeOrwell} width={64} height={94} alt="" />
          <div>
            <NameAndAuthor>
              <h1>A revolução dos bichos</h1>
              <p>George Orwell</p>

              <StarsAvaliations />
            </NameAndAuthor>
          </div>
        </BookCardContainer>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <CardContainer>
            <CardContent>
              <Image src={georgeOrwell} width={171.65} height={242} alt="" />
              <BookDescriptionsAndAvaliations>
                <NameAndAuthorModal>
                  <h1>A revolução dos bichos</h1>
                  <p>George Orwell</p>
                </NameAndAuthorModal>
                <StarsAndAvaliations>
                  <StarsAvaliations />
                  <span>3 Avaliação</span>
                </StarsAndAvaliations>
              </BookDescriptionsAndAvaliations>
            </CardContent>
            <BookInformations>
              <CategoryDescriptionContainer>
                <BookmarkSimple color="#50B2C0" size={24} />
                <CategoryDescriptionContent>
                  <p>Categoria</p>
                  <span>Computação, educação</span>
                </CategoryDescriptionContent>
              </CategoryDescriptionContainer>
              <PagesDescriptionContainer>
                <BookOpen color="#50B2C0" size={24} />
                <PagesDescriptionContent>
                  <p>Páginas</p>
                  <span>160</span>
                </PagesDescriptionContent>
              </PagesDescriptionContainer>
            </BookInformations>
          </CardContainer>
          <AvaliationsContainer>
            {userAuthenticate ? (
              <UserAvaliationContainer>
                <p>Avaliações</p>
                <AvaliationCommentContainer>
                  <StarsAvaliationAndUserInfo>
                    <UserInfo>
                      <Image src={avatarImg} alt=""></Image>
                      <h2>Jaxson Dias</h2>
                    </UserInfo>
                    <StarsAvaliations />
                  </StarsAvaliationAndUserInfo>
                  <AvaliationText placeholder="Escreva sua avaliação" />
                  <AvaliationTextButtons>
                    <CloseAvaliationTextButton>
                      <X size={24} />
                    </CloseAvaliationTextButton>
                    <SendAvaliationTextButton type="submit">
                      <Check size={24} />
                    </SendAvaliationTextButton>
                  </AvaliationTextButtons>
                </AvaliationCommentContainer>
              </UserAvaliationContainer>
            ) : (
              <Dialog.Root>
                <AvaliationButtonContainer>
                  <p>Avaliações</p>
                  <Trigger asChild>
                    <button>Avaliar</button>
                  </Trigger>
                </AvaliationButtonContainer>
                <Dialog.Portal>
                  <Overlay />
                  <ContentOfAuthenticate>
                    <CloseButtonOfAuthenticate>
                      <X size={24} />
                    </CloseButtonOfAuthenticate>
                    <TitleOfAuthenticate>
                      Faça login para deixar sua avaliação
                    </TitleOfAuthenticate>
                    <LoginAuthenticate visitorButtonEnabled={false} />
                    <Dialog.Description />
                  </ContentOfAuthenticate>
                </Dialog.Portal>
              </Dialog.Root>
            )}
            <Avaliations AvaliatioWithoutBookContent={true} />
            <Avaliations AvaliatioWithoutBookContent={true} />
            <Avaliations AvaliatioWithoutBookContent={true} />
            <Avaliations AvaliatioWithoutBookContent={true} />
          </AvaliationsContainer>
          <Dialog.Close />
        </Content>
      </Portal>
    </Dialog.Root>
  );
}
