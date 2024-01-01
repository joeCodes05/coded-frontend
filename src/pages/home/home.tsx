import Hero from "./components/hero";
import CollaborationComponent from "./components/collaboration";
import SkillsComponent from "./components/skills";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CollaborationComponent />
      <SkillsComponent />
    </>
  );
};

export default Home;
