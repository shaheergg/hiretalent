import { pocketbase } from "../config";
import { Outlet, Navigate } from "react-router-dom";

const Agency = () => {
  const isLoggedIn = pocketbase.authStore.isValid;
  const role = pocketbase.authStore.model.role;

  if (isLoggedIn && role === "agency") {
    return <Outlet />;
  }
  return <Navigate to="/login/agency" />;
};

export default Agency;
