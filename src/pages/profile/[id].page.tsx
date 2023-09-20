import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, ChangeEvent, useEffect } from "react";
import { api } from "@/lib/axios";

import { Sidebar } from "../home/components/sidebar";
import { Avatar } from "../home/components/avatar";
import { ReadBookCard } from "../home/components/ReadBookCard";
import { Profile, Ratings } from "../explorer/index.page";

import { relativeDateFormatter } from "@/utils/formatter";

import {
  BookOpen,
  BookmarkSimple,
  Books,
  CaretLeft,
  MagnifyingGlass,
  User,
  UserList,
} from "phosphor-react";
import {
  AutorsReads,
  BooksAvaliated,
  CategoryMostRead,
  ListOfReadsBooks,
  NameAndDateMember,
  PagesReades,
  ProfileBackPageLogo,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileLogoAndTextDescriptionContainer,
  ReadsBooksInfoContainer,
  SearchInput,
} from "./styles";

export default function Profile() {
  const router = useRouter();
  const userId = router.query.id as string;
  const session = useSession();
  const userAuthenticated = session.data?.user;

  const [inputContent, setInputContent] = useState<string>("");
  const [listOfRatings, setListOfRatings] = useState<Ratings[]>();

  const isOwnProfile = userId === userAuthenticated?.id;

  const { data: profileInfo, isLoading } = useQuery<Profile>(
    ["profile-info"],
    async () => {
      const { data } = await api.get(`/profile/${userId}`);
      return data.ProfileWithPageRead ?? [];
    },
    {
      enabled: !!userId,
    }
  );

  useEffect(() => {
    setListOfRatings(profileInfo?.ratings);
    console.log(profileInfo);
  }, [profileInfo]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const inputContentOnEvent = event.target.value;

    if (!inputContentOnEvent && listOfRatings) {
      return setListOfRatings(profileInfo?.ratings);
    }
    setInputContent(inputContentOnEvent);
  }

  function handleInputQuery() {
    const rateddBooks = listOfRatings?.filter((rating) =>
      rating.book?.name.toLowerCase().includes(inputContent.toLowerCase())
    );

    setListOfRatings(rateddBooks);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProfileContainer>
      <Sidebar pageSelected="profile" UserAuthenticated={true} />
      <ListOfReadsBooks>
        {!isOwnProfile ? (
          <ProfileBackPageLogo>
            <h1 onClick={() => router.back()}>
              <CaretLeft />
              Voltar
            </h1>
          </ProfileBackPageLogo>
        ) : (
          <ProfileLogoAndTextDescriptionContainer>
            <User size={32} color="#50B2C0" />
            <h1>Perfil</h1>
          </ProfileLogoAndTextDescriptionContainer>
        )}
        <SearchInput>
          <input
            type="text"
            placeholder="Buscar Livro Avaliado"
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleInputQuery}>
            <MagnifyingGlass size={20} color="#303F73" />
          </button>
        </SearchInput>

        {listOfRatings?.map((rating) => (
          <ReadBookCard key={rating.book_id} profile={true} ratings={rating} />
        ))}
      </ListOfReadsBooks>
      <ProfileInfoContainer>
        <Avatar
          ImageUrl={profileInfo?.avatar_url as string}
          height={70}
          width={70}
          isPerfil={true}
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
