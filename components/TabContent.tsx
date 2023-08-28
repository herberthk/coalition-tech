"use client";
import React from "react";

import { useTabStore } from "@/store";

export const TabContentOne = (): React.ReactNode => {
  return (
    <div className="px-4 py-2 bg-white d-flex flex-column tab-content">
      <p className="text-uppercase dark-blue h4 fw-bold">Schedule</p>
      <div className="d-flex flex-column gap-1">
        <div className="d-flex justify-content-between">
          <p>25 Nov 2016</p>
          <p>Vestibulum Viverra</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>28 Nov 2016</p>
          <p>Vestibulum Viverra</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>18 Dec 2016</p>
          <p>Vestibulum Viverra</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>7 Jan 2017</p>
          <p>Vestibulum Viverra</p>
        </div>
      </div>
    </div>
  );
};

export const TabContentTwo = (): React.ReactNode => {
  return (
    <div className="px-4 py-2 bg-white d-flex flex-column tab-content">
      <p className="text-uppercase dark-blue h4">Schedule 2</p>
      <div className="d-flex flex-column gap-1">
        <div className="d-flex justify-content-between">
          <p>12 Jan 2017</p>
          <p>Hawai Viverra</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>17 Jan 2017</p>
          <p>Dublin Viverra</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>18 Jan 2017</p>
          <p>London Viverra</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>30 Jan 2017</p>
          <p>Vancouver Viverra</p>
        </div>
      </div>
    </div>
  );
};

const TabContentContainer = (): React.ReactNode => {
  const active = useTabStore((state) => state.activeTab);
  return (
    <div className="d-none d-md-block">
      {active === "tab-1" && <TabContentOne />}
      {active === "tab-2" && <TabContentTwo />}
    </div>
  );
};

export default TabContentContainer;
