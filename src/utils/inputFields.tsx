interface InputType {
  type: string;
  placeholder: string;
  value: string;
  onchange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({ type, placeholder, value, onchange }: InputType) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onchange}
        className="p-2 w-full outline-none rounded-md bg-light placeholder:text-gray-900 placeholder:text-sm"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
