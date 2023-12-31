interface ButtonPropsType {
  text: string;
  onClick: () => void;
}

const BlackButton = ({ text, onClick }: ButtonPropsType) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outline-none rounded-full duration-300 ease-in hover:shadow-none py-2.5 px-5 bg-black text-white"
      >
        {text}
      </button>
    </>
  );
};

export default BlackButton;
