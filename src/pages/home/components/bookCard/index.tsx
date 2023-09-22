import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { api } from "@/lib/axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { StarsAvaliations } from "../StarsAvaliations";
import { Avaliations } from "../avaliations";
import { Avatar } from "../avatar";
import { LoginAuthenticate } from "@/pages/login/components";
import { Book, Profile } from "@/pages/explorer/index.page";

import { BookOpen, BookmarkSimple, Check, X } from "phosphor-react";
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
  CloseButtonModal,
  CloseButtonOfAuthenticate,
  Content,
  ContentOfAuthenticate,
  ErrorText,
  NameAndAuthor,
  NameAndAuthorModal,
  Overlay,
  PagesDescriptionContainer,
  PagesDescriptionContent,
  Portal,
  ReadMark,
  SendAvaliationTextButton,
  StarsAndAvaliations,
  StarsAvaliationAndUserInfo,
  TextAreaDiv,
  TitleOfAuthenticate,
  Trigger,
  UserAvaliationContainer,
  UserInfo,
} from "./styles";

interface Props {
  userAuthenticate?: boolean;
  book: Book;
  explorer?: boolean;
}

export function BookCard({ book, explorer }: Props) {
  const [textAreaContent, setTextAreaContent] = useState<string>("");
  const [starsFilled, setStarsFilled] = useState<number>(-1);
  const [isUnvailable, setIsUnvailable] = useState<boolean>(true);
  const [errorForSendingRate, setErrorForSendingRate] =
    useState<boolean>(false);

  const session = useSession();
  const userAuthenticated = session.data?.user;
  const queryClient = useQueryClient();

  const { mutateAsync: handleHate, error } = useMutation(
    async () => {
      await api.post(`/ratings/userRating?bookId=${book.id}`, {
        description: textAreaContent,
        rate: starsFilled,
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(["latest-ratings"]);
        queryClient.invalidateQueries(["popular-books"]);
        queryClient.invalidateQueries(["list-books"]);
      },
    }
  );

  const hasError = !!error;

  const { data: profileInfo } = useQuery<Profile>(
    ["profile-info"],
    async () => {
      const { data } = await api.get(`/profile/${userAuthenticated?.id}`);
      return data.ProfileWithPageRead ?? [];
    },
    {
      enabled: !userAuthenticated,
    }
  );

  const arrayOfBookId = profileInfo?.ratings?.map(
    (ratings) => ratings.book?.id
  );

  function handleItemClick(index: number) {
    setStarsFilled(index);
  }

  async function handleSubmitRating() {
    if (starsFilled < 0 || textAreaContent.length < 3) {
      return setErrorForSendingRate(true);
    }
    await handleHate();
    setTextAreaContent("");
    setErrorForSendingRate(false);
  }

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const TextAreaContentOnEvent = event.target.value;

    setTextAreaContent(TextAreaContentOnEvent);
  }

  return (
    <Dialog.Root>
      <Trigger asChild>
        <BookCardContainer>
          {arrayOfBookId?.includes(book.id) &&
            explorer &&
            userAuthenticated && <ReadMark>LIDO</ReadMark>}
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
          <CloseButtonModal>
            <X size={24} />
          </CloseButtonModal>
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
                  <span>
                    {book?.ratings && book?.ratings?.length > 1
                      ? `${book.ratings?.length} Avaliações`
                      : `${book.ratings?.length} Avaliação`}
                  </span>
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
            {userAuthenticated ? (
              <UserAvaliationContainer>
                <p>Avaliações</p>
                <AvaliationCommentContainer>
                  <StarsAvaliationAndUserInfo>
                    <UserInfo>
                      <Avatar ImageUrl={userAuthenticated.image as string} />
                      <h2>{userAuthenticated.name}</h2>
                    </UserInfo>
                    <StarsAvaliations
                      handleItemClick={handleItemClick}
                      starsFilled={starsFilled}
                    />
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
                    {errorForSendingRate && !hasError && (
                      <ErrorText>
                        O texto deve haver mais 3 caracteres e a avaliação de
                        pelo menos uma estrela.
                      </ErrorText>
                    )}
                    {hasError && (
                      <ErrorText>Voce já avaliou este livro!</ErrorText>
                    )}
                    <CloseAvaliationTextButton
                      onClick={() => setTextAreaContent("")}
                    >
                      <X size={24} />
                    </CloseAvaliationTextButton>
                    <SendAvaliationTextButton
                      onClick={() => handleSubmitRating()}
                    >
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
            {book.ratings?.map((ratings) => (
              <Avaliations
                key={ratings.book_id}
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
