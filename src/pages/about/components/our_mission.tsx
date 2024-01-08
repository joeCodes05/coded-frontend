import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import AboutImageTwo from "../../../assets/images/t2.png";
import { Link } from "react-router-dom";
import BlackButton from "../../../utils/blackButton";

const OurMission: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-gray-50 font-poppins">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3">
          <div className="flex md:flex-row flex-col gap-10 items-center">
            <div className="basis-1/2">
              <h5
                data-aos="fade-left"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="relative ml-4 text-base capitalize after:absolute after:-left-4 after:rounded-full after:top-[50%] after:-translate-y-[50%] after:h-[8px] after:w-[8px] after:bg-primary"
              >
                Our Misson
              </h5>
              <h1
                data-aos="fade-left"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
              >
                What we <span className="text-primary">aim</span> to accomplish
              </h1>

              <p
                data-aos="fade-up"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="mt-8 text-gray-400 text-sm font-light"
              >
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. There are many variations of
                passages majority.
              </p>

              <div className="mt-5 flex flex-col space-y-4">
                <Link
                  data-aos="fade-up"
                  ata-aos-easing="ease-in"
                  data-aos-duration="1000"
                  to="/contact"
                  className="outline-none no-underline"
                >
                  <BlackButton
                    text="Get started"
                    onClick={() => {}}
                    textColor="white"
                  />
                </Link>
              </div>
            </div>
            <div className="basis-1/2 md:mt-0 mt-5 flex items-center justify-center">
              <div
                data-aos="fade-in"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="flex items-center justify-center h-[90%] w-[90%] overflow-hidden rounded-full bg-black"
              >
                <img src={AboutImageTwo} width="100%" alt="VR user" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
