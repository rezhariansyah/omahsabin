import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return <div className="lg:max-w-7xl mx-auto px-4 md:px-8">{children}</div>;
};

export default Layout;
