import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInnerBlock}>
        <div className={styles.logo}></div>
        <div className={styles.burgerMenu}>
          <div className={styles.burgerMenuLine}></div>
          <div className={styles.burgerMenuLine}></div>
          <div className={styles.burgerMenuLine}></div>
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
