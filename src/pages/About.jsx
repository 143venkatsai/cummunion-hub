import React from "react";
import { motion } from "framer-motion";
import { FcAbout } from "react-icons/fc";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center items-center min-h-[85vh]"
    >
      <h1 className="text-4xl font-bold py-7">About Page</h1>
      <FcAbout className="text-9xl" />
    </motion.div>
  );
};

export default About;
