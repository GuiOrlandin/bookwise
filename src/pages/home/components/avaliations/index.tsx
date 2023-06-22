import {
  AvaliationsContainer,
  AvatarAndStars,
  BookDescription,
  BookDescriptionContainer,
  NameAndAuthorBook,
  NameAndDate,
  UserInfo,
} from "./styles";
import Image from "next/image";

import avatarImg from "../../../../assets/avatarimg.svg";
import hobit from "../../../../assets/o-hobbit.png";
import { StarsAvaliations } from "../StarsAvaliations";

export function Avaliations() {
  return (
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
      <BookDescriptionContainer>
        <Image src={hobit} width={108} height={152} alt=""></Image>
        <NameAndAuthorBook>
          <h2>O Hobbit</h2>
          <p>J.R.R. Tolkien</p>{" "}
          <BookDescription>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh <span>... ver mais</span>
          </BookDescription>
        </NameAndAuthorBook>
      </BookDescriptionContainer>
    </AvaliationsContainer>
  );
}
