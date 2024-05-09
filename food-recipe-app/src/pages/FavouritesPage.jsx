import { useEffect, useState } from "react";
import Recipe from "../components/home-page-recipe/Recipe";
import { Grid } from "@mui/material";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setFavourites(savedRecipes);
  }, []);

  return (
    <section className="favourites-page">
      {favourites && favourites.length ? (
        <Grid container spacing={2} columns={4}>
          {favourites.map((recipe) => {
            return (
              <Grid item key={recipe.id} xs={4} sm={2} md={1}>
                <Recipe recipeData={recipe} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <h1 className="text-center">
          No favourites found. Please add reciepes to favourites.
        </h1>
      )}
    </section>
  );
}
