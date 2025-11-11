import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header /> {/* Se muestra en todas las páginas protegidas */}
      <div className="container mt-4">
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </div>
    </>
  );
};

export default Layout;
