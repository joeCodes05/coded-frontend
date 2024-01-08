import { Link } from "react-router-dom";
import logoSvgMobile from "../assets/svgs/logo-mobile.svg";

const Logo: React.FC = () => {
  return (
    <>
      <Link to="/" className="no-underline outline-none">
        <h1 className="sm:block hidden text-3xl font-bold text-black">Coded</h1>
        <img
          className="h-8 ml-24 w-auto sm:hidden block"
          src={logoSvgMobile}
          alt="coded logo"
        />
      </Link>
    </>
  );
};

export default Logo;
