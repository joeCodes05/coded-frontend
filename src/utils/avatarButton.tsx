import React, { Fragment, ReactElement } from "react";
import avatar from "../assets/images/avatar.jpg";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FiSettings, FiUser } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const Avatar = () => {
  interface Dropdown {
    icon: ReactElement;
    title: string;
    path: string;
  }

  const dropdownData: Dropdown[] = [
    {
      icon: <FiUser />,
      title: "User Profile",
      path: "/",
    },
    {
      icon: <FiSettings />,
      title: "Account Setting",
      path: "/",
    },
    {
      icon: <IoIosLogOut />,
      title: "Log out",
      path: "/",
    },
  ];

  return (
    <>
      <Popover className="relative">
        <Popover.Button className="flex gap-2 items-center outline-none">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img src={avatar} width={"100%"} alt="avatar" />
          </div>
          <div className="text-left md:block hidden">
            <h5 className="text-gray-900 font-semibold text-sm">
              Nathaniel Joseph
            </h5>
            <h5 className="text-gray-400 text-[.7rem]">Software engineer</h5>
          </div>
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            className={
              "absolute left-1/2 md:-translate-x-1/2 -translate-x-[190px] w-[230px] z-50 mt-5 flex px-4"
            }
          >
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-3 flex flex-col space-y-2">
                {dropdownData.map((data, index) => {
                  const { icon, title, path } = data;

                  return (
                    <Link
                      key={index}
                      to={path}
                      className="no-underline outline-none"
                    >
                      <div className="p-2 flex gap-2 items-center hover:bg-gray-100 duration-300 bg-transparent rounded-md text-sm">
                        {icon}
                        <div>{title}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Avatar;
