import Image from "next/image";
import googleIcon from "../../../assets/google-icon.svg";
import githubIcon from "../../../assets/github-icon.svg";
import rocketIcon from "../../../assets/rocket-icon.svg";
import { LoginContainer, AuthContainer, VisitorContainer } from "./styles";

interface Props {
  visitorButtonEnabled?: boolean;
  onLogin: () => void;
}

export function LoginAuthenticate({
  visitorButtonEnabled = false,
  onLogin,
}: Props) {
  return (
    <LoginContainer>
      <AuthContainer>
        <Image src={googleIcon} quality={100} alt="icone do google"></Image>
        <p>Entrar com Google</p>
      </AuthContainer>
      <AuthContainer>
        <Image src={githubIcon} quality={100} alt="icone do google"></Image>
        <p>Entrar com Github</p>
      </AuthContainer>
      {visitorButtonEnabled && (
        <VisitorContainer onClick={onLogin}>
          <Image src={rocketIcon} quality={100} alt="icone do google"></Image>
          <p>Acessar como visitante</p>
        </VisitorContainer>
      )}
    </LoginContainer>
  );
}
