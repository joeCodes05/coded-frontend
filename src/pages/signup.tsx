import { Link } from "react-router-dom";
import PasswordFiled from "../utils/passwordInput";
import InputField from "../utils/inputFields";
import Logo from "../utils/logo";
import React, { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");

  const getUserName = (e: React.FormEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const [emailAddress, setEmailAddress] = useState("");

  const getEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmailAddress(e.currentTarget.value);
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
                  value={userName}
                  onchange={getUserName}
                  placeholder="Username"
                />
              </div>
              <div>
                <InputField
                  type="text"
                  value={emailAddress}
                  onchange={getEmail}
                  placeholder="Eamil address"
                />
              </div>
              <div>
                <PasswordFiled value={password} onchange={getPassword} />
              </div>
              <div>
                <button className="p-2 rounded-md bg-primary shadow text-white w-full outline-none">
                  Log in
                </button>
              </div>
            </form>

            <div className="text-gray-600 mt-2 text-[.8rem] font-light">
              Already have an account?{" "}
              <Link to="/login" className="underline text-primary">
                Login
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

export default SignUp;
