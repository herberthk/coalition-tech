"use client";
import Image from "next/image";
import React from "react";

import Slider from "./Slider";

const Section2 = (): React.ReactNode => {
  return (
    <section
      className="section-2 d-flex flex-column justify-content-between"
      id="section-2"
    >
      <div className="bg-white w-100 p-2">
        <div className="container">
          <nav className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <div className="position-relative log-circle rounded-circle">
                <Image
                  src="/assets/1.jpg"
                  className="log-circle rounded-circle"
                  fill
                  alt="logo"
                />
              </div>

              <div className="d-flex flex-column logo-text mt-2">
                <p className="text-uppercase">Losangeles</p>
                <p className="text-uppercase dark-blue">Mountains</p>
              </div>
            </div>
            <div className="d-flex gap-5 mt-1 mt-md-3">
              <button className="button-links responsive-text">
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
        </div>
      </div>
      <div className="container">
        <div className="mt-3 d-flex gap-1">
          <h1 className="number light-blue">01</h1>
          <div className="d-flex flex-column-reverse justify-content-center">
            <p className="dark-blue h4 fw-bold text-uppercase ">History</p>
            <p className="dot light-blue">.</p>
          </div>
        </div>
        <p className="ms-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          at nihil exercitationem. Pariatur voluptas a, fugiat commodi dolorum
          sed consectetur ipsum vero ducimus quisquam minima facilis amet
          facere? Facere, explicabo?. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Perferendis at nihil exercitationem. Pariatur
          voluptas a, fugiat commodi dolorum sed consectetur ipsum vero ducimus
          quisquam minima facilis amet facere? Facere, explicabo
        </p>
      </div>
      <Slider />
    </section>
  );
};

export default Section2;
