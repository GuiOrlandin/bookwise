import { CaretRight, ChartLineUp } from "phosphor-react";
import { Sidebar } from "./components/sidebar";
import {
  HomeContainer,
  HomeIndicator,
  PopularBook,
  PopularBookAndSeeAllBooks,
  RecentlyReviewedBooks,
} from "./styles";
import { Avaliations } from "./components/avaliations";
import { StarsAvaliations } from "./components/StarsAvaliations";
import { BookCard } from "./components/bookCard";

interface Props {
  UserAuthenticated?: boolean;
}

export default function Home({ UserAuthenticated = false }: Props) {
  return (
    <HomeContainer>
      <Sidebar UserAuthenticated={UserAuthenticated} pageSelected="home" />;
      <div>
        <HomeIndicator>
          <ChartLineUp size={32} color="#50B2C0" />
          Início
        </HomeIndicator>
        <RecentlyReviewedBooks>
          <p>Avaliações mais recentes</p>
          <Avaliations AvaliatioWithoutBookContent={false} />
          <Avaliations AvaliatioWithoutBookContent={false} />
          <Avaliations AvaliatioWithoutBookContent={false} />
        </RecentlyReviewedBooks>
      </div>
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
