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
  CategorysContainer,
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
import { Book } from "@/pages/explorer/index.page";
import { ChangeEvent, useState } from "react";

interface Props {
  userAuthenticate?: boolean;
  book: Book;
}

export function BookCard({ userAuthenticate = true, book }: Props) {
  const [textAreaContent, setTextAreaContent] = useState<string>("");

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const TextAreaContentOnEvent = event.target.value;

    setTextAreaContent(TextAreaContentOnEvent);
  }
  return (
    <Dialog.Root>
      <Trigger asChild>
        <BookCardContainer>
          <Image src={`/${book.cover_url}`} width={108} height={152} alt="" />
          <BookInfoAndAvaliationContainer>
            <NameAndAuthor>
              <h1>{book.name}</h1>
              <p>{book.author}</p>
            </NameAndAuthor>
            <StarsAvaliations avgRating={book.avgRating! - 1} />
          </BookInfoAndAvaliationContainer>
        </BookCardContainer>
      </Trigger>
      <Portal>
        <Overlay />
        <Content>
          <CardContainer>
            <CardContent>
              <Image
                src={`/${book.cover_url}`}
                width={171.65}
                height={242}
                alt=""
              />
              <BookDescriptionsAndAvaliations>
                <NameAndAuthorModal>
                  <h1>{book.name}</h1>
                  <p>{book.author}</p>
                </NameAndAuthorModal>
                <StarsAndAvaliations>
                  <StarsAvaliations avgRating={book.avgRating! - 1} />
                  <span>{book.ratings?.length} Avaliação</span>
                </StarsAndAvaliations>
              </BookDescriptionsAndAvaliations>
            </CardContent>
            <BookInformations>
              <CategoryDescriptionContainer>
                <BookmarkSimple color="#50B2C0" size={24} />
                <div>
                  <p>Categoria</p>
                  <CategoryDescriptionContent>
                    {book.categories?.map((categoriesOfTheBook, index) => (
                      <CategorysContainer key={categoriesOfTheBook.book_id}>
                        <span>{`${categoriesOfTheBook.category.name}`}</span>
                        {index + 1 !== book.categories?.length ? (
                          <span>, </span>
                        ) : (
                          <span>.</span>
                        )}
                      </CategorysContainer>
                    ))}
                  </CategoryDescriptionContent>
                </div>
              </CategoryDescriptionContainer>
              <PagesDescriptionContainer>
                <BookOpen color="#50B2C0" size={24} />
                <PagesDescriptionContent>
                  <p>Páginas</p>
                  <span>{book.total_pages}</span>
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
                    <AvaliationText
                      value={textAreaContent}
                      maxLength={450}
                      placeholder="Escreva sua avaliação"
                      onChange={handleInputChange}
                    />
                    <span>{`${textAreaContent.length}/450`}</span>
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
            {book.ratings?.map((rating) => (
              <Avaliations
                key={rating.book_id}
                rating={book.ratings}
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
