import React from "react";
import TestimonialSwiper from "../../../utils/testimonialSwiper";

const Testimonial: React.FC = () => {
  return (
    <>
      <section className="py-20 w-full font-poppins">
        <div className="max-w-6xl w-full mx-auto xl:p-0 md:px-6 px-3 text-black">
          <h5
            data-aos="fade-right"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="relative ml-4 text-base capitalize after:absolute after:-left-4 after:rounded-full after:top-[50%] after:-translate-y-[50%] after:h-[8px] after:w-[8px] after:bg-primary"
          >
            Testimonials
          </h5>
          <h1
            data-aos="fade-right"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
          >
            What our <span className="text-primary">Clients</span> say
          </h1>

          <div className="mt-10">
            <TestimonialSwiper />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
