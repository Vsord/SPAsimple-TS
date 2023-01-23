import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props: any) => {
  return (
    <div className={props.status === 200 ? styles.footer : styles.footerBottom}>
      <div className={styles.footerCopyright}>2021 © COPYRIGHT</div>
    </div>
  );
};

export default Footer;
