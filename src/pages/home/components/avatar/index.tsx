import { AvatarContainer, AvatarImage } from "./styles";

export interface Props {
  ImageUrl: string;
}

export function Avatar({ ImageUrl }: Props) {
  return (
    <AvatarContainer>
      <AvatarImage
        src={ImageUrl}
        width={40}
        height={40}
        quality={100}
        alt=""
      ></AvatarImage>
    </AvatarContainer>
  );
}
