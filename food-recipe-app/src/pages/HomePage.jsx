import { Grid } from "@mui/material";
import Recipe from "../components/home-page-recipe/Recipe";

export default function HomePage({ recipes, searchWords, loading }) {
  return (
    <section className="home-page">
      {recipes && recipes.length > 0 ? (
        <Grid container spacing={2} columns={4}>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Grid item key={index} xs={4} sm={2} md={1}>
                  <Recipe loading={loading} />
                </Grid>
              ))
            : recipes.map((recipe) => (
                <Grid item key={recipe.id} xs={4} sm={2} md={1}>
                  <Recipe recipeData={recipe} loading={loading} />
                </Grid>
              ))}
        </Grid>
      ) : searchWords.trim() !== "" && recipes && recipes.length === 0 ? (
        <h1 className="text-center">
          No recipes found for &quot;{searchWords}&quot;. Please search
          something else.
        </h1>
      ) : (
        <h1 className="text-center">
          Nothing to show. Please search something.
        </h1>
      )}
    </section>
  );
}
