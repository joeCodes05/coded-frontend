import React from "react";
import { peopleData } from "../constants/peopleData";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const LeftBar = () => {
  return (
    <>
      <div className="bg-white w-[25%] lg:block fixed right-0 h-full hidden shadow z-20 p-4">
        <div className="md:basis-1/2 basis-2/3 flex bg-light rounded-md items-center p-2 gap-2">
          <div>
            <IoSearch />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none placeholder:text-gray-900 placeholder:text-sm"
          />
        </div>

        <div className="bg-light rounded-md p-4 mt-3">
          <h1 className="text-gray-900 font-semibold text-base">
            Suggested for you
          </h1>

          <div className="mt-4 flex flex-col space-y-3">
            {peopleData.map((data, index) => {
              const { userName, name, image } = data;

              return (
                <Link key={index} to="/" className="no-underline outline-none">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
                        <img src={image} width="100%" alt={userName} />
                      </div>

                      <div className="text-left md:block hidden">
                        <h5 className="text-gray-900 font-semibold text-sm truncate overflow-hidden xl:max-w-[100px] max-w-[50px]">
                          {name}
                        </h5>
                        <h5 className="text-gray-500 text-[.7rem] xl:max-w-fit max-w-[70px] truncate">
                          @{userName}
                        </h5>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <button className="text-primary hover:underline text-sm rounded-full">
                        Follow
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-2">
            <Link
              to="/"
              className="underline outline-none text-primary text-[.8rem]"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
