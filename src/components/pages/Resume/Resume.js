import React from "react";
import BgLines from "../../BgLines";
import SectionTitle from "../../SectionTitle";
import MySkills from "./MySkills";
import { MdLibraryBooks, MdWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animation";

const Resume = () => {
  return (
    <section className="resume">
      <BgLines />
      <MySkills />
      <section className="my-resume">
        <SectionTitle headingText={"My resume"} shadowText={"resume"} />
        <div className="resume-section">
          <div className="container">
            <div className="row gap-1">
              <div className="col-12 col-lg-6">
                <div className="resume-aducational">
                  <h4>
                    <MdLibraryBooks />
                    Educational Qualification
                  </h4>
                  <motion.div
                    className="resume-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="year">2016 - 2018</span>
                    <div className="resume-right">
                      <span className="borders">
                        <span className="line-border"></span>
                        <span className="rounded-border"></span>
                      </span>
                      <h5>Higher School Graduation</h5>
                      <p className="college-name">Abc college</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum minima veniam, adipisci temporibus facilis vitae
                        saepe expedita molestias blanditiis, culpa ipsum
                        officiis, nemo excepturi ab cupiditate nesciunt
                        dignissimos cum a.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="resume-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="year">2016 - 2018</span>
                    <div className="resume-right">
                      <span className="borders">
                        <span className="line-border"></span>
                        <span className="rounded-border"></span>
                      </span>
                      <h5>Higher School Graduation</h5>
                      <p className="college-name">Abc college</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum minima veniam, adipisci temporibus facilis vitae
                        saepe expedita molestias blanditiis, culpa ipsum
                        officiis, nemo excepturi ab cupiditate nesciunt
                        dignissimos cum a.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="resume-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="year">2016 - 2018</span>
                    <div className="resume-right">
                      <span className="borders">
                        <span className="line-border"></span>
                        <span className="rounded-border"></span>
                      </span>
                      <h5>Higher School Graduation</h5>
                      <p className="college-name">Abc college</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum minima veniam, adipisci temporibus facilis vitae
                        saepe expedita molestias blanditiis, culpa ipsum
                        officiis, nemo excepturi ab cupiditate nesciunt
                        dignissimos cum a.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="resume-working">
                  <h4>
                    <MdWorkOutline />
                    Working Experience
                  </h4>
                  <motion.div
                    className="resume-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="year">2016 - 2018</span>
                    <div className="resume-right">
                      <span className="borders">
                        <span className="line-border"></span>
                        <span className="rounded-border"></span>
                      </span>
                      <h5>Higher School Graduation</h5>
                      <p className="college-name">Abc college</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum minima veniam, adipisci temporibus facilis vitae
                        saepe expedita molestias blanditiis, culpa ipsum
                        officiis, nemo excepturi ab cupiditate nesciunt
                        dignissimos cum a.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="resume-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="year">2016 - 2018</span>
                    <div className="resume-right">
                      <span className="borders">
                        <span className="line-border"></span>
                        <span className="rounded-border"></span>
                      </span>
                      <h5>Higher School Graduation</h5>
                      <p className="college-name">Abc college</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum minima veniam, adipisci temporibus facilis vitae
                        saepe expedita molestias blanditiis, culpa ipsum
                        officiis, nemo excepturi ab cupiditate nesciunt
                        dignissimos cum a.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="resume-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="year">2016 - 2018</span>
                    <div className="resume-right">
                      <span className="borders">
                        <span className="line-border"></span>
                        <span className="rounded-border"></span>
                      </span>
                      <h5>Higher School Graduation</h5>
                      <p className="college-name">Abc college</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum minima veniam, adipisci temporibus facilis vitae
                        saepe expedita molestias blanditiis, culpa ipsum
                        officiis, nemo excepturi ab cupiditate nesciunt
                        dignissimos cum a.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Resume;
