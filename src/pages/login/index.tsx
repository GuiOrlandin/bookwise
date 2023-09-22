import Image from "next/image";

import { NextSeo } from "next-seo";

import previewImage from "../../assets/login-bookwise.svg";
import { Container, ContainerTest, TextContainer } from "./styles";
import { LoginAuthenticate } from "./components";

export default function Login() {
  return (
    <>
      <NextSeo
        title="Login | Bookwise"
        description="Logue com sua conta do google ou com a do github, para avaliar os livros ou se prefir pode acessar somente como visitante."
      />
      <Container>
        <Image
          src={previewImage}
          height={912}
          quality={100}
          priority
          alt="Imagem com o logo da bookwise com uma pessoa lendo de fundo"
        ></Image>

        <ContainerTest>
          <TextContainer>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>
          </TextContainer>
          <LoginAuthenticate visitorButtonEnabled />
        </ContainerTest>
      </Container>
    </>
  );
}
