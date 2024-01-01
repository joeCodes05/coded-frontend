import Hero from "./components/hero";
import CollaborationComponent from "./components/collaboration";
import ServiceComponent from "./components/services";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CollaborationComponent />
      <ServiceComponent />
    </>
  );
};

export default Home;
