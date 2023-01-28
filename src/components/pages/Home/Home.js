import React from "react";
import SocialButton from "../../SocialButton";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { containerVarients, fadeUp } from "../../Animation";
import HeroBgLine from "../../HeroBgLine";

const Home = () => {
  return (
    <section className="home">
      <HeroBgLine />
      <motion.div
        className="hero-section"
        variants={containerVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="hero-img">
            <motion.div className="img-wrapper" variants={fadeUp}>
              <span className="img-rounded-border"></span>
              <img
                src="https://tf-react-bieber.vercel.app/images/formal-image.png"
                alt="Akash Khan"
              />
            </motion.div>
          </div>
          <div className="hero-heading">
            <motion.h1 variants={fadeUp}>
              <span>Hi, I am</span>
              <Typewriter
                options={{
                  strings: ["Akash Khan", "Front-End Developer", "Programmer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
            <motion.p variants={fadeUp}>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <SocialButton />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
