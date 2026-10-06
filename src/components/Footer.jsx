import "../App.css";
import { FaGithub, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/#home" className="footer-logo">
            MW.
          </Link>

          <p>Web Developer + Designer</p>
        </div>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/work">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#process">Process</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer-socials">
            <Link
              to="https://github.com/madwhite97"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-social-icon"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maddie W.</span>

        <span className="footer-credit">
          Designed &amp; developed by{" "}
          <span className="footer-credit-name">Maddie W.</span>{" "}
          <FaHeart className="footer-heart" aria-hidden="true" />
        </span>
      </div>
    </footer>
  );
}