import "./Navbar.scss";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("authenticated");
    if (auth) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  const toggleNavbar = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    sessionStorage.setItem("authenticated", false);
  };

  return (
    <nav className="navbar">
      <div>
        <a className="brand-title" href="/">
          TutorFinder
        </a>
      </div>
      <a className="tutorlist" href="/signin">
        Tutor List
      </a>

      <div className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        {loggedin ? (
          <ul>
            <li>
              <a href="/signin">Log in</a>
            </li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="/signin" onClick={handleLogout}>
                Sign out
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
