import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import "./Contact.css";

import ctaBackground from "../assets/contact/cta-background.jpg";
import formTexture from "../assets/contact/form-texture.jpg";
import leftFlower from "../assets/contact/left-flower.svg";
import note from "../assets/contact/note.svg";
import paperclipNote from "../assets/contact/paperclip-note.svg";
import rightFlower from "../assets/contact/right-flower.svg";
import silhouette from "../assets/contact/silhouette.svg";
import workHero from "../assets/work/work-hero.jpg";
import aboutBackground from "../assets/about-background.jpg";

export default function Contact() {

    const [formStatus, setFormStatus] = useState("idle");

    const handleSubmit = asynce (e) => {
        e.preventDefault();

        if (formStatus === "sending") return;

        const form = e.currentTarget;
        const data = new FormData(form);

        setFormStatus("sending");

        try {
            const response = await fetch(
                "https://formspree.io/f/xoevzzjo",
                {
                    method: "POST",
                    body: data,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            form.reset();
            setFormStatus("success");
        } catch {
            setFormStatus("error");
        }
    };

    return (
        <main className="contact-page">

            {/* NAV */}

            <nav className="contact-nav">
                <Link to="/" className="contact-logo">
                    MW.
                </Link>

                <div className="contact-nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/#about">ABOUT</Link>
                    <Link to="/#services">SERVICES</Link>
                    <Link to="/#process">PROCESS</Link>
                    <Link to="/contact" className="active">
                        CONTACT
                    </Link>            
                </div>
                
                <div className="contact-nav-actions">
                    <a
                        href="https://github.com/madwhite97"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-github"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </nav>

            {/* HERO */}
            
            <section
                className="contact-hero"
                style={{
                    backgroundImage: `url(${workHero})`,
                }}
            >
                <div className="contact-hero-overlay" />

                <motion.div
                    className="contact-hero-content"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-page-label">
                        <span>06</span>
                        <span className="contact-label-line" />
                        <span>CONTACT</span>
                    </div>

                    <h1>
                        LET'S WORK
                        <br />
                        <em>TOGETHER.</em>
                    </h1>

                    <p>
                        Have a project in mind, a question, or just want to say hi?{" "}
                        <br />
                        I'd love to hear from you. Fill out the form or reach out directly{" "}
                        <br />
                        and I'll get back to you as soon as possible.{" "}
                    </p>
                </motion.div>

                <motion.div
                    className="contact-hero-note"
                    initial={{ opacity: 0, rotate: -7 }}
                    animate={{ opacity: 1, rotate: -7 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    <span>Good </span>
                    <span>ideas </span>
                    <span>start </span>
                    <span>here. ♡</span>
                </motion.div>
            </section>

            {/* CONTACT */}

            <section
                className="contact-main"
                style={{ backgroundImage: `url(${aboutBackground})` }}
            >

                <div className="contact-main-inner">

                    {/* FORM */}

                    <div
                        className="contact-form-card"
                        style={{
                            backgroundImage: `url(${formTexture})`,
                        }}
                    >
                        <div className="contact-form-number">
                            <span>01</span>
                            <span />
                        </div>

                        <h2>
                            Send a <em>Message</em>
                        </h2>

                        <p className="contact-form-intro">
                            Fill out the form below and I'll be in touch soon. Whether you're ready to start a project or just have a question, I'm here for it!
                        </p>

                        {formStatus === "success" ? (
                            <div className="form-success">
                                <div className="form-success-icon">
                                    ✓
                                </div>
                                
                                <span className="form-success-eyebrow">
                                    MESSAGE SENT
                                </span>
                                
                                <h3>
                                    Thanks for
                                    <br />
                                    <em>reaching out!</em>
                                </h3>
                                
                                <p>
                                    Your message made it safely to my inbox. I'll get back to you as soon as possible.
                                </p>
                                
                                <span className="form-success-note">
                                    Talk soon ♡
                                </span>
                                
                                <button
                                    type="button"
                                    className="send-another-btn"
                                    onClick={() => setFormStatus("idle")}
                                >
                                    Send Another Message →
                                </button>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <label>
                                    NAME <span>*</span>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </label>

                                <label>
                                    EMAIL <span>*</span>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </label>

                                <label>
                                    PROJECT TYPE

                                    <select
                                        name="projectType"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select a project type
                                        </option>

                                        <option value="New Website">
                                            New Website
                                        </option>

                                        <option value="Website Redesign">
                                            Website Redesign
                                        </option>

                                        <option value="Landing Page">
                                            Landing Page
                                        </option>

                                        <option value="Portfolio Website">
                                            Portfolio Website
                                        </option>

                                        <option value="Small Business Website">
                                            Small Business Website
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </label>

                                <label>
                                    MESSAGE <span>*</span>

                                    <textarea
                                        name="message"
                                        placeholder="Tell me a little about your project..."
                                        required
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="contact-submit"
                                    disabled={formStatus === "sending"}
                                >
                                    {formStatus === "sending"
                                        ? "Sending..."
                                    : "Send Message →"}
                                </button>

                                {formStatus === "error" && (
                                    <p className="form-error">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                )}
                            </form>
                        )}

                        <img
                            src={leftFlower}
                            alt=""
                            aria-hidden="true"
                            className="contact-left-flower"
                        />                    
                    </div>

                    {/* RIGHT */}

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >

                        <div className="contact-collage">

                            <img
                                src={silhouette}
                                alt=""
                                aria-hidden="true"
                                className="contact-silhouette"
                            />

                            <img
                                src={paperclipNote}
                                alt=""
                                aria-hidden="true"
                                className="contact-paperclip-note"
                            />

                            </div>

                            <div className="contact-details">

                                <img
                                    src={note}
                                    alt=""
                                    aria-hidden="true"
                                    className="contact-details-note"
                                />

                                <div className="contact-detail">
                                    <FiMail />

                                    <div>
                                        <span>EMAIL</span>
                                        <Link to="mailto:madwhite97@gmail.com">
                                            madwhite97@gmail.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <FiMapPin />

                                    <div>
                                        <span>BASED IN</span>
                                        <p>East Tennessee, USA</p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <FiClock />

                                    <div>
                                        <span>RESPONSE TIME</span>
                                        <p>Typically within 24-48 hours</p>
                                    </div>
                                </div>

                            </div>

                            <img
                                src={rightFlower}
                                alt=""
                                aria-hidden="true"
                                className="contact-right-flower"
                            />

                    </motion.div>

                </div>
            </section>

            {/* FOLLOW ALONG */}

            <section
                className="contact-social"
                style={{
                    backgroundImage: `url(${ctaBackground})`,
                }}
            >
                <div className="contact-social-inner">

                    <div className="contact-social-copy">
                        <h2>
                            FOLLOW
                            <br />
                            ALONG
                        </h2>

                        <p>
                            Behind the scenes, recent projects,
                            <br />
                            travel, and a little bit of everything
                            <br />
                            in between.
                        </p>
                    </div>

                    <div className="contact-social-divider" />

                    <div className="contact-social-links">

                        <a
                            href="https://github.com/madwhite97"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <span>
                                <FaGithub />
                            </span>
                            GITHUB
                        </a>

                    </div>

                </div>
            </section>

            <Footer />

        </main>
    );
}