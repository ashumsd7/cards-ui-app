import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex gap-2 relative">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
