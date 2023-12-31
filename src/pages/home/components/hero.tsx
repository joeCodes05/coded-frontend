import heroImg from "../../../assets/images/hero_img.jpg";
import BlackButton from "../../../utils/blackButton";

const Hero: React.FC = () => {
  return (
    <>
      <section className="h-full w-full flex items-center font-poppins py-10">
        <div className="max-w-6xl w-full mx-auto xl:px-0 lg:px-6 px-2">
          <div className="flex flex-col items-center">
            <h1 className="text-black font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-center">
              Deliver the best <br className="md:block hidden" />{" "}
              <span className="md:inline-flex hidden">accessibility</span>{" "}
              <span className="relative z-10 after:absolute after:bottom-0 after:-z-10 after:left-0 after:h-full after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-vector-pattern after:w-full">
                experience
              </span>{" "}
              <br className="md:block hidden" /> to your clients
            </h1>

            <p className="mt-5 text-black text-base text-center max-w-md capitalize">
              Elevate your digital transformation, elevate client value by
              seamlessly integrating our experties
            </p>
            <div className="mt-5">
              <BlackButton text="Let's get started" onClick={() => {}} />
            </div>
          </div>
          <div className="my-5 w-full h-full rounded-[30px] overflow-hidden">
            <img src={heroImg} width="100%" alt="dev team" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
