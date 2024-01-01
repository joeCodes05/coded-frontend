import { Link } from "react-router-dom";
import logoSvg from "../assets/svgs/logo.svg";
import logoSvgMobile from "../assets/svgs/logo-mobile.svg";

const Logo: React.FC = () => {
  return (
    <>
      <Link to="/" className="no-underline outline-none">
        <img
          data-aos="fade-down"
          ata-aos-easing="ease-in"
          data-aos-duration="1000"
          className="h-10 w-auto sm:block hidden"
          src={logoSvg}
          alt="coded logo"
        />
        <img
          data-aos="fade-down"
          ata-aos-easing="ease-in"
          data-aos-duration="1000"
          className="h-8 ml-24 w-auto sm:hidden block"
          src={logoSvgMobile}
          alt="coded logo"
        />
      </Link>
    </>
  );
};

export default Logo;
