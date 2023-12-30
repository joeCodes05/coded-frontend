import { Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../utils/logo";
import { IoIosArrowRoundForward } from "react-icons/io";
import PrimaryButton from "../utils/primaryButton";

const Navbar: React.FC = () => {
  interface NavbarLinksTypes {
    name: string;
    path: string;
    isActive: boolean;
  }

  const navbarLinks: NavbarLinksTypes[] = [
    { name: "Home", path: "/", isActive: false },
    { name: "About", path: "/about", isActive: false },
    { name: "Services", path: "/services", isActive: false },
    { name: "Pricing", path: "/pricing", isActive: false },
    { name: "Portfolio", path: "/portfolio", isActive: false },
    { name: "Blog", path: "/blog", isActive: false },
    { name: "Contact", path: "/contact", isActive: false },
  ];

  // change navbar state on scroll
  const [navFixed, setNavFixed] = useState<boolean>(false);

  const updateNavState: () => void = () => {
    if (window.scrollY >= 60) {
      return setNavFixed(true);
    }

    setNavFixed(false);
  };

  useEffect(() => {
    updateNavState();
    window.addEventListener("scroll", updateNavState);
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={`bg-white font-poppins duration-500 ease-in fixed top-0 left-0 right-0 w-screen ${
          navFixed ? "shadow-md" : "shadow-none"
        }`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
              <div className="relative flex h-fix items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900  outline-none">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IoCloseOutline
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoMenuOutline
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                  <Logo />

                  <div className="hidden lg:mx-auto lg:flex lg:items-center">
                    <div className="flex space-x-10 items-center">
                      {navbarLinks.map((data, index) => {
                        const { name, path, isActive } = data;

                        return (
                          <Link
                            key={index}
                            to={path}
                            className={`no-underline outline-none text-base duration-300 ease-in hover:text-primary ${
                              isActive ? "text-primary" : "text-gray-900"
                            }`}
                          >
                            {name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    className="no-underline outline-none sm:block hidden"
                    to="/sign-up"
                  >
                    <PrimaryButton text="Get started" onClick={() => {}} />
                  </Link>

                  <Link
                    to={"/sign-up"}
                    className="no-underline sm:hidden outline-none text-gray-900 flex items-center gap-2 font-semibold"
                  >
                    <div>Get Started</div>
                    <IoIosArrowRoundForward className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-2 px-2 pb-3 pt-2">
                {navbarLinks.map((data, index) => {
                  const { name, path, isActive } = data;

                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`no-underline block text-gray-900 text-lg p-2 hover:bg-gray-100 rounded-md outline-none duration-300 ease-in ${
                        isActive ? "bg-gray-100" : "bg-transparent"
                      }`}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
