export default function Home({ recipes, searchWords }) {
  return (
    <section className="home-page">
      {recipes && recipes.length > 0 ? (
        <div className="recipes">
          {recipes.map((recipe, index) => {
            return (
              <div key={index} className="recipe">
                <img src={recipe.image_url} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </div>
            );
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
