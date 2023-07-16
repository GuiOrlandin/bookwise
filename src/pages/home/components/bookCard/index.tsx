import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import georgeOrwell from "../../../../assets/Book.png";
import {
  AvaliationButtonContainer,
  AvaliationsContainer,
  BookCardContainer,
  BookDescriptionsAndAvaliations,
  BookInformations,
  CardContainer,
  CardContent,
  CategoryDescriptionContainer,
  CategoryDescriptionContent,
  Content,
  NameAndAuthor,
  NameAndAuthorModal,
  Overlay,
  PagesDescriptionContainer,
  PagesDescriptionContent,
  Portal,
  StarsAndAvaliations,
} from "./styles";
import { StarsAvaliations } from "../StarsAvaliations";
import { Avaliations } from "../avaliations";
import { BookOpen, BookmarkSimple } from "phosphor-react";

export function BookCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
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
      </Dialog.Trigger>
      <Portal>
        <Overlay />
        <Content>
          <CardContainer>
            <CardContent>
              <Image src={georgeOrwell} width={171.65} height={242} alt="" />
              <BookDescriptionsAndAvaliations>
                <NameAndAuthorModal>
                  <h1>A revolução dos bichos</h1>
                  <p>George Orwell</p>
                </NameAndAuthorModal>
                <StarsAndAvaliations>
                  <StarsAvaliations />
                  <span>3 Avaliação</span>
                </StarsAndAvaliations>
              </BookDescriptionsAndAvaliations>
            </CardContent>
            <BookInformations>
              <CategoryDescriptionContainer>
                <BookmarkSimple color="#50B2C0" size={24} />
                <CategoryDescriptionContent>
                  <p>Categoria</p>
                  <span>Computação, educação</span>
                </CategoryDescriptionContent>
              </CategoryDescriptionContainer>
              <PagesDescriptionContainer>
                <BookOpen color="#50B2C0" size={24} />
                <PagesDescriptionContent>
                  <p>Páginas</p>
                  <span>160</span>
                </PagesDescriptionContent>
              </PagesDescriptionContainer>
            </BookInformations>
          </CardContainer>
          <AvaliationsContainer>
            <AvaliationButtonContainer>
              <p>Avaliações</p>
              <button>Avaliar</button>
            </AvaliationButtonContainer>
            <Avaliations AvaliatioWithoutBookContent={true} />
            <Avaliations AvaliatioWithoutBookContent={true} />
            <Avaliations AvaliatioWithoutBookContent={true} />
            <Avaliations AvaliatioWithoutBookContent={true} />
          </AvaliationsContainer>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Content>
      </Portal>
    </Dialog.Root>
  );
}
