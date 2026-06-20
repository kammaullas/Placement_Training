import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";

import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);

  const { dark, setDark } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>

      <h2>SkillHub</h2>

      <ul>

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        {user && (
          <li
            onClick={() => setOpen(!open)}
            className="menu-item"
          >
            Courses ▼
            {open && (
              <div className="dropdown">
                <Link to="/courses">My Courses</Link>
                <Link to="/add-course">Add Course</Link>
              </div>
            )}
          </li>
        )}

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {user ? (
          <li>
            <span style={{ marginRight: "10px", color: "gray" }}>Hello, {user.name}</span>
            <button onClick={logout} style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer", fontSize: "16px" }}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>

      <button
        className="theme-btn"
        onClick={() => setDark(!dark)}
      >

        {
          dark
            ? <FaSun />
            : <FaMoon />
        }

      </button>

    </nav>
  );
}

export default Navbar;
