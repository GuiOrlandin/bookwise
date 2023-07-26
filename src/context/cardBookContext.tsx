import { api } from "@/lib/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Book {
  name: string;
  author: string;
  cover_url: string;
  summary: string;
  total_pages: number;
  created_at: Date;
  id: string;
}

interface Category {
  name: string;
  id: string;
}

interface CardBookContextType {
  genreList: Category[];
  allBooks: Book[];
  fetchInitialData: () => Promise<void>;
}
interface CartContextProviderProps {
  children: ReactNode;
}

export const cardBookContext = createContext({} as CardBookContextType);

export function CardBookContextProvider({
  children,
}: CartContextProviderProps) {
  const [genreList, setGenreList] = useState<Category[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  async function fetchInitialData() {
    try {
      const books = await api.get("/books");
      const categorys = await api.get("/books/categories");
      setAllBooks(books.data.listOfBooks);
      setGenreList(categorys.data.ListOfCategorys);
    } catch {
      console.log("error fetching initial data");
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <cardBookContext.Provider value={{ genreList, allBooks, fetchInitialData }}>
      {children}
    </cardBookContext.Provider>
  );
}
