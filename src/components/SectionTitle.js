import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./Animation";

const SectionTitle = ({ headingText, shadowText }) => {
  return (
    <motion.div
      className="section-title"
      variants={fadeUp}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
    >
      <h2>
        {headingText}
        <span>{shadowText}</span>
      </h2>
      <div className="underline">
        <span></span>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
