import React from "react";
import { containerVarients, fadeUp } from "../../Animation";
import SectionTitle from "../../SectionTitle";
import { motion } from "framer-motion";
import ProgressBar from "../../ProgressBar";

const MySkills = () => {
  return (
    <div className="my-skills">
      <SectionTitle headingText={"My Skills"} shadowText={"skills"} />
      <div className="skill-cards">
        <div className="container">
          <motion.div
            className="row gap-1"
            varients={containerVarients}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
          >
            <motion.div
              className="col-12 col-lg-3 col-md-4 col-sm-6"
              variants={fadeUp}
            >
              <div className="skill-cart-item">
                <div className="circle-progress">
                  <svg width="120" height="120">
                    <circle
                      class="circlebg"
                      cx="60"
                      cy="60"
                      r="54"
                      pathLength="1"
                      strokeLinecap="round"
                      strokeWidth="12"
                      dataProjection-id="14"
                    ></circle>
                    <motion.circle
                      initial={{ strokeDasharray: "0.1px 1px" }}
                      animate={{ strokeDasharray: "0.85px 1px" }}
                      transition={{ type: "tween", duration: 0.4, delay: 0.5 }}
                      cx="60"
                      cy="60"
                      r="54"
                      strokeLinecap="round"
                      strokeWidth="12"
                      opacity="1"
                      pathLength="1"
                      strokeDashoffset="0px"
                      //   stroke-dasharray="0.85px"
                      dataProjection-id="15"
                    ></motion.circle>
                  </svg>
                  <span className="percent">85%</span>
                </div>
                <h4>UI/UX Design</h4>
              </div>
            </motion.div>
            <motion.div
              className="col-12 col-lg-3 col-md-4 col-sm-6"
              variants={fadeUp}
            >
              <div className="skill-cart-item">
                <div className="circle-progress">
                  <svg width="120" height="120">
                    <circle
                      class="circlebg"
                      cx="60"
                      cy="60"
                      r="54"
                      pathLength="1"
                      stroke-linecap="round"
                      stroke-width="12"
                      data-projection-id="14"
                    ></circle>
                    <motion.circle
                      initial={{ strokeDasharray: "0.1px 1px" }}
                      animate={{ strokeDasharray: "0.70px 1px" }}
                      transition={{ type: "tween", duration: 0.4, delay: 0.7 }}
                      cx="60"
                      cy="60"
                      r="54"
                      stroke-linecap="round"
                      stroke-width="12"
                      opacity="1"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="0.70px"
                      data-projection-id="15"
                    ></motion.circle>
                  </svg>
                  <span className="percent">70%</span>
                </div>
                <h4>Back-end Development</h4>
              </div>
            </motion.div>
            <motion.div
              className="col-12 col-lg-3 col-md-4 col-sm-6"
              variants={fadeUp}
            >
              <div className="skill-cart-item">
                <div className="circle-progress">
                  <svg width="120" height="120">
                    <circle
                      class="circlebg"
                      cx="60"
                      cy="60"
                      r="54"
                      pathLength="1"
                      stroke-linecap="round"
                      stroke-width="12"
                      data-projection-id="14"
                    ></circle>
                    <motion.circle
                      initial={{ strokeDasharray: "0.1px 1px" }}
                      animate={{ strokeDasharray: "0.90px 1px" }}
                      transition={{ type: "tween", duration: 0.5, delay: 1.1 }}
                      cx="60"
                      cy="60"
                      r="54"
                      stroke-linecap="round"
                      stroke-width="12"
                      opacity="1"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="0.90px"
                      data-projection-id="15"
                    ></motion.circle>
                  </svg>
                  <span className="percent">90%</span>
                </div>
                <h4>Front-end Development</h4>
              </div>
            </motion.div>
            <motion.div
              className="col-12 col-lg-3 col-md-4 col-sm-6"
              variants={fadeUp}
            >
              <div className="skill-cart-item">
                <div className="circle-progress">
                  <svg width="120" height="120">
                    <circle
                      class="circlebg"
                      cx="60"
                      cy="60"
                      r="54"
                      pathLength="1"
                      stroke-linecap="round"
                      stroke-width="12"
                      data-projection-id="14"
                    ></circle>
                    <motion.circle
                      initial={{ strokeDasharray: "0.1px 1px" }}
                      animate={{ strokeDasharray: "0.70px 1px" }}
                      transition={{ type: "tween", duration: 0.5, delay: 1.2 }}
                      cx="60"
                      cy="60"
                      r="54"
                      stroke-linecap="round"
                      stroke-width="12"
                      opacity="1"
                      pathLength="1"
                      stroke-dashoffset="0px"
                      stroke-dasharray="0.50px"
                      data-projection-id="15"
                    ></motion.circle>
                  </svg>
                  <span className="percent">50%</span>
                </div>
                <h4>Mobile App Development</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="progress-bars">
        <div className="container">
          <div className="row gap-1">
            <motion.div
              className="col-12 col-md-6"
              variants={containerVarients}
              viewport={{ once: true }}
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ when: "beforeChildren", staggerChildren: 0.15 }}
            >
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  Javascript - <span>(85%)</span>
                </h5>
                <ProgressBar width={"85%"} delay={1} />
              </motion.div>
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  React Js -<span>(80%)</span>
                </h5>
                <ProgressBar width={"80%"} delay={1.2} />
              </motion.div>
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  html & css -<span>(95%)</span>
                </h5>
                <ProgressBar width={"95%"} delay={1.4} />
              </motion.div>
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  Illustrator -<span>(70%)</span>
                </h5>
                <ProgressBar width={"70%"} delay={1.6} />
              </motion.div>
            </motion.div>
            <motion.div
              className="col-12 col-md-6"
              variants={containerVarients}
              initial={"hidden"}
              viewport={{ once: true }}
              whileInView={"visible"}
              transition={{ when: "beforeChildren", staggerChildren: 0.15 }}
            >
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  Node Js -<span>(90%)</span>
                </h5>
                <ProgressBar width={"90%"} delay={1} />
              </motion.div>
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  React Native -<span>(70%)</span>
                </h5>
                <ProgressBar width={"70%"} delay={1.2} />
              </motion.div>
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  Photoshop -<span>(75%)</span>
                </h5>
                <ProgressBar width={"75%"} delay={1.4} />
              </motion.div>
              <motion.div className="progress-item" variants={fadeUp}>
                <h5>
                  Figma -<span>(90%)</span>
                </h5>
                <ProgressBar width={"90%"} delay={1.6} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
