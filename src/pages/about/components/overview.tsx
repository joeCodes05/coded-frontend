import React from "react";
import AboutImageOne from "../../../assets/images/t3.png";
import { FiCheckCircle } from "react-icons/fi";

const Overview: React.FC = () => {
  return (
    <>
      <section className="pt-20 pb-0 font-poppins text-black overflow-hidden">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3">
          <div className="flex md:flex-row flex-col-reverse gap-10 items-center">
            <div className="basis-1/2 md:mt-0 mt-5">
              <div
                data-aos="fade-up"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="flex items-center justify-center"
              >
                <img src={AboutImageOne} width="100%" alt="VR user" />
              </div>
            </div>
            <div className="basis-1/2 md:pb-20 pb-0">
              <h5
                data-aos="fade-left"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="relative ml-4 text-base capitalize after:absolute after:-left-4 after:rounded-full after:top-[50%] after:-translate-y-[50%] after:h-[8px] after:w-[8px] after:bg-primary"
              >
                Overview
              </h5>
              <h1
                data-aos="fade-left"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
              >
                We transform your dreams into{" "}
                <span className="text-primary">reality</span>{" "}
              </h1>

              <p
                data-aos="fade-up"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="mt-8 text-gray-400 lg:text-base text-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>

              <div className="mt-5 flex flex-col space-y-4">
                <div
                  data-aos="fade-up"
                  ata-aos-easing="ease-in"
                  data-aos-duration="1000"
                  className="flex gap-3 items-center"
                >
                  <div>
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Quis suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  ata-aos-easing="ease-in"
                  data-aos-duration="1000"
                  className="flex gap-3 items-center"
                >
                  <div>
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Quis suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  ata-aos-easing="ease-in"
                  data-aos-duration="1000"
                  className="flex gap-3 items-center"
                >
                  <div>
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Quis suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  ata-aos-easing="ease-in"
                  data-aos-duration="1000"
                  className="flex gap-3 items-center"
                >
                  <div>
                    <FiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      Quis suspendisse ultrices gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
