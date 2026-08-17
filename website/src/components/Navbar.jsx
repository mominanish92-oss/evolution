import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import gymLogo from "../assets/logo/logo.jpg";

function Navbar() {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "TRAINERS", path: "/trainers" },
    { name: "CERTIFICATION", path: "/certification" },
    { name: "MEMBERSHIP", path: "/membership" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="navbar">
      {/* LOGO */}
      <Link to="/" className="nav-brand">
        <img
          src={gymLogo}
          alt="Evolution Gym Fitness Logo"
          className="navbar-logo"
        />

        <div className="brand-text">
          <span>EVOLUTION</span>
          <small>GYM FITNESS</small>
        </div>
      </Link>

      {/* NAVIGATION */}
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;