import Recipe from "../components/home-page-recipe/Recipe";

export default function HomePage({ recipes, searchWords }) {
  return (
    <section className="home-page">
      {recipes && recipes.length > 0 ? (
        <div className="recipes">
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} recipeData={recipe} />;
          })}
        </div>
      ) : searchWords.trim() !== "" && recipes && recipes.length === 0 ? (
        <h1>No recipes found. Please search something else.</h1>
      ) : (
        <h1>Nothing to show. Please search something.</h1>
      )}
    </section>
  );
}
