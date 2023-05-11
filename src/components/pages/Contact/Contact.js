import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "../../SectionTitle";
import Bglines from "../../BgLines";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });
  const [isPopUp, setIsPopUp] = useState(false);

  const { user_email, user_message, user_name, user_subject } = userInfo;

  const sendEmail = (e) => {
    e.preventDefault();

    if (user_email && user_message && user_name && user_subject) {
      emailjs
        .sendForm(
          "service_xmdljna",
          "template_dmbl80l",
          form.current,
          "DT9d1pbQiaUAnuxL6"
        )
        .then(
          (result) => {
            setUserInfo({
              user_name: "",
              user_email: "",
              user_subject: "",
              user_message: "",
            });
            setIsPopUp(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("please fill all the data properly");
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsPopUp(false);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isPopUp]);

  return (
    <div className="contact">
      <SectionTitle headingText={"My contact"} shadowText={"contact"} />
      <Bglines />

      <AnimatePresence>
        {isPopUp && (
          <motion.div
            className="mail-pop-up"
            initial={{ left: "-100%", opacity: 0 }}
            animate={{ left: 20, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 13,
            }}
            exit={{ left: "-100%", opacity: 0 }}
          >
            <span>succesfully send email</span>
            <span className="close" onClick={() => setIsPopUp(false)}>
              <HiXMark />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

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
                <form action="" onSubmit={sendEmail} ref={form}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={userInfo.user_name}
                    id="name"
                    placeholder="Enter your name..."
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, user_name: e.target.value })
                    }
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="Enter your email..."
                    value={userInfo.user_email}
                    required
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, user_email: e.target.value })
                    }
                  />
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter subject.."
                    required
                    value={userInfo.user_subject}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, user_subject: e.target.value })
                    }
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message.."
                    required
                    value={userInfo.user_message}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, user_message: e.target.value })
                    }
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
