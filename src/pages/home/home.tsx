import Hero from "./components/hero";
import CollaborationComponent from "./components/collaboration";
import ServiceComponent from "./components/services";
import BlogComponent from "./components/blog";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CollaborationComponent />
      <ServiceComponent />
      <BlogComponent />
    </>
  );
};

export default Home;
