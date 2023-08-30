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
import { useQuery } from "@tanstack/react-query";
import { Profile } from "../../pages/explorer/index.page";
import { api } from "@/lib/axios";
import { relativeDateFormatter } from "@/utils/formatter";
import { Avatar } from "../home/components/avatar";
import { ratings } from "../../../prisma/constants/ratings";

export default function Profile() {
  const { data: profileInfo } = useQuery<Profile>(
    ["profile-info"],
    async () => {
      const { data } = await api.get("/profile");
      return data.ProfileWithPageRead ?? [];
    }
  );
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

        {profileInfo?.ratings?.map((rating) => (
          <ReadBookCard key={rating.book_id} profile={true} ratings={rating} />
        ))}
      </ListOfReadsBooks>
      <ProfileInfoContainer>
        <Avatar
          ImageUrl={`/${profileInfo?.avatar_url}`}
          height={70}
          width={70}
        />
        <NameAndDateMember>
          <h2>{profileInfo?.name}</h2>
          <span>
            {relativeDateFormatter(profileInfo?.created_at as string)}
          </span>
        </NameAndDateMember>
        <ReadsBooksInfoContainer>
          <PagesReades>
            <BookOpen color="#50B2C0" size={32} />
            <div>
              <p>{profileInfo?.total_pages}</p>
              <span>Páginas lidas</span>
            </div>
          </PagesReades>
          <BooksAvaliated>
            <Books color="#50B2C0" size={32} />
            <div>
              <p>{profileInfo?.ratings?.length}</p>
              <span>Livros avaliados</span>
            </div>
          </BooksAvaliated>
          <AutorsReads>
            <UserList color="#50B2C0" size={32} />
            <div>
              <p>{profileInfo?.ratings?.length}</p>
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
