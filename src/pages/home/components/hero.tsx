import BlackButton from "../../../utils/blackButton";

const Hero: React.FC = () => {
  return (
    <>
      <section className="h-full w-full flex items-center font-poppins pt-10 md:pb-20 pb-10">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3">
          <div className="flex flex-col items-center">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              ata-aos-easing="ease-in"
              className="text-black font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-center"
            >
              We provide <br /> services and solutions to{" "}
              <span className="relative z-10 after:absolute after:bottom-0 after:-z-10 after:left-0 after:h-full after:bg-no-repeat after:bg-contain after:bg-bottom after:bg-vector-pattern after:w-full">
                startups
              </span>
            </h1>

            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              ata-aos-easing="ease-in"
              className="mt-5 text-black md:text-base text-sm text-center max-w-md capitalize"
            >
              Elevate your digital transformation, elevate client value by
              seamlessly integrating our experties
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              ata-aos-easing="ease-in"
              className="mt-5"
            >
              <BlackButton text="Let's get started" onClick={() => {}} />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            ata-aos-easing="ease-in"
            className="my-5 w-full bg-hero bg-center bg-cover bg-no-repeat md:h-[550px] h-[350px] rounded-[30px] shadow-lg overflow-hidden"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
