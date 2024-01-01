import { collaborationData } from "../../../data/collaboration_data";
import OutlineButtons from "../../../utils/outlineButton";
import TextButton from "../../../utils/textButton";

const CollaborationComponent: React.FC = () => {
  return (
    <>
      <section className="bg-black w-full py-20 font-poppins">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3 text-white">
          <h5
            data-aos="fade-right"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="relative ml-4 text-base capitalize after:absolute after:-left-4 after:rounded-full after:top-[50%] after:-translate-y-[50%] after:h-[8px] after:w-[8px] after:bg-primary"
          >
            Discover Our Company
          </h5>
          <h1
            data-aos="fade-right"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="lg:text-5xl md:text-3xl text-2xl font-normal capitalize md:mt-5 mt-3"
          >
            How we <span className="text-primary">collaborate</span> with you
          </h1>

          <div className="md:mt-20 mt-14 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-10">
            {collaborationData.map((data, index) => {
              const { title, content, Icon } = data;

              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  ata-aos-easing="ease-in"
                  key={index}
                >
                  <div className="flex gap-3 items-center">
                    <Icon className="text-2xl text-primary" />
                    <h3 className="text-xl font-light tracking-wider">
                      {title}
                    </h3>
                  </div>

                  <p className="mt-3 text-gray-400 text-[.8rem]">{content}</p>
                </div>
              );
            })}
          </div>

          <div
            data-aos="fade-up"
            ata-aos-easing="ease-in"
            data-aos-duration="1000"
            className="mt-10 flex gap-2 items-center"
          >
            <TextButton text="Learn more" onClick={() => {}} />
            <OutlineButtons text="How we work" onClick={() => {}} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CollaborationComponent;
