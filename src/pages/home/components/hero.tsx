import heroSvg from "../../../assets/svgs/hero_img.svg";
import { LuDot } from "react-icons/lu";

const Hero: React.FC = () => {
  return (
    <>
      <section className="min-h-screen h-full w-full flex items-center font-poppins">
        <div className="max-w-7xl mx-auto sm:px-6 px-2">
          <div className="flex lg:flex-row flex-col lg:space-y-0 md:space-y-10 space-y-2 items-center lg:justify-normal justify-center">
            <div className="basis-1/2">
              <h1 className="text-gray-900 lg:text-left text-center font-bold md:text-6xl text-4xl">
                The missing piece your{" "}
                <span className="text-primary">startup</span> needs
              </h1>
              <div className="lg:mt-10 mt-5 text-gray-400 text-base flex lg:justify-normal justify-center items-center gap-2">
                <div>Awesome User Interface</div>
                <LuDot />
                <div>Mobile Friendly</div>
                <LuDot />
                <div>Easy to operate</div>
              </div>
            </div>

            <div className="basis-1/2 flex justify-center">
              <img
                src={heroSvg}
                className="md:h-[400px] h-[250px] md:w-auto w-[250px]"
                alt="puzzle svg illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
