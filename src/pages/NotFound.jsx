import { Link } from "react-router-dom";
import "./NotFound.css";
export default function NotFound() {
  return <main className="not-found"><a href="/" className="not-found-logo">MW.</a><p>404 — PAGE NOT FOUND</p><h1>A little off the path.</h1><p>The page you're looking for may have moved. Let's get you back to something good.</p><div><Link to="/">Back to Home</Link><Link to="/work">Explore My Work</Link></div></main>;
}
