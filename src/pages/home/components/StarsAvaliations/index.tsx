import { Star } from "phosphor-react";
import { Stars } from "./styles";

export function StarsAvaliations() {
  const starsAvaliations = Array.from(Array(5)).map((_, index) => {
    return <Star key={index} weight="fill" />;
  });

  return <Stars>{starsAvaliations}</Stars>;
}
