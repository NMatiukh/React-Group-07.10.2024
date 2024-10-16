import "./Header.css";
import logo from "../../logo.svg";
import Info from "../Info/Info";

const Header = function () {
  return (
    <header className="Header">
      <div className="Header-brand">
        <img src={logo} className="Header-logo" alt="logo" />
        <span>Test App</span>
      </div>
      <Info />
    </header>
  );
};

export default Header;
