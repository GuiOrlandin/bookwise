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
import { Book, Profile, Ratings } from "../explorer/index.page";
import { api } from "@/lib/axios";
import { BookCard } from "./components/bookCard";
import { useSession } from "next-auth/react";
import { Avaliations } from "./components/avaliations";
import { useRouter } from "next/router";

export default function Home() {
  const session = useSession();
  const userAuthenticated = session.data?.user;
  const route = useRouter();
  const { data: popularBooks } = useQuery<Book[]>(
    ["popular-books"],
    async () => {
      const { data } = await api.get("/books/popularBooks");
      return data.books ?? [];
    }
  );

  const { data: latestRatings } = useQuery<Ratings[]>(
    ["latest-ratings"],
    async () => {
      const { data } = await api.get("/ratings/latest");
      return data.ratings ?? [];
    }
  );

  const { data: lastReadBook } = useQuery<Ratings>(
    ["last-read-book"],
    async () => {
      const { data } = await api.get(
        `/profile/${userAuthenticated?.id}?lastReadBook=${true}`
      );
      return data.userLastReadBook ?? [];
    }
  );

  return (
    <HomeContainer>
      <Sidebar pageSelected="home" />;
      <LastBookReadAndAvaliationListContainer>
        <HomeIndicator>
          <ChartLineUp size={32} color="#50B2C0" />
          Início
        </HomeIndicator>
        {userAuthenticated && (
          <LastReadingsContainer>
            <LastReadingsTextAndSeAllButtonContainer>
              Sua última leitura
              <button>
                Ver todas <CaretRight />
              </button>
            </LastReadingsTextAndSeAllButtonContainer>
            <ReadBookCard profile={false} ratings={lastReadBook} />
          </LastReadingsContainer>
        )}
        <RecentlyReviewedBooks>
          <p>Avaliações mais recentes</p>
          {latestRatings?.map((rating) => (
            <Avaliations
              key={rating.book_id}
              AvaliatioWithoutBookContent={false}
              rating={rating}
            />
          ))}
        </RecentlyReviewedBooks>
      </LastBookReadAndAvaliationListContainer>
      <PopularBook>
        <PopularBookAndSeeAllBooks>
          <p>Livros populares</p>
          <span onClick={() => route.push("/explorer")}>
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
