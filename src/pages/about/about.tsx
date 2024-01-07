import React from "react";
import Banner from "../../components/page_banner";
import Overview from "./components/overview";

const About: React.FC = () => {
  return (
    <>
      <Banner pageText="About" headerText="About Us" />
      <Overview />
    </>
  );
};

export default About;
