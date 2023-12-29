import { IoImageOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import React, { useEffect, useState } from "react";

const CreatePostTextArea = () => {
  const [disabled, setDisabled] = useState(true);
  const [postValue, setPostValue] = useState("");

  const getPostValue: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setPostValue(e.currentTarget.value);
  };

  useEffect(() => {
    const checkPostInputLength = () => {
      if (postValue.length < 1) return setDisabled(true);
      setDisabled(false);
    };

    checkPostInputLength();
  });

  return (
    <>
      <form className="bg-white p-4 rounded-md w-full outline-none ring-1 ring-gray-300 shadow">
        <textarea
          cols={30}
          rows={3}
          value={postValue}
          onChange={getPostValue}
          placeholder="What is happening?!"
          className="outline-none w-full placeholder:text-lg resize-none"
        ></textarea>

        {/* image preview */}
        <div className="grid grid-cols-2 gap-3"></div>

        <div className="flex items-center">
          <div className="flex gap-2">
            <button className="outline-none h-[30px] w-[30px] grid place-items-center duration-300 rounded-full bg-opacity-0 hover:bg-opacity-15 bg-primary p-0 text-lg text-primary">
              <IoImageOutline />
            </button>

            <button className="outline-none h-[30px] w-[30px] grid place-items-center duration-300 rounded-full bg-opacity-0 hover:bg-opacity-15 bg-primary p-0 text-lg text-primary">
              <GoPaperclip />
            </button>

            <button className="outline-none h-[30px] w-[30px] grid place-items-center duration-300 rounded-full bg-opacity-0 hover:bg-opacity-15 bg-primary p-0 text-lg text-primary">
              <BsEmojiSmile />
            </button>
          </div>

          <div className="ml-auto">
            <button
              disabled={disabled}
              className="py-1.5 disabled:cursor-not-allowed disabled:opacity-50 px-3 rounded-md outline-none text-white bg-primary"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreatePostTextArea;
