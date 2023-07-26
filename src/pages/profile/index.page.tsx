import Image from "next/image";

import AvatarImg from "../../assets/avatarimg.svg";
import {
  BookOpen,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from "phosphor-react";
import { Sidebar } from "../home/components/sidebar";
import {
  AutorsReads,
  BooksAvaliated,
  CategoryMostRead,
  ListOfReadsBooks,
  NameAndDateMember,
  PagesReades,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileLogoAndTextDescriptionContainer,
  ReadsBooksInfoContainer,
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

        <ReadBookCard profile={true} />
      </ListOfReadsBooks>
      <ProfileInfoContainer>
        <Image src={AvatarImg} alt=""></Image>
        <NameAndDateMember>
          <h2>Cristofer Rosser</h2>
          <span>membro desde 2019</span>
        </NameAndDateMember>
        <ReadsBooksInfoContainer>
          <PagesReades>
            <BookOpen color="#50B2C0" size={32} />
            <div>
              <p>853</p>
              <span>Páginas lidas</span>
            </div>
          </PagesReades>
          <BooksAvaliated>
            <Books color="#50B2C0" size={32} />
            <div>
              <p>10</p>
              <span>Livros avaliados</span>
            </div>
          </BooksAvaliated>
          <AutorsReads>
            <UserList color="#50B2C0" size={32} />
            <div>
              <p>8</p>
              <span>Autores lidos</span>
            </div>
          </AutorsReads>
          <CategoryMostRead>
            <BookmarkSimple color="#50B2C0" size={32} />
            <div>
              <p>Computação</p>
              <span>Categoria mais lida</span>
            </div>
          </CategoryMostRead>
        </ReadsBooksInfoContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  );
}
