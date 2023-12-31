import React, { useState } from "react";

// Implemented this code snippet by "morskibg"from the comments of https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6 
// in order to reset rating and hover upon double click.

// morskibg

// Hi, good job ! Just to suggest option to reset rating back to 0 thru dbl click on any star :
// onDoubleClick={() => {
// setRating(0);
// setHover(0);
// }}

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
             type="button"
             key={index}
             className={index <= (hover || rating) ? "on" : "off"}
             onClick={() => setRating(index)}
             onMouseEnter={() => setHover(index)}
             onMouseLeave={() => setHover(rating)}
             onDoubleClick={() => {setRating(0);
                                   setHover(0);}}
            >
             <span className="star">&#9733;</span>
            </button>  
          );
        })}
      </div>
    );
};

export default StarRating;