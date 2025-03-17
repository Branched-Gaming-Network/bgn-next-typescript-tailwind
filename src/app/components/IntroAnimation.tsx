"use client";

import TreeLeft from "../../../brand-art/tree-left";
import TreeRight from "../../../brand-art/tree-right";
import { motion, useScroll } from "motion/react";

const IntroAnimation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ position: scrollYProgress, opacity: scrollYProgress }}
      className="min-w-full min-h-full fixed z-20"
        
    >
      <div className="flex justify-center pt-36">
        <div className="space-x-1 absolute ">
          <TreeLeft className="h-96 absolute top-24 -left-48" />
          <TreeRight className="h-96 absolute top-24 -left-48" />
        </div>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
