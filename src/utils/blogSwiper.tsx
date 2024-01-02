import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import TextTruncate from "react-text-truncate";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import { blogPostData } from "../data/blog_data";
import { Link } from "react-router-dom";

const BlogSwiperUtil: React.FC = () => {
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
        slidesPerView={isMobile ? 1 : 2}
      >
        {blogPostData.map((data, index) => {
          const { title, content, postAuthor, postCategory, postImage } = data;

          return (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-left"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="group"
              >
                <div className="h-[300px] overflow-hidden rounded-[16px] shadow relative group">
                  <div className="absolute top-0 right-0 m-2 z-10 text-sm py-[2px] px-3 opacity-0 duration-300 group-hover:opacity-100 ease-in shadow rounded-md text-primary bg-black">
                    {postCategory}
                  </div>
                  <img
                    src={postImage}
                    alt={title}
                    className="w-full h-full object-cover grayscale duration-300 group-hover:grayscale-0"
                  />
                </div>

                <div className="lg:mt-8 mt-5 grid lg:grid-cols-2 grid-cols-1 place-content-center gap-2">
                  <div>
                    <Link
                      to="/"
                      className="no-underline outline-none hover:underline"
                    >
                      <h1 className="text-2xl">{title}</h1>
                    </Link>
                    <div className="mt-2 text-sm">
                      by:{" "}
                      <Link
                        to="/"
                        className="outline-none no-underline text-primary"
                      >
                        {postAuthor}
                      </Link>
                    </div>
                  </div>

                  <div className="text-gray-400 font-light text-sm tracking-wide">
                    <TextTruncate
                      line={3}
                      element="p"
                      truncateText="..."
                      text={content}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="lg:mt-5 mt-0">
          <div className="flex gap-4 items-center lg:p-5 p-10 w-fit ml-auto lg:mr-0 mr-auto ">
            <button className="grid outline-none prev-button place-items-center text-primary h-[40px] w-[40px] ring-1 ring-primary rounded-full">
              <IoIosArrowRoundBack />
            </button>
            <button className="grid next-button outline-none place-items-center text-primary h-[40px] w-[40px] ring-1 ring-primary rounded-full">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default BlogSwiperUtil;
