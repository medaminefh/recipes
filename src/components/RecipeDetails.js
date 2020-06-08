import React from "react";
import { random } from "../App";
const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((a) => (
    <ul key={random()} className="ingredient-list">
      <li className="ingredient-text">{a.text}</li>
      <li className="ingredient-weight">Weight - {Math.round(a.weight)}</li>
    </ul>
  ));
};

export default RecipeDetails;
