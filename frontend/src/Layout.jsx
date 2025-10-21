import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* page content renders here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
