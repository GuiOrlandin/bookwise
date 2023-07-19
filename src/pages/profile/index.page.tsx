import { MagnifyingGlass, User } from "phosphor-react";
import { Sidebar } from "../home/components/sidebar";
import {
  ListOfReadsBooks,
  ProfileContainer,
  ProfileLogoAndTextDescriptionContainer,
  SearchInput,
} from "./styles";
import { ReadBookCard } from "../home/components/ReadBookCard";

export default function Profile() {
  return (
    <ProfileContainer>
      <Sidebar pageSelected="profile" UserAuthenticated={true} />
      <ListOfReadsBooks>
        <ProfileLogoAndTextDescriptionContainer>
          <User size={32} color="#50B2C0" />
          <h1>Perfil</h1>
        </ProfileLogoAndTextDescriptionContainer>
        <SearchInput>
          <input type="text" placeholder="Buscar Livro Avaliado" />
          <button type="submit">
            <MagnifyingGlass size={20} color="#303F73" />
          </button>
        </SearchInput>

        <ReadBookCard />
      </ListOfReadsBooks>
      <div>
        <p> PERFILAQ</p>
      </div>
    </ProfileContainer>
  );
}
