import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Work.css";
import Footer from "../components/Footer";

import workHero from "../assets/work/work-hero.jpg";
import allOut from "../assets/work/work-all-out.jpg";
import ladybug from "../assets/work/work-ladybug.jpg";
import polished from "../assets/work/work-polished.jpg";
import kulorwerkz from "../assets/work/work-kulorwerkz.jpg";
import tla from "../assets/work/work-tla.jpg";
import countryRose from "../assets/work/work-country-rose.jpg";
import workFlower from "../assets/work/work-flower.svg";
import greenPatch from "../assets/work/work-green-patch.svg";
import aboutBackground from "../assets/about-background.jpg";

const projects = [
    {
        number: "01",
        title: "All Out Services",
        category: "CONSTRUCTION / LAND SERVICES",
        description:
            "A bold, responsive website built for a construction and land services company with strong visuals, usability, and local SEO.",
        image: allOut,
        url: "https://alloutforestry.com",
    },
    {
        number: "02",
        title: "Ladybug Lane Crochet",
        category: "ECOMMERCE / SMALL BUSINESS",
        description:
            "A playful, handcrafted website for a crochet business featuring custom design, product galleries, and an inviting brand experience.",
        image: ladybug,
        url: "https://ladybug-lane-crochet.vercel.app",
    },
    {
        number: "03",
        title: "Polished by Leydi",
        category: "NAIL SALON / SERVICE BUSINESS",
        description:
            "A clean and elegant website for a nail artist with a modern layout, service details, and a polished portfolio experience.",
        image: polished,
        url: "https://polished-by-leydi.vercel.app",
    },
    {
        number: "04",
        title: "Kulorwerkz with Thomasina",
        category: "NAIL ARTIST / PORTFOLIO",
        description:
            "A custom portfolio website for a nail artist featuring a sleek design, gallery lightbox, responsive layouts, and SEO optimization.",
        image: kulorwerkz,
        url: "https://kulorwerkz.com",
    },
    {
        number: "05",
        title: "TLA Mobile Tire Service",
        category: "AUTOMOTIVE / SERVICE BUSINESS",
        description:
            "A professional, high-contrast website for a mobile tire service with clear calls to action, service information, and customer reviews.",
        image: tla,
        url: "https://tlamobiletire.com",
    },
    {
        number: "06",
        title: "Country Rose Cakes & Candy",
        category: "BAKERY / SMALL BUSINESS",
        description:
            "A warm, inviting website created for a home bakery with custom branding, product features, specialties, and a photo-forward design.",
        image: countryRose,
        url: "https://country-rose-cakes-and-candies.vercel.app",
    },
];

export default function Work() {
    return (
        <main className="work-page">

            {/* NAV */}
            <nav className="work-nav">
                <Link to="/" className="work-logo">
                    MW.
                </Link>

                <div className="work-nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/#about">ABOUT</Link>
                    <Link to="/#services">SERVICES</Link>
                    <Link to="/#process">PROCESS</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>

                <div className="work-nav-actions">
                    <a
                        href="https://github.com/madwhite97"
                        target="_blank"
                        rel="noreferrer"
                        className="work-github"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <Link to="/contact" className="work-contact-button">
                        Let's Work Together
                        <FiArrowUpRight />
                    </Link>
                </div>
            </nav>

            {/* HERO */}
            <section
                className="work-hero"
                style={{ backgroundImage: `url(${workHero})`}}
            >
                <div className="work-hero-overlay" />

                <motion.div
                    className="work-hero-content"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="work-page-label">
                        <span>01</span>
                        <span className="work-label-line" />
                        <span>WORK</span>
                    </div>

                    <h1 className="work-hero-title">
                        <span>A CLOSER LOOK</span>
                        <br className="work-title-break" />
                        <span className="work-title-second">
                            AT <em>MY WORK.</em>
                        </span>
                    </h1>

                    <p>
                        A collection of websites designed and devleoped for businesses, brands, and a few ideas I simply wanted to bring to life.
                    </p>

                    <a href="/contact"                 className="work-hero-button">
                        Let's Work Together
                        <FiArrowUpRight />
                    </a>
                </motion.div>

                <div className="work-hero-note">
                    Websites
                    <br />
                    Brands
                    <br />
                    Ideas ♡
                    <br />
                    <span>and everything</span>
                    <br />
                    <span>in between</span>
                </div>
            </section>

            {/* PROJECTS */}
            <section
                className="work-projects"
                style={{ backgroundImage: `url(${aboutBackground})` }}
            >
                <div className="work-project-grid">
                    {projects.map((project, index) => (
                        <motion.article
                            className="work-project-card"
                            key={project.title}
                            initial={{ opacity: 0, y: 45 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.65,
                                delay: (index % 2) * 0.08,
                            }}
                        >
                            <div className="work-card-copy">
                                <div className="work-card-number">
                                    <span>{project.number}</span>
                                    <span />
                                </div>

                                <h2>{project.title}</h2>

                                <div className="work-card-category">
                                    {project.category}
                                </div>

                                <p>{project.description}</p>

                                <a
                                    href={project.url}
                                    target={project.url !== "#" ? "_blank" : undefined}
                                    rel={project.url !== "#" ? "noreferrer" : undefined}
                                    className="work-card-button"
                                >
                                    View Project
                                    <FiArrowUpRight />
                                </a>
                            </div>

                            <div className="work-card-image-wrap">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project artwork`}
                                    className={`work-card-image ${
                                        project.title === "Country Rose Cakes & Candy"
                                        ? "country-rose-image"
                                        : ""
                                    }`}
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* FUTURE PROJECT */}
                <motion.div
                    className="future-project"
                    initial={{ opacity: 0, y: 35 }}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={workFlower}
                        alt=""
                        className="future-flower"
                        aria-hidden="true"
                    />

                    <div className="future-copy">
                        <div className="work-card-number">
                            <span>07</span>
                            <span />
                        </div>

                        <h2>Something New</h2>

                        <div className="work-card-category">
                            COMING SOON
                        </div>

                        <p>
                            I'm always working on new projects. Check back soon to see what's next.
                        </p>
                    </div>

                    <div className="future-art">
                        <img
                            src={greenPatch}
                            alt=""
                            aria-hidden="true"
                        />

                        <div className="future-art-copy">
                            <p>
                                NEW PROJECT
                                <br />
                                COMING SOON
                            </p>
                        </div>

                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}