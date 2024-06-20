import React from "react";
import Navbar from "../../components/navbar";

type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <main className="px-3 lg:px-14">{children}</main>
    </div>
  );
};

export default DashboardLayout;
