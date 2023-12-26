import React, { useContext } from "react";
import Logo from "../utils/logo";
import { SidebarContext } from "../context/sidebarContext";
import { IoIosClose } from "react-icons/io";
import { sidebarData } from "../constants/siderbarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <>
      <aside
        className={`h-full lg:w-[20%] md:w-[25%] w-[80%] md:relative overflow-hidden z-30 md:left-0 ${
          open ? "left-0" : "-left-full"
        } duration-500 fixed shadow bg-white overflow-hidden`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute md:hidden outline-none text-4xl mx-3 right-0 text-gray-900 grid place-items-center"
        >
          <IoIosClose />
        </button>
        <Logo />

        <div className="md:py-10 py-5 overflow-y-auto px-5 md:max-h-full max-h-[100%] flex flex-col space-y-3">
          {sidebarData.map((data, index) => {
            const { title, icon, path } = data;

            return (
              <Link to={path} key={index} className="outline-none no-underline">
                <div className="py-2.5 px-2 rounded-md duration-500 hover:bg-gray-100 bg-transparent flex items-center gap-3">
                  {icon}
                  <div className="text-base">{title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
