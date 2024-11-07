import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <nav className="navBar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="logo" alt="" />
          </Link>
        </div>

        <div className="mainMenu">
          <ul>
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={() => setMenu("blog")}
              className={menu === "blog" ? "active" : ""}
            >
              Blog
            </Link>
            <Link
              to="/service"
              onClick={() => setMenu("service")}
              className={menu === "service" ? "active" : ""}
            >
              Service
            </Link>
            <Link
              to="/about"
              onClick={() => setMenu("about")}
              className={menu === "about" ? "active" : ""}
            >
              About
            </Link>

            <li>
              <a className="btnNav btn" href="#">
                <i className="fa-solid fa-phone"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
