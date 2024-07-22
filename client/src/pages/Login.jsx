import Logo from "@/components/Logo";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Link, useParams } from "react-router-dom";

const Login = () => {
  const { role } = useParams();

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-xl p-4 px-6 py-10 mx-auto space-y-6 border rounded">
        <div>
          <Logo />
          <span className="text-right capitalize">{role}</span>
        </div>
        <form className="w-full space-y-4">
          <div className="block w-full space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div className="block w-full space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div className="block w-full space-y-2">
            <Button className="w-full">Login</Button>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Are you an {role === "engineer" ? "Agency" : "Engineer"}? Login to
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
              Don't have an account?{" "}
              <Link to={`/register/${role}`} className="hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
