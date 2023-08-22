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
  PopularBooksContainer,
  RecentlyReviewedBooks,
} from "./styles";

import { ReadBookCard } from "./components/ReadBookCard";
import { useQuery } from "@tanstack/react-query";
import { Book } from "../explorer/index.page";
import { api } from "@/lib/axios";
import { BookCard } from "./components/bookCard";

interface Props {
  UserAuthenticated?: boolean;
}

export default function Home({ UserAuthenticated = true }: Props) {
  const { data: popularBooks } = useQuery<Book[]>(
    ["popular-books"],
    async () => {
      const { data } = await api.get("/books/popularBooks");
      return data.books ?? [];
    }
  );
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
            <ReadBookCard profile={false} />
          </LastReadingsContainer>
        )}
        <RecentlyReviewedBooks>
          <p>Avaliações mais recentes</p>
          {/* <Avaliations AvaliatioWithoutBookContent={false} />
          <Avaliations AvaliatioWithoutBookContent={false} />
          <Avaliations AvaliatioWithoutBookContent={false} /> */}
        </RecentlyReviewedBooks>
      </LastBookReadAndAvaliationListContainer>
      <PopularBook>
        <PopularBookAndSeeAllBooks>
          <p>Livros populares</p>
          <span>
            Ver todos <CaretRight />
          </span>
        </PopularBookAndSeeAllBooks>
        {popularBooks?.map((book) => (
          <PopularBooksContainer key={book.id}>
            <BookCard book={book} />
          </PopularBooksContainer>
        ))}
      </PopularBook>
    </HomeContainer>
  );
}
