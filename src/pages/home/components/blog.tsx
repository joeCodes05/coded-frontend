import React from "react";
import BlogSwiperUtil from "../../../utils/blogSwiper";

const BlogComponent: React.FC = () => {
  return (
    <>
      <section className="w-full py-20 font-poppins">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3 text-black">
          <h5
            data-aos="fade-right"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="relative ml-4 text-base capitalize after:absolute after:-left-4 after:rounded-full after:top-[50%] after:-translate-y-[50%] after:h-[8px] after:w-[8px] after:bg-primary"
          >
            From our blogs
          </h5>
          <h1
            data-aos="fade-right"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
          >
            Get a glimps of how{" "}
            <span className="text-primary">we thinking</span>
          </h1>

          <div className="mt-14">
            <BlogSwiperUtil />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
