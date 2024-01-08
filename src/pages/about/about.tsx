import React from "react";
import Banner from "../../components/page_banner";
import Overview from "./components/overview";
import OurMission from "./components/our_mission";
import CollaborationComponent from "../home/components/collaboration";

const About: React.FC = () => {
  return (
    <>
      <Banner pageText="About" headerText="About Us" />
      <Overview />
      <OurMission />
      <CollaborationComponent
        showButtons={false}
        bgColor="bg-white"
        textColor="text-black"
      />
    </>
  );
};

export default About;
