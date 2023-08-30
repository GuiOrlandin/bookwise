import Image from "next/image";

import Bookimage from "../../../../assets/Book.png";
import { StarsAvaliations } from "../StarsAvaliations";
import {
  BookContentAndDateContainer,
  BookContentAndDateContainerProfile,
  BookNameAndAuthor,
  BookNameAndAuthorProfile,
  ImageBookNameAndStarAvaliationContainer,
  ReadBookCardContainer,
  ReadBookCardContainerProfile,
  StarsAndDateContainer,
  TextAvaliation,
} from "./styles";

import { Ratings } from "@/pages/explorer/index.page";
import { relativeDateFormatter } from "@/utils/formatter";

interface Props {
  profile: boolean;
  ratings?: Ratings | undefined;
}

export function ReadBookCard({ profile, ratings }: Props) {
  return (
    <>
      {profile ? (
        <BookContentAndDateContainerProfile key={ratings?.book_id}>
          <p>{relativeDateFormatter(ratings?.created_at as string)}</p>
          <ReadBookCardContainerProfile>
            <ImageBookNameAndStarAvaliationContainer>
              <Image
                src={`/${ratings?.book?.cover_url}`}
                width={98}
                height={134}
                alt=""
              ></Image>
              <BookNameAndAuthorProfile>
                <h2>{ratings?.book?.name}</h2>
                <span>{ratings?.book?.author}</span>
                <StarsAvaliations avgRating={ratings?.rate} />
              </BookNameAndAuthorProfile>
            </ImageBookNameAndStarAvaliationContainer>
            <TextAvaliation>{ratings?.description}</TextAvaliation>
          </ReadBookCardContainerProfile>
        </BookContentAndDateContainerProfile>
      ) : (
        <ReadBookCardContainer>
          <Image src={Bookimage} alt=""></Image>
          <BookContentAndDateContainer>
            <StarsAndDateContainer>
              <p>Hás 2 dias</p>
              <StarsAvaliations />
            </StarsAndDateContainer>

            <BookNameAndAuthor>
              <h2>Entendendo Algoritmos</h2>
              <span>Aditya Bhargava</span>
            </BookNameAndAuthor>
            <p>
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet
              lectu...
            </p>
          </BookContentAndDateContainer>
        </ReadBookCardContainer>
      )}
    </>
  );
}
