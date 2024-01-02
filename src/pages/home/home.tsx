import Hero from "./components/hero";
import CollaborationComponent from "./components/collaboration";
import ServiceComponent from "./components/services";
import BlogComponent from "./components/blog";
import PricingComponent from "./components/pricing";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CollaborationComponent />
      <ServiceComponent />
      <PricingComponent />
      <BlogComponent />
    </>
  );
};

export default Home;
