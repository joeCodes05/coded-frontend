import React from "react";
import { Link } from "react-router-dom";

interface BannerPropsStructure {
  pageText: string;
  headerText: string;
}

const Banner = ({ pageText, headerText }: BannerPropsStructure) => {
  return (
    <>
      <section className="banner py-20 flex items-center lg:h-[50vh] md:h-[40vh] h-[30vh] font-poppins">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3">
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              ata-aos-easing="ease-in"
              className="flex gap-3 text-white"
            >
              <div>
                <Link to="/" className="no-underline outline-none">
                  Home
                </Link>
              </div>
              <div>/</div>
              <div>
                <div className="text-primary">{pageText}</div>
              </div>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              ata-aos-easing="ease-in"
              className="text-white font-bold lg:text-7xl md:text-5xl text-5xl mt-5"
            >
              {headerText}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
