import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!isActive);
  };
  
  return (
    <nav class="navbar">
      <div class="brand-title"></div>
      <a href="#" class="toggle-button" onClick={toggleNavbar}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div className={isActive ? "active navbar-links" : "navbar-links"}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

/*import { NavLink } from "react-router-dom"
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.links}>Login</div>
            <div className={styles.links}>Sign up</div>
            <div className={styles.linksLeft}>Tutor Finder</div>
        </div>
    )
}

export default Navbar*/