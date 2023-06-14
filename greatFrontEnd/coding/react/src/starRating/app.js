import StarRating from "./starRating";

import "./styles.css";

import { useState } from "react";
// maximum number of stars
// number of currently filled stars

// when star is clicked, it is filled along with all the stars to its left

// when the user hovers over the stars, all the stars under teh cursor and its left are filled

// the stars which need to be filled during hover take priority over existing filled state
// if the cursor leaves the widget and no new selection is made, the appropriate stars revert to the filled state before the hovering

// make the star widget reusable such taht multiple instances can be rendered within the same page

export default function App() {
  const [filledStars, setFilledStars] = useState(3);

  const [maxStars, setMaxStars] = useState(5);

  return (
    <div className="container">
      <StarRating
        filledStars={filledStars}
        maxStars={maxStars}
        onHandleClick={setFilledStars}
      />
    </div>
  );
}
