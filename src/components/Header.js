import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [logData, setLogData] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-amber-50">
      <div className="w-36">
        <img alter="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center m-4 p-4 ">
        <ul className=" flex gap-4">
          <li>Online Status-{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            {" "}
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About us</Link>
          </li>

          <li>
            {" "}
            <Link to="/contact">Contact </Link>
          </li>
          <li>
            {" "}
            <Link to="/laptop">Laptop </Link>
          </li>
          <li>cart</li>
          <li>
            <button
              onClick={() => {
                logData === "Login"
                  ? setLogData("Logout")
                  : setLogData("Login");
              }}
            >
              {logData}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
