import React from "react";
import { pricingPlans } from "../../../data/pricing_plans_data";
import { BiDollar } from "react-icons/bi";
import BlackButton from "../../../utils/blackButton";

const PricingComponent: React.FC = () => {
  return (
    <>
      <section className="py-20 w-full font-poppins bg-gray-50">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3 text-black">
          <h5
            data-aos="fade-up"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="relative w-fit mx-auto text-base capitalize after:absolute after:-left-4 after:rounded-full after:top-[50%] after:-translate-y-[50%] after:h-[8px] after:w-[8px] after:bg-primary"
          >
            Know what you pay for
          </h5>
          <h1
            data-aos="fade-up"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="xl:text-5xl text-center lg:text-4xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
          >
            Our <span className="text-primary">Pricing</span> plans
          </h1>

          <div className="mt-10">
            <div
              data-aos="fade-up"
              ata-aos-easing="ease-in"
              data-aos-duration="1000"
              className="grid grid-cols-3 w-fit mx-auto"
            >
              {pricingPlans.map((data, index) => {
                const { price, plan, plansAddOns } = data;

                return (
                  <div
                    key={index}
                    className="bg-white flex justify-center odd:scale-y-[0.9] even:scale-x-[1.0] 2:bg-primary px-20 py-10 ring-1 ring-gray-100"
                  >
                    <div className="text-center">
                      <h2 className="text-sm">{plan}</h2>
                      <h1 className="text-primary my-2 justify-center font-poppins font-bold text-4xl flex items-center">
                        <BiDollar />
                        <div>{price}</div>
                      </h1>
                      <div className="mt-4 text-sm flex flex-col space-y-2">
                        {plansAddOns.map((data, index) => {
                          return <div key={index}>{data}</div>;
                        })}
                      </div>

                      <div className="mt-4 w-fit mx-auto">
                        <BlackButton text="Get plan" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
