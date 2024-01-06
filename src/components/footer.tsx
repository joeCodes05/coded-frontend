import React, { ReactNode } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  interface SocialLinksStructure {
    url: string;
    icon: ReactNode;
  }

  const socialLinks: SocialLinksStructure[] = [
    {
      url: "https://www.instagram.com/",
      icon: <BsInstagram />,
    },

    {
      url: "https://www.facebook.com/",
      icon: <BsFacebook />,
    },

    {
      url: "https://www.twitter.com/",
      icon: <BsTwitterX />,
    },

    {
      url: "https://www.linkedin.com/",
      icon: <BsLinkedin />,
    },
  ];

  interface NavbarLinksTypes {
    name: string;
    path: string;
  }

  const navbarLinks: NavbarLinksTypes[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  const liveSupportLinks: NavbarLinksTypes[] = [
    { name: "Live Chat", path: "/" },
    { name: "Customer Service", path: "/" },
    { name: "FAQs", path: "/" },
    { name: "Community", path: "/" },
  ];

  const policyLinks: NavbarLinksTypes[] = [
    { name: "Privacy Policy", path: "/" },
    { name: "Term & Conditions", path: "/" },
    { name: "Client Privacy", path: "/" },
  ];

  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <>
      <footer className="py-20 w-full font-poppins bg-black">
        <div className="max-w-6xl w-full mx-auto xl:px-0 md:px-6 px-3 text-white">
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="basis-2/4">
              <h1 className="text-3xl font-semibold text-primary">Coded</h1>

              <p className="mt-3 text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                quod. Nihil fugiat velit architecto sit facere ipsum in hic
                laboriosam quo...
              </p>

              <div className="mt-8">
                <div className="flex gap-3 items-center">
                  {socialLinks.map((data, index) => {
                    const { url, icon } = data;

                    return (
                      <a
                        href={url}
                        className="no-underline outline-none"
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="p-3 rounded-md bg-primary text-black shadow grid place-items-center">
                          {icon}
                        </button>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="basis-1/4">
              <h1 className="text-xl font-[500] text-primary">Quick Links</h1>
              <div className="mt-3 flex flex-col space-y-2">
                {navbarLinks.map((data, index) => {
                  const { name, path } = data;

                  return (
                    <Link
                      to={path}
                      key={index}
                      className="no-underline outline-none font-light text-gray-400"
                    >
                      {name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="no-underline outline-none font-light text-gray-400"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="basis-1/4">
              <h1 className="text-xl font-[500] text-primary">Live Support</h1>

              <div className="mt-3 flex flex-col space-y-2">
                {liveSupportLinks.map((data, index) => {
                  const { name, path } = data;

                  return (
                    <Link
                      to={path}
                      key={index}
                      className="no-underline outline-none font-light text-gray-400"
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="basis-1/4">
              <h1 className="text-xl font-[500] text-primary">Other Links</h1>

              <div className="mt-3 flex flex-col space-y-2">
                {policyLinks.map((data, index) => {
                  const { name, path } = data;

                  return (
                    <Link
                      to={path}
                      key={index}
                      className="no-underline outline-none font-light text-gray-400"
                    >
                      {name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="no-underline outline-none font-light text-gray-400"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 mb-5 border-t border-t-gray-700"></div>
          <div className="text-center text-gray-400 text-sm">
            All rights reserved, <span>{currentYear}</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
