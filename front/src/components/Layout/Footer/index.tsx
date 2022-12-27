import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  function goRepo() {
    window.location.href = "https://github.com/WILKmichal/euh/tree/main";
  }

  return (
    <div className="container-fluid text-center text-md-left">
      <hr />
      <div className="row">
        <div>
          <h5 className="text-uppercase">Michal Fawzi Raphael</h5>
          <span onClick={goRepo} className={styles.ForgotPassword}>
            Github
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
