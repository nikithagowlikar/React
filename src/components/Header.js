import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
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
