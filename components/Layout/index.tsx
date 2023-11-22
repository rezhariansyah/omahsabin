import React, { ReactNode } from "react";
import MobileViewNavbar from "@/components/Navbar/MobileViewNavbar";
import WebViewNavbar from "@/components/Navbar/WebViewNavbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 min-h-screen">
      <div className="lg:hidden">
        <MobileViewNavbar>{children}</MobileViewNavbar>
      </div>
      <div className="hidden lg:block">
        <WebViewNavbar>{children}</WebViewNavbar>
      </div>
    </div>
  );
};

export default Layout;
