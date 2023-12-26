import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { FcMenu } from "react-icons/fc";
import { GoBell, GoUpload } from "react-icons/go";
import Avatar from "../utils/avatarButton";
import { SidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { setOpen } = useContext(SidebarContext);

  return (
    <>
      <nav className="bg-white py-3 z-50 fixed top-0 right-0 lg:w-[80%] md:w-[75%] w-full lg:px-8 md:px-5 px-3 shadow h-fit flex md:gap-0 gap-3">
        <button
          onClick={() => setOpen(true)}
          className="outline-none bg-transparent p-0 text-xl block md:hidden"
        >
          <FcMenu />
        </button>

        <div className="md:basis-1/2 basis-2/3 flex bg-light rounded-full items-center py-1.5 px-2 gap-2">
          <div>
            <IoSearch />
          </div>
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full bg-transparent outline-none placeholder:text-gray-900 placeholder:text-sm"
          />
        </div>

        <div className="md:basis-1/2 basis-1/3 float-right">
          <div className="ml-auto w-fit">
            <div className="flex gap-3 items-center">
              <button className="h-[30px] group w-[30px] relative bg-light ring-1 rounded-full ring-gray-400 grid place-items-center">
                <GoUpload />
                <div className="absolute text-[.7rem] -bottom-6 group-hover:opacity-100 duration-300 ease-in opacity-0 bg-white shadow py-[1px] px-2 rounded-md">
                  Upload
                </div>
              </button>
              <button className="h-[30px] group relative w-[30px] bg-light ring-1 rounded-full ring-gray-400 grid place-items-center">
                <GoBell />
                <div className="absolute text-[.7rem] -bottom-6 group-hover:opacity-100 duration-300 ease-in opacity-0 bg-white shadow py-[1px] px-2 rounded-md">
                  Notifications
                </div>
              </button>
              <Avatar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
