import { Star } from "phosphor-react";
import { Stars } from "./styles";
import { useState } from "react";

interface Props {
  avgRating?: number;
  starsFilled?: number;
  handleItemClick?: (index: number) => void;
}

export function StarsAvaliations({
  avgRating,
  handleItemClick,
  starsFilled,
}: Props) {
  const [previewValue, setPreviewValue] = useState<number>();
  const stars: number[] = [...(new Array(5).keys() as any)];
  const isEditable = avgRating != undefined ? false : true;
  const ratinValue = isEditable ? previewValue : avgRating;

  function handleMouseEnter(value: number) {
    if (isEditable) {
      setPreviewValue(value);
      console.log(value);
      console.log(isEditable);
    }
  }

  return (
    <Stars>
      {stars.map((index) => (
        <div onClick={() => handleItemClick?.(index)} key={index}>
          <Star
            weight={index <= ratinValue! ? "fill" : undefined}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseEnter(starsFilled as number)}
          />
        </div>
      ))}
    </Stars>
  );
}
