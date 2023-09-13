import { useRouter } from "next/router";
import { AvatarContainer, AvatarImage, AvatarImageOnPerfil } from "./styles";

export interface Props {
  ImageUrl: string;
  width?: number;
  height?: number;
  userId?: string;
  isPerfil?: boolean;
}

export function Avatar({
  ImageUrl,
  userId,
  isPerfil,
  height = 40,
  width = 40,
}: Props) {
  const route = useRouter();

  function handleRedirectToPerfil() {
    route.push(`profile/${userId}`);
  }

  return (
    <AvatarContainer>
      {isPerfil ? (
        <AvatarImageOnPerfil
          src={ImageUrl}
          width={width}
          height={height}
          quality={100}
          alt=""
        ></AvatarImageOnPerfil>
      ) : (
        <AvatarImage
          src={ImageUrl}
          width={width}
          height={height}
          quality={100}
          alt=""
          onClick={() => handleRedirectToPerfil()}
        ></AvatarImage>
      )}
    </AvatarContainer>
  );
}
