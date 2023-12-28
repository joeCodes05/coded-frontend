import avatar from "../assets/images/avatar.jpg";
import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <>
      <Link to="/" className="no-underline outline-none">
        <button className="flex gap-2 items-center outline-none">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img src={avatar} width={"100%"} alt="avatar" />
          </div>
          <div className="text-left">
            <h5 className="text-gray-900 font-semibold text-sm">
              Nathaniel Joseph
            </h5>
            <h5 className="text-gray-400 text-[.7rem]">@nathanCodes05</h5>
          </div>
        </button>
      </Link>
    </>
  );
};

export default Avatar;
