import "./App.css";
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import Homepage from "@/pages/Home";
import Public from "@/protect/Public";
import Agency from "@/protect/Agency";
import Engineer from "@/protect/Engineer";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AgencyDashboard from "@/pages/agency/Dashboard";
import EngineerDashboard from "@/pages/engineer/Dashboard";
import Browse from "@/pages/Browse";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="" element={<Homepage />} />
          <Route path="login/:role" element={<Login />} />
          <Route path="register/:role" element={<Register />} />
        </Route>
        <Route path="/" element={<Agency />}>
          <Route path="dashboard/agency" element={<AgencyDashboard />} />
        </Route>
        <Route path="/" element={<Engineer />}>
          <Route path="dashboard/engineer" element={<EngineerDashboard />} />
        </Route>
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
