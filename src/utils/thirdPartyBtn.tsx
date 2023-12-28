interface ButtonType {
  icon: any;
  text: string;
}

const ThirdPartyBtn = ({ icon, text }: ButtonType) => {
  return (
    <>
      <button className="p-2 rounded-full bg-light shadow flex items-center w-fit gap-1 ring-1 ring-gray-300 mx-auto">
        {icon}
        <div className="text-gray-900 text-[.8rem]">{text}</div>
      </button>
    </>
  );
};

export default ThirdPartyBtn;
