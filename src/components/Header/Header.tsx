import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInnerBlock}>
        <div className={styles.logo}></div>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/products">PRODUCTS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
