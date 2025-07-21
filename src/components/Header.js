import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [logData, setLogData] = useState("Login");
  console.log("header component render");
  return (
    <div className="header">
      <div className="logo-container">
        <img alter="logo" className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            {" "}
            <Link to="/">Home </Link>
          </li>

          <li>
            {" "}
            <Link to="/about">About us</Link>
          </li>

          <li>
            {" "}
            <Link to="/contact">Contact </Link>
          </li>

          <li>cart</li>
          <button
            onClick={() => {
              logData === "Login" ? setLogData("Logout") : setLogData("Login");
            }}
          >
            {logData}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
