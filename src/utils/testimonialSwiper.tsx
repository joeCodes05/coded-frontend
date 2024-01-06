import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { tesimonial_data } from "../data/testimonials_data";

const TestimonialSwiper: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;

  return (
    <>
      <Swiper
        modules={[Navigation]}
        grabCursor
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 3}
      >
        {tesimonial_data?.map((data, index) => {
          const { name, content, image, occupation } = data;

          return (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-left"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="p-5 bg-gray-50 rounded-md"
              >
                <p className="text-gray-400">{content}</p>

                <div className="mt-4 flex gap-3 items-center">
                  <div className="h-[45px] w-[45px] overflow-hidden rounded-full grid place-items-center">
                    <img src={image} width="100%" alt={name} />
                  </div>
                  <div>
                    <h5 className="text-black text-sm font-semibold">{name}</h5>
                    <h5 className="text-gray-400 text-sm">{occupation}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="lg:mt-5 mt-0">
          <div className="flex gap-4 items-center lg:p-5 p-10 w-fit ml-auto lg:mr-0 mr-auto ">
            <button className="grid disabled:ring-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed outline-none prev-button place-items-center text-primary h-[40px] w-[40px] ring-1 ring-primary rounded-full">
              <IoIosArrowRoundBack />
            </button>
            <button className="grid disabled:ring-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed next-button outline-none place-items-center text-primary h-[40px] w-[40px] ring-1 ring-primary rounded-full">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;
