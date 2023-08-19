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
  rating: Ratings[] | undefined;
}

export function Avaliations({ AvaliatioWithoutBookContent, rating }: Props) {
  return (
    <>
      {AvaliatioWithoutBookContent ? (
        rating?.map((rating) => (
          <AvaliationsContainerWithoutBookContent key={rating.book_id}>
            <AvatarAndStarsWithoutBookContent>
              <UserInfo>
                <Avatar
                  ImageUrl={rating.user.avatar_url}
                  key={rating.book_id}
                />
                <NameAndDate>
                  <h2>{rating.user.name}</h2>
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
        ))
      ) : (
        <AvaliationsContainer>
          <AvatarAndStars>
            <UserInfo>
              <Image src={avatarImg} alt=""></Image>
              <NameAndDate>
                <h2>Jaxson Dias</h2>
                <p>Hoje</p>
              </NameAndDate>
            </UserInfo>
            <StarsAvaliations />
          </AvatarAndStars>
          <BookAvaliationContainer>
            <Image src={hobit} width={108} height={152} alt=""></Image>
            <AvaliationContent>
              <h2>O Hobbit</h2>
              <p>J.R.R. Tolkien</p>{" "}
              <BookAvaliationText>
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                varius leo a in. Amet libero pharetra nunc elementum fringilla
                velit ipsum. Sed vulputate massa velit nibh{" "}
                <span>... ver mais</span>
              </BookAvaliationText>
            </AvaliationContent>
          </BookAvaliationContainer>
        </AvaliationsContainer>
      )}
    </>
  );
}
