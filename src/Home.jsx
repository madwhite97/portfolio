import "./App.css";
import Footer from "./components/Footer";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroBackground from "./assets/hero.webp";
import allOutLaptop from "./assets/all-out-laptop.svg";
import ladybugIpad from "./assets/ladybug-lane-ipad.svg";
import polishedPhone from "./assets/polished-by-leydi-phone.webp";
import workLeaf from "./assets/work/work-leaf.svg";
import allOutScreenshot from "./assets/all-out-services-hero.webp";
import featuredWorkRocks from "./assets/featured-work-rocks.svg";
import projectLeaf from "./assets/project-leaf.svg";
import kulorwerkzCard from "./assets/kulorwerkz-card.svg";
import ladybugLaneCard from "./assets/ladybug-lane-hero.svg";
import polishedByLeydiCard from "./assets/polished-by-leydi-hero.svg";
import kulorwerkzScreenshot from "./assets/kulorwerkz-screenshot.webp";
import ladybugScreenshot from "./assets/ladybug-screenshot.webp";
import polishedScreenshot from "./assets/polished-screenshot.webp";
import marqueeBackground from "./assets/marquee-background.webp";
import computerIcon from "./assets/computer.svg";
import pencilIcon from "./assets/pencil.svg";
import seoIcon from "./assets/seo.svg";
import serviceStarsIcon from "./assets/service-stars.svg";
import leftServiceLeaf from "./assets/left-service-leaf.webp";
import rightServiceLeaf from "./assets/right-service-leaf.svg";
import aboutPhoto from "./assets/about-photo.jpg";
import aboutLeaf from "./assets/about-leaf.svg";
import aboutFlower from "./assets/about-flower.webp";
import aboutBackground from "./assets/about-background.webp";
import processFlower from "./assets/process-flower.svg";
import contactBackground from "./assets/contact-background.jpg";
import contactSilhouette from "./assets/contact-silhouette.webp";
import contactNote from "./assets/contact-note.svg";

const featuredProjects = [
  {
    number: "01",
    category: "WEB DESIGN / DEVELOPMENT / SEO",
    title: "All Out Services",
    description:
      "A bold, responsive website built for a construction and land services company with an emphasis on strong visuals, usability, and local search.",
    technologies: ["React", "Vite", "Tailwind", "SEO"],
    image: allOutScreenshot,
    url: "https://alloutforestry.com",
  },
  {
    number: "02",
    category: "WEB DESIGN / DEVELOPMENT",
    title: "Kulorwerkz with Thomasina",
    description:
      "A polished portfolio website designed to showcase nail artistry, services, and the personality behind the brand.",
    technologies: ["React", "Vite", "CSS", "SEO"],
    image: kulorwerkzScreenshot,
    url: "https://kulorwerkz.com",
  },
  {
    number: "03",
    category: "WEB DESIGN / DEVELOPMENT",
    title: "Ladybug Lane Crochet",
    description:
      "A playful, handcrafted website concept built around a warm and whimsical crochet brand.",
    technologies: ["React", "Vite", "CSS"],
    image: ladybugScreenshot,
    url: "https://ladybug-lane-crochet.vercel.app",
  },
  {
    number: "04",
    category: "WEB DESIGN / DEVELOPMENT",
    title: "Polished by Leydi",
    description:
      "A soft, editorial nail salon website designed around an elegant and approachable brand experience.",
    technologies: ["React", "Vite", "CSS"],
    image: polishedScreenshot,
    url: "https://polished-by-leydi.vercel.app",
  },
];

