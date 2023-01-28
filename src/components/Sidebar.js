import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "about",
    url: "about",
  },
  {
    title: "resume",
    url: "resume",
  },
  {
    title: "works",
    url: "works",
  },
  {
    title: "blogs",
    url: "blogs",
  },
  {
    title: "contact",
    url: "contact",
  },
];

console.log(window.innerWidth);

const Sidebar = () => {
  const [open, setopen] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);

  document.body.style.overflow = open ? "hidden" : "auto";

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 700);
  }

  const windowWidth = () => {
    window.onresize = () => setwidth(window.innerWidth);
  };

  useEffect(() => {
    windowWidth();

    return () => {};
  }, [width]);

  return (
    <>
      <div className="sidebar">
        <div className="logo-img">
          <Link>
            <img
              src="https://tf-react-bieber.vercel.app/images/formal-image.png"
              alt="logo-img"
            />
          </Link>
        </div>
        <div className="menubar">
          <span onClick={() => setopen(!open)}>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </span>
        </div>
        <div className="copy-right">
          <p>
            © 2023 <Link>NuclearThemes</Link>
          </p>
        </div>
      </div>
      <div
        className={open ? "menu-btn show" : "menu-btn"}
        onClick={() => setopen(!open)}
      >
        <button type="button">
          <BsArrowRight />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fullscreenMenu"
            initial={width <= 992 ? { x: "-100%" } : { y: "100vh" }}
            animate={width <= 992 ? { x: 0 } : { y: 0 }}
            transition={{ duration: 0.5 }}
            exit={width <= 992 ? { x: "-100%" } : { y: "-100vh" }}
          >
            <nav>
              <ul>
                {links.map((item, index) => (
                  <li key={index} onClick={() => setopen(!open)}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
