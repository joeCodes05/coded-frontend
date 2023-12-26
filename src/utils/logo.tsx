import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Logo() {
  return (
    <Link to="/" className="no-underline outline-none">
      <div className="py-3 px-5">
        <img src={logo} width={"100"} alt="logo" />
      </div>
    </Link>
  );
}

export default Logo;
