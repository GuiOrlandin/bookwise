import { ChangeEvent, useEffect, useState } from "react";
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
import { useQuery } from "@tanstack/react-query";

interface FilteredBooks {
  book_id: string;
  categoryId: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  created_at: string;
  ratings?: Ratings[];
  total_pages?: number;
  mostReadCategory?: string;
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
  user?: Profile;
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
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [bookList, setBookList] = useState<Book[]>([]);
  const [inputContent, setInputContent] = useState<string>("");

  const { data: books } = useQuery<Book[]>(["list-books"], async () => {
    const { data } = await api.get(`/books`);
    return data.booksWithAvgRating ?? [];
  });

  const { data: genres } = useQuery<Book[]>(["list-categories"], async () => {
    const { data } = await api.get("/books/categories");
    return data.ListOfCategorys ?? [];
  });

  useEffect(() => {
    setBookList(books!);
  }, [books]);

  async function handleGetBooksByCategory(categoryId: string) {
    try {
      const newGenre = activeGenre === categoryId ? null : categoryId;

      setActiveGenre(newGenre);

      if (!newGenre && books) {
        setBookList(books);

        return;
      }

      const booksOnCategory = await api.get(`/books?categoryId=${categoryId}`);
      const filteredBooks = await booksOnCategory.data.filteredBooks.filter(
        (filteredBook: FilteredBooks) => filteredBook.categoryId === categoryId
      );

      const filteredBooksList = books?.filter((book: Book) =>
        filteredBooks.some((filteredBooks: FilteredBooks) => {
          return filteredBooks.book_id === book.id;
        })
      );

      setBookList(filteredBooksList!);
    } catch (error) {
      console.error("List Books dont found!", error);
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const inputContentOnEvent = event.target.value;

    if (!inputContentOnEvent && books) {
      return setBookList(books);
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
          {genres?.map((genre) => (
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
          {bookList?.map((book) => (
            <BookCard key={book.name} book={book} explorer={true} />
          ))}
        </ListOfBookCards>
      </ExplorerContent>
    </ExplorerContainer>
  );
}