function Home() {

  const [activeProject, setActiveProject] = useState(0);

  const project = featuredProjects[activeProject];

  const nextProject = () => {
    setActiveProject((current) =>
      current === featuredProjects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? featuredProjects.length - 1 : current - 1
    );
  };

  return (
    <div className="portfolio-site">

      {/* =================================
          HERO
      ================================= */}
      <section
        className="hero"
        id="home"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* NAVBAR */}
        <header className="navbar">
          <Link to="#home" className="logo">
            MW<span>.</span>
          </Link>

          <nav className="nav-links">
            <Link to="/work">Work</Link>
            <Link to="#about">About</Link>
            <Link to="#services">Services</Link>
            <Link to="#process">Process</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="nav-actions">
            <a
              href="https://github.com/madwhite97"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github"
              aria-label="Visit my GitHub"
            >
              <FaGithub />
            </a>

            <Link to="/contact" className="nav-button">
              Let's Work Together
              <FiArrowUpRight />
            </Link>
          </div>
        </header>

        <div className="hero-inner">

          {/* LEFT SIDE */}
          <div className="hero-copy">

            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              WEB DEVELOPER + DESIGNER
            </motion.p>

            <div className="hero-title">

              <div className="title-mask">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  I BUILD
                </motion.h1>
              </div>

              <div className="title-mask">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  WEBSITES THAT
                </motion.h1>
              </div>

              <div className="title-mask">
                <motion.h1
                  className="hero-title-accent"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  FEEL LIKE YOU.
                </motion.h1>
              </div>

            </div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
            >
              Thoughtful, responsive websites built with code, creativity, and a slightly unreasonable attention to detail. 
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.85,
              }}
            >
              <Link to="/work" className="button button-primary">
                View My Work
                  <span>
                    <FiArrowDownRight />
                  </span>
              </Link>

              <Link to="/contact" className="button button-outline">
                Let's Talk
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT SIDE - PROJECT DEVICES */}
          <div className="hero-device-scene">

            {/* LAPTOP */}
            <motion.img
            src={allOutLaptop}
            alt="All Out website preview"
              className="hero-device hero-laptop"
              initial={{
                opacity: 0,
                x: 90,
                y: 10,
                rotate: 4,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -7, 0],
                rotate: 10,
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.45,
                },
                x: {
                  duration: 1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            {/* IPAD */}
            <motion.img
              src={ladybugIpad}
              alt="Ladybug Lane Crochet website"
              className="hero-device hero-ipad"
              initial={{
                opacity: 0,
                x: 50,
                y: 50,
                rotate: -7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, 6, 0],
                rotate: -4,
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.7,
                },
                x: {
                  duration: 1,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                },
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            {/* PHONE */}
            <motion.img
              src={polishedPhone}
              alt="Polished by Leydi website"
              className="hero-device hero-phone"
              initial={{
                opacity: 0,
                x: 70,
                y: 60,
                rotate: 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -5, 0],
                rotate: 5,
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.9,
                },
                x: {
                  duration: 1,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

          </div>

          <motion.a
            href="#work"
            className="scroll-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span />
            SCROLL TO EXPLORE
          </motion.a>

        </div>
      </section>


      {/* =================================
          SELECTED WORK
      ================================= */}

      <section className="work-section" id="work">

        <img
          src={workLeaf}
          alt=""
          className="work-corner-leaf"
          aria-hidden="true"
        />

        <div className="section-topline">

          <div className="section-number">
            01
            <span />
            SELECTED WORK
          </div>

        </div>


        <div className="work-intro">

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            A FEW THINGS
            <br />
            I'VE <em>BUILT.</em>
          </motion.h2>


          <div className="work-intro-right">

            <p>
              A collection of websites designed and developed
              for businesses, brands, and a few ideas I simply
              wanted to bring to life.
            </p>

            <div className="work-arrows">
              <button
                className="work-arrow work-arrow-left"
                onClick={previousProject}
                aria-label="Previous project"
              >
                <FiArrowLeft />
              </button>

              <button
                className="work-arrow work-arrow-right"
                onClick={nextProject}
                aria-label="Next project"
              >
                <FiArrowRight />
              </button>
            </div>

          </div>

        </div>


        {/* MAIN FEATURED PROJECT */}

        <div className="featured-project">

          <div className="featured-number">
            <span>
              {String(activeProject + 1).padStart(2, "0")}
            </span>

            <small>/04</small>
          </div>


          <motion.div
            className="featured-visual"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >

            <div className="featured-laptop-scene">

              <div className="featured-project-glow" />

              <img
                src={featuredWorkRocks}
                alt=""
                className="featured-work-rocks"
                aria-hidden="true"
              />

              <div className="featured-laptop">
                <div className="featured-laptop-frame">
                  <div className="featured-laptop-screen">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={project.number}
                        src={project.image}
                        alt={`${project.title} website preview`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>

                <div className="featured-laptop-base">
                  <div className="featured-laptop-notch" />
                </div>
              </div>
            </div>

          </motion.div>


          <motion.div
            className="featured-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >

            <div className="featured-info">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-btn"
            >
              View Project
              <FiArrowUpRight />
            </a>

            <img
              src={projectLeaf}
              alt=""
              className="featured-info-leaf"
              aria-hidden="true"
            />

          </motion.div>

        </div>


        {/* OTHER PROJECTS */}

        <div className="project-strip">

          <article className="mini-project">

            <div className="project-card-visual">
              <img
                src={kulorwerkzCard}
                alt="Kulorwerkz website preview"
                className="project-card-image"
              />
            </div>

            <div className="project-card-info">

              <div className="project-card-text">
                <div className="project-number">
                  <span>02</span>
                  <small>/ 04</small>
                </div>

                <h3>Kulorwerkz with Thomasina</h3>

                <p> Nail Artist Website</p>
              </div>

              <a
                href={featuredProjects[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-arrow"
                aria-label="View Kulorwerkz project"
              >
                <FiArrowUpRight />
              </a>
            </div>

          </article>


          <article className="mini-project">

            <div className="project-card-visual">
              <img
                src={ladybugLaneCard}
                alt="Ladybug Lane Crochet website preview"
                className="project-card-image"
              />
            </div>

            <div className="project-card-info">

              <div className="project-card-text">
                <div className="project-number">
                  <span>03</span>
                  <small>/ 04</small>
                </div>

                <h3>Ladybug Lane Crochet</h3>

                <p>Ecommerce / Small Business</p>
              </div>

              <Link to={featuredProjects[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-arrow"
                aria-label="View Ladybug Lane Crochet project"
              >
                <FiArrowUpRight />
              </Link>

            </div>

          </article>


          <article className="mini-project">

            <div className="project-card-visual">
              <img
                src={polishedByLeydiCard}
                alt="Polished By Leydi website preview"
                className="project-card-image"
              />
            </div>

            <div className="project-card-info">

              <div className="project-card-text">
                <div className="project-number">
                  <span>04</span>
                  <small>/ 04</small>
                </div>

                <h3>Polished By Leydi</h3>

                <p>Nail Artist Website</p>
              </div>

              <a
                href={featuredProjects[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-arrow"
                aria-label="View Polished By Leydi project"
              >
                <FiArrowUpRight />
              </a>
            </div>

          </article>

        </div>

      </section>

      {/* MARQUEE */}
      <div
        className="marquee"
        style={{ backgroundImage: `url(${marqueeBackground})` }}
      >
        <div className="marquee-track">

          <div className="marquee-content">
            <span>DESIGN</span>
            <span className="marquee-star">✦</span>

            <span>DEVELOP</span>
            <span className="marquee-star">✦</span>

            <span>CREATE</span>
            <span className="marquee-star">✦</span>

            <span>REPEAT</span>
            <span className="marquee-star">✦</span>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span>DESIGN</span>
            <span className="marquee-star">✦</span>

            <span>DEVELOP</span>
            <span className="marquee-star">✦</span>

            <span>CREATE</span>
            <span className="marquee-star">✦</span>

            <span>REPEAT</span>
            <span className="marquee-star">✦</span>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span>DESIGN</span>
            <span className="marquee-star">✦</span>

            <span>DEVELOP</span>
            <span className="marquee-star">✦</span>

            <span>CREATE</span>
            <span className="marquee-star">✦</span>

            <span>REPEAT</span>
            <span className="marquee-star">✦</span>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span>DESIGN</span>
            <span className="marquee-star">✦</span>

            <span>DEVELOP</span>
            <span className="marquee-star">✦</span>

            <span>CREATE</span>
            <span className="marquee-star">✦</span>

            <span>REPEAT</span>
            <span className="marquee-star">✦</span>
          </div>

        </div>
      </div>

      {/* WHAT I DO */}
      <section className="services-section" id="services">

        <div className="services-leaf services-leaf-left">
          <img src={leftServiceLeaf} alt="" />
        </div>

        <div className="services-leaf services-leaf-right">
          <img src={rightServiceLeaf} alt="" />
        </div>

        <div className="services-container">

          <div className="services-heading">
            <div className="services-label">
              <span>02</span>
              <span className="services-label-line"></span>
              <span>WHAT I DO</span>
            </div>

            <h2>
              SERVICES
              <br />
              BUILT TO SUPPORT
              <br />
              <em>REAL BUSINESSES.</em>
            </h2>
          </div>

          <div className="services-grid">
            
            <article className="service-card">
              <img
                src={computerIcon}
                alt=""
                className="service-icon service-icon-computer"
                aria-hidden="true"
              />

              <h3>WEB DEVELOPMENT</h3>

              <p>
                Responsive, custom website built for real businesses and real people.
              </p>
            </article>

            <article className="service-card">
              <img
                src={pencilIcon}
                alt=""
                className="service-icon"
                aria-hidden="true"
              />

              <h3>WEB DESIGN</h3>

              <p>
                Layouts, branding direction, and visual systems that don't feel cookie-cutter.
              </p>
            </article>

            <article className="service-card">
              <img
                src={seoIcon}
                alt=""
                className="service-icon"
                aria-hidden="true"
              />

              <h3>SEO + PERFORMANCE</h3>

              <p>
                The behind-the-scenes work that helps your site actually get found and feel fast.
              </p>
            </article>

            <article className="service-card">
              <img
                src={serviceStarsIcon}
                alt=""
                className="service-icon"
                aria-hidden="true"
              />

              <h3>SITE REFRESHES</h3>

              <p>
                Already have a website? Let's make it considerably more beautiful.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        className="about-section"
        id="about"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="about-inner">

          <div className="about-visual">
            <div className="about-photo-wrap">
              <div className="about-tape"></div>

              <img
                src={aboutPhoto}
                alt="Maddie"
                className="about-photo"
              />

              <img
                src={aboutFlower}
                alt=""
                className="about-photo-flower"
                aria-hidden="true"
              />
            </div>

            <img
              src={aboutLeaf}
              alt=""
              className="about-leaf"
              aria-hidden="true"
            />
          </div>
          <div className="about-content">
            <div className="about-label">
              <span>03</span>
              <span className="about-label-line"></span>
              <span>ABOUT</span>
            </div>

            <h2 className="about-title">
              Developer brain.
              <br />
              <em>Designer eye.</em>
            </h2>

            <div className="about-copy">
              <p>
                Hi, I'm Maddie - a web developer and designer with a love for clean code, creative design, and helping businesses bring their ideas to life.
              </p>

              <p>
                I blend development and design to create websites that feel intentional, polished and completely at home with the brands they represent.
              </p>
            </div>

            <div className="about-divider"></div>

            <div className="about-skills">
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "Vite",
                "Git",
                "GitHub",
                "SEO",
                "Responsive Design",
              ].map((skill) => (
                <span className="about-skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section" id="process">

        <img
          src={rightServiceLeaf}
          alt=""
          className="process-leaf"
          aria-hidden="true"
        />

        <img
        src={processFlower}
        alt=""
        className="process-flower"
        aria-hidden="true"
      />

        <div className="process-inner">

          <div className="process-heading">
            <div className="process-label">
              <span>04</span>
              <span className="process-label-line"></span>
              <span>MY PROCESS</span>
            </div>

            <h2>
              From Idea
              <br />
              <em>To Launch.</em>
            </h2>
          </div>

          <div className="process-timeline">

            <div className="process-item">
              <span className="process-number">01</span>

              <span className="process-dot"></span>

              <div className="process-info">
                <h3>Discover</h3>
                <p>
                  We start with your business, goals, audience, and vision for the site.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span className="process-number">02</span>

              <span className="process-dot"></span>

              <div className="process-info">
                <h3>Design</h3>
                <p>
                  I create a visual direction that feels intentional, polished, and true to your brand.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span className="process-number">03</span>

              <span className="process-dot"></span>

              <div className="process-info">
                <h3>Develop</h3>
                <p>
                  Your design becomes a responsive, functional website built with clean code.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span className="process-number">04</span>

              <span className="process-dot"></span>

              <div className="process-info">
                <h3>Refine + Launch</h3>
                <p>
                  We polish the details, test everything, and get your new site ready to go live.
                </p>
              </div>
            </div>

            <Link to="/contact" className="process-button">
              Start a Project
              <span>
                <FiArrowUpRight />
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact-section"
        id="contact"
        style={{ backgroundImage: `url(${contactBackground})` }}
      >
        <div className="contact-inner">

          <div className="contact-content">
            <div className="contact-label">
              <span>05</span>
              <span className="contact-label-line"></span>
              <span>CONTACT</span>
            </div>

            <p className="contact-eyebrow">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="contact-title">
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              <em>GOOD.</em>
            </h2>

            <Link to="/contact"
              className="contact-button"
              aria-hidden="true">
                Let's Talk
                <span>
                  <FiArrowUpRight />
                </span>
            </Link>
          </div>

          <div className="contact-art">
            <img
              src={contactSilhouette}
              alt=""
              className="contact-silhouette"
              aria-hidden="true"
            />

            <img
              src={contactNote}
              alt=""
              className="contact-note"
              aria-hidden="true"
            />
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;