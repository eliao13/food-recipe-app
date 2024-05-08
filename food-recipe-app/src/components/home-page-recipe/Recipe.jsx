import { Link } from "react-router-dom";

export default function Recipe({ recipeData }) {
  const { id, image_url, publisher, title } = recipeData;
  return (
    <article className="recipe-card">
      <img src={image_url} alt={title} />
      <div className="header">
        <p className="text-blue-600">{publisher}</p>
        <h3 className="truncate">{title}</h3>
      </div>
      <Link className="btn" to={`/recipe-item/${id}`}>
        recipe details
      </Link>
    </article>
  );
}
