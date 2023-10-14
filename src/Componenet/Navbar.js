import React from "react";
import { FaKeyboard } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav-main">
      <nav className="navbar">
        <div className="logo">
          <h1>TypeCat</h1>
          <br />
          <FaKeyboard />
          <br />
        </div>
        <div className="user-container"><FaUserCircle /></div>
        
      </nav>
      
      <header className="header">
        <div className="count-timer">
          <p>60s</p>
        </div>
        <div className="chose-timer">
          <p>15s</p>
          <p>30s</p>
          <p>60s</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
