import React from "react";
import SectionTitle from "../../SectionTitle";
import BgLines from "../../BgLines";
import AboutContent from "./AboutContent";
import Service from "./Service";
import Reviews from "./Reviews";

const About = () => {
  return (
    <section className="about">
      <BgLines />
      <div className="about-section">
        <SectionTitle headingText={"About Me"} shadowText={"about"} />
        <AboutContent />
      </div>
      <Service />
      <Reviews />
    </section>
  );
};

export default About;
