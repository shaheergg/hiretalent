import React from "react";
import AgencyNavbar from "../components/agency/Navbar";
const AgencyLayout = ({ children }) => {
  return (
    <div>
      <AgencyNavbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default AgencyLayout;
