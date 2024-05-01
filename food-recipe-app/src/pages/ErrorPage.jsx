import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <p>Page not found.</p>
      <Link to="/">Back to home page.</Link>
    </div>
  );
}
