import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "@/components/Logo";
import { useAuthStore } from "@/store/auth";
import { toast } from "sonner";
const Register = () => {
  const { role } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const register = useAuthStore((state) => state.register);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Password does not match");
      return;
    }
    if (!name || !email || !password || !passwordConfirm) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await register({ role, email, password, passwordConfirm, name });
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-xl p-4 px-6 py-10 mx-auto space-y-6 border rounded">
        <div>
          <Logo />
          <span className="text-right capitalize">{role}</span>
        </div>
        <form className="w-full space-y-4">
          <div className="block w-full space-y-2">
            <Label>{role === "engineer" ? "" : "Agency"} Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`Enter your ${
                role === "engineer" ? "" : "Agency"
              } Name`}
            />
          </div>
          <div className="block w-full space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="block w-full space-y-2">
            <Label>Create Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="block w-full space-y-2">
            <Label>Confirm Password</Label>
            <Input
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="block w-full space-y-2">
            <Button onClick={(e) => handleRegister(e)} className="w-full">
              Register
            </Button>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Do you want to create an{" "}
              {role === "engineer" ? "Agency" : "Engineer"} account? Register
              your
              <Link
                to={`/login/${role === "engineer" ? "agency" : "engineer"}`}
                className="hover:underline"
              >
                {" "}
                {role === "engineer" ? "Agency" : "Engineer"} Account
              </Link>{" "}
            </p>
          </div>
          <div>
            <p className="text-sm">
              Already have an account?{" "}
              <Link to={`/login/${role}`} className="hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
