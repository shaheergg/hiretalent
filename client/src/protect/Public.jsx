import { pocketbase } from "../config";
import { Outlet, Navigate } from "react-router-dom";

const Public = () => {
  const isLoggedIn = pocketbase.authStore.isValid;
  const role = pocketbase.authStore.model.role;

  if (isLoggedIn) {
    if (role === "agency") return <Navigate to="/dashboard/agency" />;
    if (role === "engineer") return <Navigate to="/dashboard/engineer" />;
  }

  return <Outlet />;
};

export default Public;
