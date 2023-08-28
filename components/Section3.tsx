import Image from "next/image";
import React from "react";

import AccordionContainer from "./Accordion";
import Tabs from "./Tab";
import TabContentContainer from "./TabContent";

const Section3 = (): React.ReactNode => {
  return (
    <section
      className="section-3 d-flex flex-column justify-content-between"
      id="section-3"
    >
      <div>
        <div className="bg-white w-100 p-2">
          <div className="container">
            <div className="d-flex gap-md-5 gap-1 flex-column flex-md-row">
              <div className="d-flex gap-1">
                <p className="number light-blue">02</p>
                <div className="d-flex flex-column-reverse justify-content-center">
                  <p className="dark-blue text-uppercase h4 fw-bold">Climb</p>
                  <p className="dot light-blue">.</p>
                </div>
              </div>
              <p className="align-self-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum accusamus dolores illum magni perferendis pariatur
                dicta. Nulla quidem quam, fugiat maxime natus sunt autem atque
                exercitationem pariatur voluptatibus quas magni?
              </p>
            </div>
          </div>
        </div>
        <Tabs />
      </div>

      <div className="container d-flex align-content-center flex-column">
        <TabContentContainer />
        <AccordionContainer />
      </div>

      <div className="dark-blue-bg w-100 p-1 p-md-2">
        <div className="container">
          <nav className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <div className="position-relative mt-1 log-circle rounded-circle">
                <Image
                  src="/assets/1.jpg"
                  className="log-circle rounded-circle "
                  alt="logo"
                  fill
                />
              </div>

              <div className="d-flex flex-column logo-text mt-2">
                <p className="text-uppercase light-blue">Losangeles</p>
                <p className="text-uppercase light-blue">Mountains</p>
              </div>
            </div>
            <div className="d-flex gap-5 mt-2 mt-md-3">
              <p className="light-blue text-uppercase responsive-text">
                Copyright 2016. All rights reserved
              </p>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Section3;
