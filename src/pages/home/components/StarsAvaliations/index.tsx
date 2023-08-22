import { Star } from "phosphor-react";
import { Stars } from "./styles";
import { useState } from "react";

interface Props {
  avgRating?: number;
}

export function StarsAvaliations({ avgRating }: Props) {
  const [starsFilled, setStarsFilled] = useState<number>(-1);
  const [previewValue, setPreviewValue] = useState<number>();
  const stars: number[] = [...(new Array(5).keys() as any)];
  const isEditable = avgRating != undefined ? false : true;
  const ratinValue = isEditable ? previewValue : avgRating;

  function handleItemClick(index: number) {
    setStarsFilled(index);
    console.log(avgRating);
  }

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
        <div onClick={() => handleItemClick(index)} key={index}>
          <Star
            weight={index <= ratinValue! ? "fill" : undefined}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseEnter(starsFilled)}
          />
        </div>
      ))}
    </Stars>
  );
}
