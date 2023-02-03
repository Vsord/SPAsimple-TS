import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerInnerBlock">
        <div className="logo"></div>
        <div className="burgerMenu">
          <div className="burgerMenuLine"></div>
          <div className="burgerMenuLine"></div>
          <div className="burgerMenuLine"></div>
        </div>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
