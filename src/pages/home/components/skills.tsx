const SkillsComponent = () => {
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
            Our Skills
          </h5>
          <div className="flex gap-10 items-center flex-row">
            <div className="basis-1/2">
              <h1
                data-aos="fade-right"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="lg:text-5xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
              >
                Build your <span className="text-primary">success</span> with
                our technology
              </h1>
            </div>

            <div
              data-aos="fade-left"
              ata-aos-easing="ease-in"
              data-aos-duration="1000"
              className="text-gray-400 text-base basis-1/2 font-light"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using content here.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsComponent;
