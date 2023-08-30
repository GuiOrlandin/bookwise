import { AvatarContainer, AvatarImage } from "./styles";

export interface Props {
  ImageUrl: string;
  width?: number;
  height?: number;
}

export function Avatar({ ImageUrl, height = 40, width = 40 }: Props) {
  return (
    <AvatarContainer>
      <AvatarImage
        src={ImageUrl}
        width={width}
        height={height}
        quality={100}
        alt=""
      ></AvatarImage>
    </AvatarContainer>
  );
}
