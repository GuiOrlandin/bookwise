import Image from "next/image";

import previewImage from "../../assets/login-bookwise.svg";
import { Container, ContainerTest, TextContainer } from "./styles";
import { LoginAuthenticate } from "./components";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
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
  );
}
