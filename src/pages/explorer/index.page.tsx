import { useState } from "react";
import { BookCard } from "../home/components/bookCard";
import { Sidebar } from "../home/components/sidebar";
import { ListOfGenres } from "./components/listOfGenres";
import {
  ExplorerContainer,
  ExplorerContent,
  ExplorerIndicator,
  ExplorerIndicatorAndSearchBookAndAuthor,
  ListOfBookCards,
  ListOfGenresContainer,
  SearchInput,
} from "./styles";
import { Binoculars, MagnifyingGlass } from "phosphor-react";

export default function Explorer() {
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const genreList = ["Computação", "tudo", "outros", "romance"];

  function handleClick(genre: string) {
    setActiveGenre(genre === activeGenre ? null : genre);
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
            <input type="text" placeholder="Buscar livro ou autor" />
            <button type="submit">
              <MagnifyingGlass size={20} color="#303F73" />
            </button>
          </SearchInput>
        </ExplorerIndicatorAndSearchBookAndAuthor>
        <ListOfGenresContainer>
          {genreList.map((genre) => {
            return (
              <ListOfGenres
                isSelected={genre === activeGenre}
                key={genre}
                genre={genre}
                onClick={() => handleClick(genre)}
              />
            );
          })}
        </ListOfGenresContainer>
        <ListOfBookCards>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </ListOfBookCards>
      </ExplorerContent>
    </ExplorerContainer>
  );
}
