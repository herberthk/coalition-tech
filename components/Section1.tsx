"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Section1 = (): React.ReactNode => {
  return (
    <section className="section-1 d-flex flex-column" id="section-1">
      <div className="container">
        <nav className="w-100 p-2 d-flex justify-content-between">
          <div className="position-relative log-circle rounded-circle">
            <Image
              src="/assets/1.jpg"
              className="log-circle rounded-circle"
              alt="logo"
              fill
            />
          </div>

          <div className="d-flex gap-5 mt-3">
            <button
              onClick={() =>
                document
                  .querySelector("#section-2")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="button-links responsive-text"
            >
              01. HISTORY
            </button>
            <button
              className="button-links responsive-text"
              onClick={() =>
                document
                  .querySelector("#section-3")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              02. TEAM
            </button>
          </div>
        </nav>
        <div className="ms-5 big-text-container">
          <motion.p
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            className="text-uppercase text-large"
          >
            Losangeles
          </motion.p>
          <motion.p
            initial={{ x: "200%" }}
            animate={{ x: 0 }}
            transition={{ ease: "linear", duration: 2, x: { duration: 1 } }}
            className="text-uppercase text-large dark-blue"
          >
            Mountains
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
