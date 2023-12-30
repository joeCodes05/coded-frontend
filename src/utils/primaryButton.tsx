interface ButtonPropsType {
  text: string;
  onClick: () => void;
}

const PrimaryButton = ({ text, onClick }: ButtonPropsType) => {
  return (
    <>
      <button
        onClick={onClick}
        className="outline-none rounded-md shadow-lg duration-300 ease-in hover:shadow-none py-2.5 px-3.5 bg-primary text-white"
      >
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
