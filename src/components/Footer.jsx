import "../App.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/#home" className="footer-logo">
            MW.
          </a>

          <p>Web Developer + Designer</p>
        </div>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/work">Work</a>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a
              href="https://github.com/madwhite97"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="footer-social-icon"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maddie W.</span>

        <span className="footer-credit">
          Designed &amp; developed by{" "}
          <span className="footer-credit-name">Maddie W.</span>{" "}
          <span className="footer-heart">♥</span>
        </span>
      </div>
    </footer>
  );
}