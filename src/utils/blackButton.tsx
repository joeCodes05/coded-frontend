import { ButtonPropsType } from "../types/button_props_types";

const BlackButton = ({ text, onClick }: ButtonPropsType) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outline-none duration-300 rounded-full ease-in text-sm shadow-lg hover:shadow-none py-2.5 px-5 bg-black text-white"
      >
        {text}
      </button>
    </>
  );
};

export default BlackButton;
