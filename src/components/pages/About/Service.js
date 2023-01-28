import React from "react";
import SectionTitle from "../../SectionTitle";
import { RiQuillPenLine } from "react-icons/ri";
import { HiCode } from "react-icons/hi";
import { BiMobileAlt } from "react-icons/bi";
import { containerVarients, fadeUp } from "../../Animation";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="service">
      <SectionTitle headingText={"My Services"} shadowText={"services"} />
      <motion.div
        className="service-section"
        varients={containerVarients}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        transition={{ delayChildren: 0.4, staggerChildren: 0.4 }}
      >
        <div className="container">
          <div className="row gap-1">
            <motion.div className="col-12 col-lg-4" variants={fadeUp}>
              <div className="service-cart">
                <div className="service-icon one">
                  <div>
                    <RiQuillPenLine />
                  </div>
                </div>
                <h5>Ui/Ux Design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  diam etiam venenatis mi tristique amet cras diam etiam.
                </p>
              </div>
            </motion.div>
            <motion.div className="col-12 col-lg-4" variants={fadeUp}>
              <div className="service-cart">
                <div className="service-icon two">
                  <div>
                    <HiCode />
                  </div>
                </div>
                <h5>web development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  diam etiam venenatis mi tristique amet cras diam etiam.
                </p>
              </div>
            </motion.div>
            <motion.div className="col-12 col-lg-4" variants={fadeUp}>
              <motion.div className="service-cart">
                <div className="service-icon three">
                  <div>
                    <BiMobileAlt />
                  </div>
                </div>
                <h5>Moblie app development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                  diam etiam venenatis mi tristique amet cras diam etiam.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
