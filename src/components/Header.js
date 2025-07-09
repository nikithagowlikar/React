import { LOGO_URL } from "../utils/constants";
const Header = () => {
  console.log("LOGO_URL", LOGO_URL);
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
