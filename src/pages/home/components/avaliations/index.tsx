import {
  AvaliationContent,
  AvaliationContentWithoutBookContent,
  AvaliationsContainer,
  AvaliationsContainerWithoutBookContent,
  AvatarAndStars,
  AvatarAndStarsWithoutBookContent,
  BookAvaliationContainer,
  BookAvaliationText,
  NameAndDate,
  UserInfo,
} from "./styles";
import Image from "next/image";

import { StarsAvaliations } from "../StarsAvaliations";
import { Ratings } from "@/pages/explorer/index.page";
import { relativeDateFormatter } from "@/utils/formatter";
import { Avatar } from "../avatar";
import { useState } from "react";
interface Props {
  AvaliatioWithoutBookContent: boolean;
  rating: Ratings;
}

export function Avaliations({ AvaliatioWithoutBookContent, rating }: Props) {
  const [seeMoreOrLess, setSeeMoreOrLess] = useState("ver mais");

  function handleSeeMoreToggle() {
    seeMoreOrLess === "ver mais"
      ? setSeeMoreOrLess("ver menos")
      : setSeeMoreOrLess("ver mais");
  }
  return (
    <>
      {AvaliatioWithoutBookContent ? (
        <AvaliationsContainerWithoutBookContent>
          <AvatarAndStarsWithoutBookContent>
            <UserInfo>
              <Avatar
                ImageUrl={rating.user?.avatar_url as string}
                userId={rating.user?.id}
              />
              <NameAndDate>
                <h2>{rating.user?.name}</h2>
                <p>{relativeDateFormatter(rating.created_at)}</p>
              </NameAndDate>
            </UserInfo>
            <StarsAvaliations avgRating={rating.rate - 1} />
          </AvatarAndStarsWithoutBookContent>
          <BookAvaliationContainer>
            <AvaliationContentWithoutBookContent>
              {rating.description}
            </AvaliationContentWithoutBookContent>
          </BookAvaliationContainer>
        </AvaliationsContainerWithoutBookContent>
      ) : (
        <AvaliationsContainer>
          <AvatarAndStars>
            <UserInfo>
              <Avatar
                ImageUrl={rating.user?.avatar_url as string}
                userId={rating.user?.id}
              />
              <NameAndDate>
                <h2>{rating.user?.name}</h2>
                <p>{relativeDateFormatter(rating.created_at)}</p>
              </NameAndDate>
            </UserInfo>
            <StarsAvaliations avgRating={rating.rate - 1} />
          </AvatarAndStars>
          <BookAvaliationContainer>
            <Image
              src={`/${rating.book?.cover_url}`}
              width={108}
              height={152}
              alt=""
            ></Image>
            <AvaliationContent>
              <h2>{rating.book?.name}</h2>
              <p>{rating.book?.author}</p>{" "}
              <BookAvaliationText IsClicked={seeMoreOrLess === "ver menos"}>
                {rating.description}
              </BookAvaliationText>
              {rating.description.length >= 220 && (
                <span onClick={handleSeeMoreToggle}>{seeMoreOrLess}</span>
              )}
            </AvaliationContent>
          </BookAvaliationContainer>
        </AvaliationsContainer>
      )}
    </>
  );
}
