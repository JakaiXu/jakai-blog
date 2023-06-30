import React from "react";
import Header from "./Header";
export type ChildrenType = {
  children: React.ReactNode;
};
const Layout = ({ children }: ChildrenType) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
