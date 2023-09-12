import { useRouter } from "next/router";
import { AvatarContainer, AvatarImage } from "./styles";

export interface Props {
  ImageUrl: string;
  width?: number;
  height?: number;
  userId?: string;
}

export function Avatar({ ImageUrl, userId, height = 40, width = 40 }: Props) {
  const route = useRouter();

  function handleRedirectToPerfil() {
    route.push(`profile/${userId}`);
  }

  return (
    <AvatarContainer>
      <AvatarImage
        src={ImageUrl}
        width={width}
        height={height}
        quality={100}
        alt=""
        onClick={() => handleRedirectToPerfil()}
      ></AvatarImage>
    </AvatarContainer>
  );
}
