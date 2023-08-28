"use client";
import classNames from "classnames";
import React from "react";

import { useTabStore } from "@/store";

const Tabs = (): React.ReactNode => {
  const active = useTabStore((state) => state.activeTab);
  const setActive = useTabStore((state) => state.setActiveTab);
  return (
    <div className="dark-blue-bg d-none d-md-block">
      <div className="container d-flex flex-column flex-md-row">
        <button
          onClick={() => active !== "tab-1" && setActive("tab-1")}
          className={classNames("text-uppercase tab-buttons", {
            "active-tab": active === "tab-1",
          })}
        >
          Mountain1
        </button>
        <button
          onClick={() => active !== "tab-2" && setActive("tab-2")}
          className={classNames("text-uppercase tab-buttons", {
            "active-tab": active === "tab-2",
          })}
        >
          Mountain2
        </button>
      </div>
    </div>
  );
};

export default Tabs;
