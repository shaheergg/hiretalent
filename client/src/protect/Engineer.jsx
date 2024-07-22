import { pocketbase } from "../config";
import { Outlet, Navigate } from "react-router-dom";

const Engineer = () => {
  const isLoggedIn = pocketbase.authStore.isValid;
  const role = pocketbase.authStore.model.role;

  if (isLoggedIn && role === "engineer") {
    return <Outlet />;
  }
  return <Navigate to="/login/engineer" />;
};

export default Engineer;
