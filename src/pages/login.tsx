import { Link } from "react-router-dom";
import Logo from "../utils/logo";
// import ThirdPartyBtn from "../utils/thirdPartyBtn";
// import { FcGoogle } from "react-icons/fc";
// import { IoLogoApple } from "react-icons/io5";
import InputField from "../utils/inputFields";
import PasswordFiled from "../utils/passwordInput";
import { useState } from "react";

const Login = () => {
  const [userNameEmail, setUserNameEmail] = useState("");
  const getCurrentValue = (e: React.FormEvent<HTMLInputElement>) => {
    setUserNameEmail(e.currentTarget.value);
  };

  const [password, setPassword] = useState("");
  const getPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-30 h-full bg-gray-900 bg-opacity-70 w-full flex items-center justify-center">
        <div className="bg-white rounded-[16px] shadow md:p-8 p-5 md:w-[450px] w-[350px]">
          <div className="mx-auto w-fit">
            <Logo />
          </div>

          <div className="mt-8">
            <form className="flex flex-col space-y-4">
              <div>
                <InputField
                  type="text"
                  value={userNameEmail}
                  onchange={getCurrentValue}
                  placeholder="Username or email"
                />
              </div>
              <div>
                <PasswordFiled value={password} onchange={getPassword} />
                <Link
                  to="/"
                  className="ml-auto w-fit text-[.8rem] text-primary underline block font-light"
                >
                  Forgot password?
                </Link>
              </div>
              <div>
                <button className="p-2 rounded-md bg-primary shadow text-white w-full outline-none">
                  Log in
                </button>
              </div>
            </form>

            <div className="text-gray-600 mt-2 text-[.8rem] font-light">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-primary">
                Sign Up
              </Link>
            </div>

            {/* <div className="py-3 flex items-center text-sm text-gray-900 before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-3 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-3">
              or
            </div>
            <div className="flex md:flex-row flex-col items-center gap-2">
              <ThirdPartyBtn
                icon={<FcGoogle className="text-2xl" />}
                text="Continue with google"
              />
              <ThirdPartyBtn
                icon={<IoLogoApple className="text-2xl" />}
                text="Continue with apple"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
