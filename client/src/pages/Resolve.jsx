import React from "react";
import { pocketbase } from "../config";
import { Navigate } from "react-router-dom";

const Resolve = () => {
  if (pocketbase.authStore.model.role === "engineer") {
    return <Navigate to="/dashboard/engineer" />;
  } else if (pocketbase.authStore.model.role === "agency") {
    return <Navigate to="/dashboard/agency" />;
  }
};

export default Resolve;
