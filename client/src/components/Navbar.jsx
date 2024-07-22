import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Logo />
      <div className="flex items-center justify-center flex-1 gap-8">
        <Link to="/pricing" className="hover:underline">
          Pricing
        </Link>
        <Link to="/use-cases" className="hover:underline">
          Use Cases
        </Link>
        <Link to="/browse" className="hover:underline">
          Browse Talent
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
            Join As
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link className="w-full" to="/register/engineer">
                Engineer
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" to="/register/agency">
                Agency
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Sign In</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
