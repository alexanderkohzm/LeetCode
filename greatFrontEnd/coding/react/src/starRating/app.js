// import StarRating from "./starRating";

// import "./styles.css";

// import { useState } from "react";
// // maximum number of stars
// // number of currently filled stars

// // when star is clicked, it is filled along with all the stars to its left

// // when the user hovers over the stars, all the stars under teh cursor and its left are filled

// // the stars which need to be filled during hover take priority over existing filled state
// // if the cursor leaves the widget and no new selection is made, the appropriate stars revert to the filled state before the hovering

// // make the star widget reusable such taht multiple instances can be rendered within the same page

// export default function App() {
//   const [filledStars, setFilledStars] = useState(3);

//   const [maxStars, setMaxStars] = useState(5);

//   return (
//     <div className="container">
//       <StarRating
//         filledStars={filledStars}
//         maxStars={maxStars}
//         onHandleClick={setFilledStars}
//       />
//     </div>
//   );
// }

import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

import "./styles.css";

export default function App() {
  const white = "#FFFFFF";
  const grey = "#888";
  const red = "#f00";

  const [heartColour, setHeartColour] = useState(white);
  const [heartOutlineColour, setHeartOutlineColour] = useState(grey);
  const [textColour, setTextColour] = useState(grey);
  const [buttonColour, setButtonColour] = useState(white);
  const [buttonOutlineColour, setButtonOutlineColour] = useState(grey);
  const [isHovered, setIsHovered] = useState();
  const [spinnerColour, setSpinnercolour] = useState(grey);
  const [isLoading, setIsLoading] = useState();
  const [like, setLike] = useState(false);

  const setDefaultColour = () => {
    setHeartColour(white);
    setHeartOutlineColour(grey);
    setButtonColour(white);
    setTextColour(grey);
  };

  const setHoverColour = () => {
    setHeartColour(white);
    setHeartOutlineColour(red);
    setTextColour(red);
    setButtonOutlineColour(red);
  };

  const setLikedColour = () => {
    setHeartColour(red);
    setHeartOutlineColour(white);
    setButtonColour(red);
    setTextColour(white);
  };

  const setLoadingColour = (isLike) => {
    if (isLike === true) {
      setSpinnercolour(grey);
      setButtonColour(white);
      setTextColour(grey);
    } else {
      setSpinnercolour(white);
      setButtonColour(red);
      setTextColour(white);
    }
  };

  const handleButtonClick = async () => {
    const value = like ? "like" : "unlike";
    const data = {
      action: value,
    };
    // make a POST request
    const url = `https://www.greatfrontend.com/api/questions/like-button`;
    setIsLoading(true);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("this is response: ", response);
    if (response.status == 200) {
      console.log("I am here in 200, like: ", like);
      setIsLoading(false);
      if (!like) {
        setLikedColour();
        setLike(!like);
      } else {
        setDefaultColour();
        setLike(!like);
      }
      return;
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <button
          style={{
            backgroundColor: buttonColour,
            borderColor: buttonOutlineColour,
          }}
        >
          <SpinnerIcon /> Like
        </button>
      ) : (
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: buttonColour,
            borderColor: buttonOutlineColour,
            color: textColour,
          }}
        >
          <HeartIcon /> Like
        </button>
      )}
    </div>
  );
}
