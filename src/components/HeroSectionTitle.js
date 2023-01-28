import React from "react";
import { Link } from "react-router-dom";
import HeroBgLine from "./HeroBgLine";

const HeroSectionTitle = ({ heading }) => {
  return (
    <div className="hero-section-title">
      <HeroBgLine />
      <h1>{heading}</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <p>{heading}</p>
      </div>
    </div>
  );
};

export default HeroSectionTitle;
