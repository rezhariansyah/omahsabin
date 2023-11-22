"use client";
import React, { ReactNode } from "react";
import MobileViewNavbar from "@/components/Navbar/MobileViewNavbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="lg:max-w-7xl mx-auto px-4 md:px-8 min-h-screen">
      {children}
      <MobileViewNavbar />
    </div>
  );
};

export default Layout;
