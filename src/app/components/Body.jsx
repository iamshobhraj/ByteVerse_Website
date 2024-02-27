"use client";

import { motion } from "framer-motion";
import PaperRoll from "@/../public/PaperRoll.svg";
import CountdownUI from "./countdownUI";

export default function Body() {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 4, type: "spring", bounce: 0.17 }}
      className="flex flex-col gap-6 z-40 xl:w-3/4 w-4/5 lg:text-lg text-sm font-lato mt-3"
    >
      <div className="flex flex-col gap-6 items-center justify-center">
        <CountdownUI />
        <div
          className="apply-button"
          data-hackathon-slug="byteversenitp"
          data-button-theme="dark"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
    </motion.div>
  );
}
