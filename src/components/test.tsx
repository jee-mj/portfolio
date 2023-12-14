import react from "react";
import { motion } from "framer-motion";

const test = () => {
  return (
    <>
      <motion.div
        className="bg-red-400 w-[100px] h-[100px]"
        whileHover={{ scale: 1.5 }}
      />
      <h1>yo bros</h1>
    </>
  );
};

export default test;
