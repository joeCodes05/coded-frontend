import { ButtonPropsType } from "../types/button_props_types";
import { IoIosArrowRoundForward } from "react-icons/io";

const TextButton = ({ text, onClick }: ButtonPropsType) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outline-none group relative p-2.5 flex items-center gap-2 px-5 text-white duration-300 ease-in text-sm bg-transparent"
      >
        <div>{text}</div>
        <div className="h-[30px] w-[30px] rounded-full group-hover:ml-2 duration-300 text-lg text-black bg-primary grid place-items-center">
          <IoIosArrowRoundForward />
        </div>
      </button>
    </>
  );
};

export default TextButton;
