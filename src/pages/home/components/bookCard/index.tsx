import Image from "next/image";
import georgeOrwell from "../../../../assets/Book.png";
import { BookCardContainer, NameAndAuthor } from "./styles";
import { StarsAvaliations } from "../StarsAvaliations";

export function BookCard() {
  return (
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
  );
}
