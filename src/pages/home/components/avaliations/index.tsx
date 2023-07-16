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
interface Props {
  AvaliatioWithoutBookContent: boolean;
}

export function Avaliations({ AvaliatioWithoutBookContent }: Props) {
  return (
    <>
      {AvaliatioWithoutBookContent ? (
        <AvaliationsContainerWithoutBookContent>
          <AvatarAndStarsWithoutBookContent>
            <UserInfo>
              <Image src={avatarImg} alt=""></Image>
              <NameAndDate>
                <h2>Jaxson Dias</h2>
                <p>Hoje</p>
              </NameAndDate>
            </UserInfo>
            <StarsAvaliations />
          </AvatarAndStarsWithoutBookContent>
          <BookAvaliationContainer>
            <AvaliationContentWithoutBookContent>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit
              ipsum. Sed vulputate massa velit nibh <span>... ver mais</span>
            </AvaliationContentWithoutBookContent>
          </BookAvaliationContainer>
        </AvaliationsContainerWithoutBookContent>
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
