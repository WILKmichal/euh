import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles.module.scss";

// import { useLocation } from "react-router-dom";
// import routes, { routeNames } from 'routes';
// import Footer from './Footer';
// import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  //   const { search } = useLocation();
  return (
    <div
      className={styles.backgroundTheme}
      style={{
        minHeight: "100vh",
        backgroundColor:
          "linear-gradient(to right bottom, #000000, #0d0d0d, #171616, #1e1d1e, #262525, #362828, #462b2b, #552e2d, #6d2a28, #842220, #991714, #ad0000);",
      }}
      // className="d-flex flex-column flex-fill wrapper"
    >
      <Header />
      <main className="d-flex flex-column flex-grow-1 layout">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
