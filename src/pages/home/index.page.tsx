import { CaretRight, ChartLineUp } from "phosphor-react";
import { Sidebar } from "./components/sidebar";
import {
  HomeContainer,
  HomeIndicator,
  LastBookReadAndAvaliationListContainer,
  LastReadingsContainer,
  LastReadingsTextAndSeAllButtonContainer,
  PopularBook,
  PopularBookAndSeeAllBooks,
  RecentlyReviewedBooks,
} from "./styles";
import { Avaliations } from "./components/avaliations";
import { StarsAvaliations } from "./components/StarsAvaliations";
import { BookCard } from "./components/bookCard";
import { ReadBookCard } from "./components/ReadBookCard";

interface Props {
  UserAuthenticated?: boolean;
}

export default function Home({ UserAuthenticated = true }: Props) {
  return (
    <HomeContainer>
      <Sidebar UserAuthenticated={UserAuthenticated} pageSelected="home" />;
      <LastBookReadAndAvaliationListContainer>
        <HomeIndicator>
          <ChartLineUp size={32} color="#50B2C0" />
          Início
        </HomeIndicator>
        {UserAuthenticated && (
          <LastReadingsContainer>
            <LastReadingsTextAndSeAllButtonContainer>
              Sua última leitura
              <button>
                Ver todas <CaretRight />
              </button>
            </LastReadingsTextAndSeAllButtonContainer>
            <ReadBookCard />
          </LastReadingsContainer>
        )}
        <RecentlyReviewedBooks>
          <p>Avaliações mais recentes</p>
          <Avaliations AvaliatioWithoutBookContent={false} />
          <Avaliations AvaliatioWithoutBookContent={false} />
          <Avaliations AvaliatioWithoutBookContent={false} />
        </RecentlyReviewedBooks>
      </LastBookReadAndAvaliationListContainer>
      <PopularBook>
        <PopularBookAndSeeAllBooks>
          <p>Livros populares</p>
          <span>
            Ver todos <CaretRight />
          </span>
        </PopularBookAndSeeAllBooks>
        <BookCard />
        <BookCard />
        <BookCard />
      </PopularBook>
    </HomeContainer>
  );
}
