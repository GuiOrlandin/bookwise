import Image from "next/image";
import googleIcon from "../../../assets/google-icon.svg";
import githubIcon from "../../../assets/github-icon.svg";
import rocketIcon from "../../../assets/rocket-icon.svg";
import {
  LoginContainer,
  VisitorContainer,
  GoogleAuthContainer,
  GitHubAuthContainer,
} from "./styles";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface Props {
  visitorButtonEnabled?: boolean;
  callbackUrl?: string;
}

export function LoginAuthenticate({
  visitorButtonEnabled = false,
  callbackUrl = "/home",
}: Props) {
  const router = useRouter();

  function handleAuthenticate(provider?: string) {
    if (provider !== "visitor") {
      signIn(provider, {
        callbackUrl,
      });
    }

    router.push("/home");
  }
  return (
    <LoginContainer>
      <GoogleAuthContainer onClick={() => handleAuthenticate("google")}>
        <Image src={googleIcon} quality={100} alt="icone do google"></Image>
        <p>Entrar com Google</p>
      </GoogleAuthContainer>
      <GitHubAuthContainer onClick={() => handleAuthenticate("github")}>
        <Image src={githubIcon} quality={100} alt="icone do github"></Image>
        <p>Entrar com Github</p>
      </GitHubAuthContainer>
      {visitorButtonEnabled && (
        <VisitorContainer onClick={() => handleAuthenticate("visitor")}>
          <Image src={rocketIcon} quality={100} alt=""></Image>
          <p>Acessar como visitante</p>
        </VisitorContainer>
      )}
    </LoginContainer>
  );
}
