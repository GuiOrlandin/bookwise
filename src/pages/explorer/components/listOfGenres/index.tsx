import { ListOfGenresContainer } from "./styles";

interface Props {
  genre: string;
  onClick: () => void;
  isSelected: boolean;
}

export function ListOfGenres({ genre, onClick, isSelected }: Props) {
  return (
    <ListOfGenresContainer IsClicked={isSelected} onClick={onClick}>
      {genre}
    </ListOfGenresContainer>
  );
}
