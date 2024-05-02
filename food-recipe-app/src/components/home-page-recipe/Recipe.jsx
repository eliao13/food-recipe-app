import { Button } from "@mui/material";

export default function Recipe({ recipeData }) {
  const { id, image_url, publisher, title } = recipeData;
  return (
    <article>
      <img src={image_url} alt={title} />
      <h4>{publisher}</h4>
      <h3>{title}</h3>
      <Button variant="contained" color="primary" href={`/${id}`}>
        Recipe Details
      </Button>
    </article>
  );
}
