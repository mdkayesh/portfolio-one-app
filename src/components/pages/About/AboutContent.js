import React from "react";
import Button from "../../Button";
import { motion } from "framer-motion";
import { containerVarients, fadeUp } from "../../Animation";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="container">
        <motion.div
          className="row align-center gap-1"
          varients={containerVarients}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.4, delayChildren: 0.4 }}
        >
          <div className="col-12 col-lg-6">
            <motion.div className="about-content-img" variants={fadeUp}>
              <div className="inner-img">
                <span className="animate-ledger top"></span>
                <span className="animate-ledger right"></span>
                <span className="animate-ledger bottom"></span>
                <span className="animate-ledger left"></span>
                <span className="img-height"></span>
                <img
                  src="https://tf-react-bieber.vercel.app/images/about-image.jpg"
                  alt="Akash Khan"
                />
              </div>
            </motion.div>
          </div>
          <div className="col-12 col-lg-6">
            <motion.div className="personal-info" variants={fadeUp}>
              <h3>
                Hi, I am <span>Akash Khan</span>
              </h3>
              <ul>
                <li>
                  <strong>first name</strong>: Akash Khan
                </li>
                <li>
                  <strong>Last Name</strong>: Khan
                </li>
                <li>
                  <strong>Age</strong>: 24 years
                </li>
                <li>
                  <strong>Nationality</strong>: Bangladesh
                </li>
                <li>
                  <strong>Languages</strong>: English,Bangali
                </li>
                <li>
                  <strong>Address</strong>: Narayanganj, Bangladesh
                </li>{" "}
                <li>
                  <strong>Freelance</strong>: Available
                </li>
              </ul>
              <Button>Download Resume</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutContent;
