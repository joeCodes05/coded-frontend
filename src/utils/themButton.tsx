import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import check from "../assets/svg/check.svg";

const ThemeButton = () => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="h-[30px] outline-none w-[30px] bg-light ring-1 rounded-full ring-gray-400 grid place-items-center">
          <IoColorPaletteOutline />
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
          <Popover.Panel className="absolute -right-5 z-10 m-4 mt-7 flex w-fit">
            <div className="w-[250px] flex-auto overflow-hidden rounded-[16px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-base">
                  Change appearance
                </h3>

                <div className="mt-3">
                  <div className="flex flex-col space-y-2">
                    <button className="p-2 rounded-md outline-none duration-300 text-left bg-transparent hover:bg-light text-gray-900 text-sm flex items-center gap-2">
                      <div className="h-[13px] w-[13px] rounded-full overflow-hidden ring-1 ring-gray-400"></div>
                      <div>System default</div>
                    </button>

                    <button className="p-2 rounded-md outline-none duration-300 text-left bg-transparent hover:bg-light text-gray-900 text-sm flex items-center gap-2">
                      <div className="h-[13px] w-[13px] rounded-full overflow-hidden ring-1 ring-gray-400">
                        <img src={check} width={"100%"} alt="check svg" />
                      </div>
                      <div>Light mode</div>
                    </button>

                    <button className="p-2 rounded-md outline-none duration-300 text-left bg-transparent hover:bg-light text-gray-900 text-sm flex items-center gap-2">
                      <div className="h-[13px] w-[13px] rounded-full overflow-hidden ring-1 ring-gray-400"></div>
                      <div>Dark mode</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default ThemeButton;
