import React from "react";
import { easeOut, motion } from "framer-motion";

const ProgressBar = ({ width, delay }) => {
  return (
    <div className="progress-bar">
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 0.4,
          delay,
          ease: easeOut,
        }}
      ></motion.span>
    </div>
  );
};

export default ProgressBar;
