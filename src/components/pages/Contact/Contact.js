import React from "react";
import SectionTitle from "../../SectionTitle";
import Bglines from "../../BgLines";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { containerVarients, fadeUp } from "../../Animation";

const Contact = () => {
  return (
    <div className="contact">
      <SectionTitle headingText={"My contact"} shadowText={"contact"} />
      <Bglines />
      <div className="contact-section">
        <div className="container">
          <div className="row gap-1">
            <motion.div
              className="col-12 col-lg-5"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="contact-info">
                <h4>Contact Information</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                  quis quo rerum distinctio ipsum voluptates maiores odit, magni
                  reiciendis? Quo fugiat nihil
                </p>
                <div className="line"></div>
                <div className="contact-item">
                  <div className="cart">
                    <div className="icon">
                      <BsTelephone />
                    </div>
                    <div className="info">
                      <h5>Contact on phone</h5>
                      <a href="tel:01734909372">01734909372</a>
                      <a href="tel:01734909372">01734909372</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="cart">
                    <div className="icon">
                      <AiOutlineMail />
                    </div>
                    <div className="info">
                      <h5>Contact on mail</h5>
                      <a href="mailto:demomail2@demo.com">demomail2@demo.com</a>
                      <a href="mailto:demomail2@demo.com">demomail2@demo.com</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="cart">
                    <div className="icon">
                      <IoLocationOutline />
                    </div>
                    <div className="info">
                      <h5>Contact Address</h5>
                      <p>121 King Street, Melbourne, United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-12 col-lg-7"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="contact-form">
                <form action="">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name..."
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email..."
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject.."
                    required
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message.."
                    required
                  ></textarea>
                  <button type="submit" className="button">
                    <span>Send mail</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
