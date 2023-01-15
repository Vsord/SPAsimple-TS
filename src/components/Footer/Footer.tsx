import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCopyright}>2021 © copyright</div>
    </div>
  );
};

export default Footer;
