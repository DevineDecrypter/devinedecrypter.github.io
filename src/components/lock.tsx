"use client";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";
import { Keyhole } from "@phosphor-icons/react";

function lock() {
  const [open, setOpen] = useState(false);

  const variantsLock: Variants = {
    open: { y: "100px" },
    closed: { y: "180px" },
  };

  return (
    <motion.div
      className="flex flex-row items-center justify-center -translate-y-[100px] relative"
      onClick={() => setOpen(!open)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.3,
        }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          animate={open ? "open" : "closed"}
          variants={variantsLock}
          className={`w-[300px] h-[450px] bg-gray-400 rounded-tr-full rounded-tl-full flex flex-row items-center justify-center z-0 relative`}
        >
          <div className="w-[150px] h-[300px] bg-slate-500 rounded-tr-full rounded-tl-full"></div>
          <div className="w-1/2 h-2/5 bg-slate-500 absolute bottom-0 right-0"></div>
        </motion.div>
        <div className="w-[450px] h-[300px] bg-gray-700 rounded-md z-10 flex flex-col items-center justify-center">
          <Keyhole size={128} color="#556581" weight="fill" />
        </div>
      </motion.div>
      {/* {open && (
        <div className="mx-12 p-4">
          <h1 className="text-6xl text-gray-700 font-thin">DevineDecrypter</h1>
        </div>
      )} */}
    </motion.div>
  );
}

export default lock;
