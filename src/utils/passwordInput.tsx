import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

interface PaswordPropsTypes {
  value: string;
  onchange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const PasswordFiled = ({ value, onchange }: PaswordPropsTypes) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 rounded-md bg-light p-2">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onchange}
          className="w-full outline-none bg-transparent placeholder:text-gray-900 placeholder:text-sm"
          placeholder="Password"
        />

        {showPassword ? (
          <GoEyeClosed
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <GoEye
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </>
  );
};

export default PasswordFiled;
