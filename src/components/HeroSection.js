import React from "react";
import "./HeroSection.css";

export default function HeroSection({ title, subtitle, imgSrc, learnLink, buyLink }) {
  return (
    <section className="hero-section text-center text-white">
      <div className="container py-5">
        <h1 className="fw-bold">{title}</h1>
        <h3 className="mb-4">{subtitle}</h3>
        <div className="d-flex justify-content-center gap-3 mb-5">
          <a href={learnLink} className="btn btn-primary rounded-pill px-4">
            Learn more
          </a>
          <a href={buyLink} className="btn btn-outline-light rounded-pill px-4">
            Buy
          </a>
        </div>
        <img src={imgSrc} alt={title} className="img-fluid hero-img" />
      </div>
    </section>
  );
}
