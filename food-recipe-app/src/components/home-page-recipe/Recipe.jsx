import { Link } from "react-router-dom";

export default function Recipe({ recipeData }) {
  const { id, image_url, publisher, title } = recipeData;
  return (
    <article>
      <img src={image_url} alt={title} />
      <h4>{publisher}</h4>
      <h3>{title}</h3>
      <Link to={`/recipe-item/${id}`}>Recipe Details</Link>
    </article>
  );
}
