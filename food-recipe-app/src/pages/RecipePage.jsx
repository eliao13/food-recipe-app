import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRecipe from "../api/fetchRecipe";
import { Button } from "@mui/material";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchRecipe(id).then((data) => {
      setRecipeData(data.data.recipe);
    });
  }, [id]);

  return (
    <section className="recipe">
      <article>
        <img src={recipeData.image_url} alt={recipeData.title} />
      </article>
      <article>
        <h3>{recipeData.publisher}</h3>
        <h1>{recipeData.title}</h1>
        <Button variant="contained" color="primary">
          Add to favourites
        </Button>
        <h2>Ingredients:</h2>
        <ul>
          {recipeData.ingredients &&
            recipeData.ingredients.map((ingredient, index) => {
              return (
                <li key={index}>
                  {`
                  ${ingredient.quantity}
                  ${ingredient.unit}
                  ${ingredient.description}
                  `}
                </li>
              );
            })}
        </ul>
      </article>
    </section>
  );
}
