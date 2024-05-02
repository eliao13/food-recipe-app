async function fetchAllRecipes(searchWords) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchWords}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchAllRecipes;
