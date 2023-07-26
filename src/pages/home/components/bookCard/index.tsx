import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import avatarImg from "../../../../assets/avatarimg.svg";
import {
  AvaliationButtonContainer,
  AvaliationCommentContainer,
  AvaliationText,
  AvaliationTextButtons,
  AvaliationsContainer,
  BookCardContainer,
  BookDescriptionsAndAvaliations,
  BookInfoAndAvaliationContainer,
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
  TextAreaDiv,
  TitleOfAuthenticate,
  Trigger,
  UserAvaliationContainer,
  UserInfo,
} from "./styles";
import { StarsAvaliations } from "../StarsAvaliations";
import { Avaliations } from "../avaliations";
import { BookOpen, BookmarkSimple, Check, X } from "phosphor-react";
import { LoginAuthenticate } from "@/pages/login/components";
import { Ratings } from "@/pages/explorer/index.page";

interface Props {
  userAuthenticate?: boolean;
  name: string;
  author: string;
  cover_url: string;
  summary?: string;
  total_pages?: number;
  ratings?: Ratings[];
  created_at?: Date;
}

export function BookCard({
  userAuthenticate = true,
  name,
  author,
  cover_url,
  total_pages,
  ratings,
  created_at,
}: Props) {
  return (
    <Dialog.Root>
      <Trigger asChild>
        <BookCardContainer>
          <Image src={`/${cover_url}`} width={108} height={152} alt="" />
          <BookInfoAndAvaliationContainer>
            <NameAndAuthor>
              <h1>{name}</h1>
              <p>{author}</p>
            </NameAndAuthor>
            <StarsAvaliations />
          </BookInfoAndAvaliationContainer>
        </BookCardContainer>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <CardContainer>
            <CardContent>
              <Image src={`/${cover_url}`} width={171.65} height={242} alt="" />
              <BookDescriptionsAndAvaliations>
                <NameAndAuthorModal>
                  <h1>{name}</h1>
                  <p>{author}</p>
                </NameAndAuthorModal>
                <StarsAndAvaliations>
                  <StarsAvaliations />
                  <span>{ratings?.length} Avaliação</span>
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
                  <span>{total_pages}</span>
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
                  <TextAreaDiv>
                    <AvaliationText placeholder="Escreva sua avaliação" />
                    <span>0/450</span>
                  </TextAreaDiv>
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
            {ratings?.map((rating) => (
              <Avaliations
                key={rating.book_id}
                rating={ratings}
                AvaliatioWithoutBookContent={true}
              />
            ))}
          </AvaliationsContainer>
          <Dialog.Close />
        </Content>
      </Portal>
    </Dialog.Root>
  );
}
