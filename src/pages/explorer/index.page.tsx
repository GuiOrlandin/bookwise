import { useContext, useEffect, useState } from "react";
import { BookCard } from "../home/components/bookCard";
import { Sidebar } from "../home/components/sidebar";
import {
  ExplorerContainer,
  ExplorerContent,
  ExplorerIndicator,
  ExplorerIndicatorAndSearchBookAndAuthor,
  ListOfBookCards,
  ListOfGenres,
  ListOfGenresContainer,
  SearchInput,
} from "./styles";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import { api } from "@/lib/axios";
import { cardBookContext } from "@/context/cardBookContext";

interface FilteredBooks {
  book_id: string;
  categoryId: string;
}

export interface Ratings {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book_id: string;
  user_id: string;
}
interface Book {
  name: string;
  author: string;
  cover_url: string;
  summary: string;
  total_pages: number;
  created_at: Date;
  id: string;
  ratings?: Ratings[];
}

export default function Explorer() {
  const { allBooks, genreList } = useContext(cardBookContext);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [bookList, setBookList] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function handleGetBooksByCategory(categoryId: string) {
    try {
      const newGenre = activeGenre === categoryId ? null : categoryId;

      setActiveGenre(newGenre);
      console.log(activeGenre);

      if (!newGenre) {
        setBookList(allBooks);

        return;
      }

      const books = await api.get(`/books?categoryId=${categoryId}`);
      const filteredBooks = await books.data.filteredBooks.filter(
        (filteredBook: FilteredBooks) => filteredBook.categoryId === categoryId
      );

      const filteredBooksList = allBooks.filter((book: Book) =>
        filteredBooks.some((filteredBooks: FilteredBooks) => {
          return filteredBooks.book_id === book.id;
        })
      );

      setBookList(filteredBooksList);

      console.log(bookList);
    } catch (error) {
      console.error("List Books dont found!", error);
    }
  }

  useEffect(() => {
    if (allBooks.length > 0) {
      setBookList(allBooks);
      setLoading(false);
    }
  }, [allBooks]);

  // if (loading) {
  //   return <h1>loading</h1>;
  // }

  return (
    <ExplorerContainer>
      <Sidebar pageSelected="explorer" />
      <ExplorerContent>
        <ExplorerIndicatorAndSearchBookAndAuthor>
          <ExplorerIndicator>
            <Binoculars size={32} color="#50B2C0" />
            Explorar
          </ExplorerIndicator>

          <SearchInput>
            <input type="text" placeholder="Buscar livro ou autor" />
            <button type="submit">
              <MagnifyingGlass size={20} color="#303F73" />
            </button>
          </SearchInput>
        </ExplorerIndicatorAndSearchBookAndAuthor>
        <ListOfGenresContainer>
          {genreList.map((genre) => (
            <ListOfGenres
              key={genre.name}
              IsClicked={genre.id === activeGenre}
              onClick={() => handleGetBooksByCategory(genre.id)}
            >
              {genre.name}
            </ListOfGenres>
          ))}
        </ListOfGenresContainer>
        <ListOfBookCards>
          {bookList.map((book) => (
            <BookCard
              key={book.name}
              author={book.author}
              cover_url={book.cover_url}
              name={book.name}
              total_pages={book.total_pages}
              created_at={book.created_at}
              ratings={book.ratings}
            />
          ))}
        </ListOfBookCards>
      </ExplorerContent>
    </ExplorerContainer>
  );
}
