import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Recipe({ recipeData, loading }) {
  const { id, image_url, publisher, title } = recipeData || {};
  return (
    <article className="recipe-card">
      {loading ? (
        <>
          <Skeleton
            variant="rectangular"
            animation="wave"
            height={250}
            sx={{ borderRadius: "0.5rem" }}
          />
          <Skeleton animation="wave" width="40%" />
          <Skeleton animation="wave" />
        </>
      ) : (
        <>
          <img src={image_url} alt={title} />
          <div className="header">
            <p className="text-blue-600">{publisher}</p>
            <h3 className="truncate">{title}</h3>
          </div>
          <Link className="btn" to={`/recipe-item/${id}`}>
            recipe details
          </Link>
        </>
      )}
    </article>
  );
}
