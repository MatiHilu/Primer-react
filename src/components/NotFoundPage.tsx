import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      404 not found
      <Link to="/">
        <h1>Go to home</h1>
      </Link>
      ;
    </div>
  );
}
