import React from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import { Navigate, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const isAuth = true;
  return (
    <div className="default-layout">
      <header className="header">
        <Header />
      </header>
      {isAuth ? <main className="main"><Outlet/></main>:<Navigate to="/"/>}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
