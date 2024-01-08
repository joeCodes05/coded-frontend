import Hero from "./components/hero";
import CollaborationComponent from "./components/collaboration";
import ServiceComponent from "./components/services";
import BlogComponent from "./components/blog";
import Testimonial from "./components/testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <CollaborationComponent
        showButtons={true}
        bgColor="bg-black"
        textColor="text-white"
      />
      <ServiceComponent />
      <BlogComponent />
      <Testimonial />
    </>
  );
};

export default Home;
