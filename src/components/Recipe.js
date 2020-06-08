import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
const Recipe = ({
  recipe: {
    recipe: { label, image, url, ingredients },
  },
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow((prev) => !prev)}>Ingredients</button>
      {show ? <RecipeDetails ingredients={ingredients} /> : null}
    </div>
  );
};

export default Recipe;
