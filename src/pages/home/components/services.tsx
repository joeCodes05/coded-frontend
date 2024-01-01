import { serviceData } from "../../../data/service_data";

const ServiceComponent = () => {
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
            Our Services
          </h5>
          <div className="flex lg:gap-10 gap-5 lg:items-center lg:flex-row flex-col">
            <div className="basis-1/2">
              <h1
                data-aos="fade-right"
                ata-aos-easing="ease-in"
                data-aos-duration="1000"
                className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
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

          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20">
            {serviceData.map((data, index) => {
              const { title, percentageValue } = data;

              return (
                <div
                  data-aos="fade-up"
                  ata-aos-easing="ease-in"
                  data-aos-duration="1000"
                  key={index}
                >
                  <h3 className="text-xl text-black">{title}</h3>

                  <div className="flex gap-3 items-center">
                    <div className="mt-5 w-full h-[2px] bg-gray-200 relative">
                      <div
                        className={`absolute w-[${percentageValue}%] after:right-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:h-[15px] after:w-[15px] after:bg-primary after:rounded-full bg-primary left-0 top-0 h-full`}
                      ></div>
                    </div>
                    <div className="text-gray-400">{percentageValue}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
