import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher.jsx";

const Layout = () => {

  return (
    <div className="bg:white dark:bg-slate-800 text-slate-900 dark:text-stone-300">
      <Header />
      <div>
        <Outlet />
        <DarkModeSwitcher />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
