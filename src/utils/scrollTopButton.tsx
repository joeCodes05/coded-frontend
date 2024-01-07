import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTop: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const showButton = () => {
    if (window.scrollY >= 100) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    showButton();
    window.addEventListener("scroll", showButton);
  }, []);

  // scroll to top of page when button is clicked
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <button
        onClick={scrollTop}
        className={`fixed duration-700 outline-none ${
          show ? "translate-y-0" : "translate-y-[100vh]"
        } h-[40px] w-[40px] bg-primary rounded-full bottom-0 right-0 m-5 grid place-items-center text-black`}
      >
        <IoIosArrowRoundUp />
      </button>
    </>
  );
};

export default ScrollToTop;
