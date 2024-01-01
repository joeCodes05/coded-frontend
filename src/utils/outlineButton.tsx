import { ButtonPropsType } from "../types/button_props_types";

const OutlineButtons = ({ text, onClick }: ButtonPropsType) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outline-none ring-2 ring-primary rounded-full py-2.5 px-5 items-center gap-2 text-primary duration-300 ease-in text-sm bg-transparent"
      >
        {text}
      </button>
    </>
  );
};

export default OutlineButtons;
