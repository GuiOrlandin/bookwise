import Image from "next/image";

import Bookimage from "../../../../assets/Book.png";
import { StarsAvaliations } from "../StarsAvaliations";
import {
  BookContentAndDateContainer,
  BookDescriptionContainer,
  BookNameAndAuthor,
  ImageBookNameAndStarAvaliationContainer,
  ReadBookCardContainer,
  ReadBookCardContainerProfile,
  StarsAndDateContainer,
} from "./styles";

interface Props {
  profile: boolean;
}

export function ReadBookCard({ profile = true }: Props) {
  return (
    <>
      {profile ? (
        <div>
          <p>Hás 2 dias</p>
          <ReadBookCardContainerProfile>
            <ImageBookNameAndStarAvaliationContainer>
              <BookDescriptionContainer>
                <Image src={Bookimage} alt=""></Image>
                <BookNameAndAuthor>
                  <h2>Entendendo Algoritmos</h2>
                  <span>Aditya Bhargava</span>
                </BookNameAndAuthor>
              </BookDescriptionContainer>
              <StarsAvaliations />
            </ImageBookNameAndStarAvaliationContainer>
            <p>
              Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
              vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla
              ut et suspendisse enim suspendisse vitae. Leo non eget lacus
              sollicitudin tristique pretium quam. Mollis et luctus amet sed
              convallis varius massa sagittis. Proin sed proin at leo quis ac
              sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum
              enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod
              vitae ut turpis. Aliquam amet integer pellentesque.
            </p>
          </ReadBookCardContainerProfile>
        </div>
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
