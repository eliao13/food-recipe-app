async function fetchRecipe(recipeId) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchRecipe;
