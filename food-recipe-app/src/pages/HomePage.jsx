import { Grid } from "@mui/material";
import Recipe from "../components/home-page-recipe/Recipe";

export default function HomePage({ recipes, searchWords }) {
  return (
    <section className="home-page">
      {recipes && recipes.length > 0 ? (
        // <div className="recipes">
        <Grid container spacing={2} columns={4}>
          {recipes.map((recipe) => {
            return (
              <Grid item key={recipe.id} xs={4} sm={2} md={1}>
                <Recipe recipeData={recipe} />
              </Grid>
            );
          })}
        </Grid>
      ) : searchWords.trim() !== "" && recipes && recipes.length === 0 ? (
        <h1 className="text-center">
          No recipes found. Please search something else.
        </h1>
      ) : (
        <h1 className="text-center">
          Nothing to show. Please search something.
        </h1>
      )}
    </section>
  );
}
