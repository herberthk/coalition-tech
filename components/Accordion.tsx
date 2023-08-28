"use client";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import type { FC } from "react";
import React from "react";

import { TabContentOne, TabContentTwo } from "./TabContent";

const Chevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-down chevron"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

//  @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
type Props = {
  header: string;
  children: React.ReactNode;
};

const AccordionItem: FC<Props> = ({ header, children, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Chevron />
      </>
    }
    className="item"
    buttonProps={{
      className: ({ isEnter }) => `itemBtn ${isEnter && "itemBtnExpanded"}`,
    }}
    contentProps={{ className: "itemContent" }}
    panelProps={{ className: "itemPanel" }}
  >
    {children}
  </Item>
);

const AccordionContainer = (): React.ReactNode => {
  return (
    <div className="custom-accordion d-block d-md-none">
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header="Mountain1">
          <TabContentOne />
        </AccordionItem>
        <AccordionItem header="Mountain2">
          <TabContentTwo />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionContainer;
