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

import avatarImg from "../../../../assets/avatarimg.svg";
import hobit from "../../../../assets/o-hobbit.png";
import { StarsAvaliations } from "../StarsAvaliations";
import { Ratings } from "@/pages/explorer/index.page";
import { relativeDateFormatter } from "@/utils/formatter";
import { Avatar } from "../avatar";
interface Props {
  AvaliatioWithoutBookContent: boolean;
  rating: Ratings;
}

export function Avaliations({ AvaliatioWithoutBookContent, rating }: Props) {
  return (
    <>
      {AvaliatioWithoutBookContent ? (
        <AvaliationsContainerWithoutBookContent>
          <AvatarAndStarsWithoutBookContent>
            <UserInfo>
              <Avatar ImageUrl={rating.user?.avatar_url as string} />
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
              <Avatar ImageUrl={rating.user?.avatar_url as string} />
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
              <BookAvaliationText>
                {rating.description}
                <span>... ver mais</span>
              </BookAvaliationText>
            </AvaliationContent>
          </BookAvaliationContainer>
        </AvaliationsContainer>
      )}
    </>
  );
}
