import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "../ui/Button";
import { pocketbase } from "../../config";
import Avvvatars from "avvvatars-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AgencyNavbar = () => {
  const navigationLinks = [
    {
      name: "Overview",
      to: "/",
    },
    {
      name: "Browse Talent",
      to: "/browse",
    },
    {
      name: "Interviews",
      to: "/interviews",
    },
    {
      name: "Hires",
      to: "/hires",
    },
  ];
  const user = pocketbase.authStore.model;
  return (
    <nav className="sticky top-0 flex items-center justify-between p-2 bg-white border-b dark:bg-neutral-800">
      <div className="flex items-center gap-12">
        <Link to="/">
          <svg
            width="40"
            height="auto"
            viewBox="0 0 50 39"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              stopColor="#000000"
            ></path>
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              stopColor="#000000"
            ></path>
          </svg>
        </Link>
        <div class="flex items-center gap-2">
          {navigationLinks.map((link) => {
            return (
              <Link
                className="px-4 py-2 text-sm transition-all rounded-md hover:bg-gray-100"
                to={link.to}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <span className="cursor-pointer">
              {" "}
              <Avvvatars value={user?.name} />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AgencyNavbar;
