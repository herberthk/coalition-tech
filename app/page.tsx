import React from "react";

import ScrollTop from "@/components/ScrollTop";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

const Home = (): React.ReactNode => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <ScrollTop />
    </main>
  );
};
export default Home;
