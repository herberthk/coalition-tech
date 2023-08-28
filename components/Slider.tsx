"use client";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import { slideIn } from "@/utils/motion";

const Slider = (): React.ReactNode => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] = ["1.jpg", "2.jpg", "3.jpg"];
  const next = () =>
    setCurrentIndex((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));

  return (
    <div className="slider-container d-flex flex-column justify-content-between">
      <button onClick={prev} className="prev">
        &#10094;
      </button>
      <button onClick={next} className="next">
        &#10095;
      </button>
      <div className=" d-flex justify-content-center ">
        <motion.div
          className="slide-image position-relative"
          variants={slideIn("right", "tween", 0, 1)}
          layout
        >
          <Image
            className="slide-image"
            fill
            priority
            src={`/assets/${images[currentIndex]}`}
            alt=""
          />
        </motion.div>
      </div>
      <div className="d-flex gap-2 justify-content-center">
        {images.map((_, i) => (
          <span
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={classNames("slide-indicator", {
              "active-slide": currentIndex === i,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
