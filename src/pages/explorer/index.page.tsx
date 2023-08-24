import { ChangeEvent, useContext, useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";

interface FilteredBooks {
  book_id: string;
  categoryId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  created_at: string;
}

export interface Category {
  book_id: string;
  categoryId: string;
  category: {
    name: string;
  };
}
export interface Ratings {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book_id: string;
  user_id: string;
  user?: User;
  book?: Book;
}
export interface Book {
  name: string;
  author: string;
  cover_url: string;
  summary: string;
  total_pages: number;
  created_at: Date;
  id: string;
  avgRating?: number;
  ratings?: Ratings[];
  categories?: Category[];
}

export default function Explorer() {
  const { allBooks, genreList } = useContext(cardBookContext);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [bookList, setBookList] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputContent, setInputContent] = useState<string>("");

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

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const inputContentOnEvent = event.target.value;

    if (!inputContentOnEvent) {
      return setBookList(allBooks);
    }

    setInputContent(inputContentOnEvent);
  }

  function handleInputQuery() {
    const consultedBooks = bookList.filter(
      (book) =>
        book.author.toLowerCase().includes(inputContent.toLowerCase()) ||
        book.name.toLowerCase().includes(inputContent.toLowerCase())
    );

    setBookList(consultedBooks);
    setActiveGenre(null);
  }

  if (loading) {
    return <h1>loading</h1>;
  }

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
            <input
              type="text"
              placeholder="Buscar livro ou autor"
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleInputQuery}>
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
            <BookCard key={book.name} book={book} />
          ))}
        </ListOfBookCards>
      </ExplorerContent>
    </ExplorerContainer>
  );
}
