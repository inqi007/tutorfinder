import "./Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">TutorFinder</div>
      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        <ul>
          <li>
            <a href="/signin">Log in</a>
          </li>
          <li>
            <a href="/signup">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
