import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh] text-center flex-col space-y-4 max-w-6xl mx-auto flex items-center justify-center">
        <h1 className="text-6xl font-semibold font-display">
          Hire top talent for your next project, fast and affordably.
        </h1>
        <p className="max-w-lg text-gray-600">
          HireTalent is a platform that connects businesses with top talent in
          the industry. We have a pool of talented engineers that can help you
          with your next project.
        </p>
        <Button>
          <Link to="/register/agency">
            Let's setup your agency account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline ml-2 size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
