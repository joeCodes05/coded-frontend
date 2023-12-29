import React, { useContext, useEffect, useState } from "react";
import { FcMenu } from "react-icons/fc";
import { GoBell } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import Avatar from "../utils/avatarButton";
import { SidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { setOpen } = useContext(SidebarContext);
  const [navState, setNavState] = useState(false);

  const updateNavState = () => {
    if (window.scrollY >= 60) {
      setNavState(true);
    } else setNavState(false);
  };

  useEffect(() => {
    updateNavState();
    window.addEventListener("scroll", updateNavState);
  });
  return (
    <>
      <nav
        className={`bg-white py-3 w-full md:px-5 px-3 shadow h-fit flex lg:gap-0 gap-3 z-10 ${
          navState ? "sticky top-0" : "relative"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="outline-none bg-transparent p-0 text-xl block lg:hidden"
        >
          <FcMenu />
        </button>

        <Avatar />

        <div className="ml-auto">
          <div className="ml-auto w-fit">
            <div className="flex gap-3 items-center">
              <button className="h-[30px] group relative w-[30px] bg-light ring-1 rounded-full ring-gray-400 grid place-items-center">
                <GoBell />
                <div className="absolute text-[.7rem] -bottom-6 group-hover:opacity-100 duration-300 ease-in opacity-0 bg-white shadow py-[1px] px-2 rounded-md">
                  Notifications
                </div>
              </button>
              <button className="h-[30px] group relative w-[30px] bg-light ring-1 rounded-full ring-gray-400 grid place-items-center">
                <IoMoonOutline />
                <div className="absolute text-[.7rem] -bottom-6 group-hover:opacity-100 duration-300 ease-in opacity-0 bg-white shadow py-[1px] px-2 rounded-md">
                  Theme
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
