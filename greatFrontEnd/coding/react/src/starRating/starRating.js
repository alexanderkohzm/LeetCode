import { Star } from "./star/star";
import React, { useState } from "react";

export default function StarRating(props) {
  const { filledStars, maxStars, onHandleClick } = props;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const maxStarsArray = [];
  for (let i = 0; i < maxStars; i++) {
    maxStarsArray.push(i);
  }

  const handleHoveredOver = (value) => {
    setHoveredIndex(value);
  };

  return (
    <div className="container">
      {maxStarsArray.map((star, index) => {
        const baseFilled = index < filledStars;
        return (
          <span
            key={index}
            onMouseEnter={() => handleHoveredOver(index)}
            onMouseLeave={() => handleHoveredOver(null)}
            onClick={() => onHandleClick(index + 1)}
          >
            <Star
              filled={hoveredIndex != null ? index <= hoveredIndex : baseFilled}
            />
          </span>
        );
      })}
    </div>
  );
}
