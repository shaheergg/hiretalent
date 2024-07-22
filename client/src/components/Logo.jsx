import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex text-[#312f32] items-center gap-4">
      <svg
        width="50"
        height="39"
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
      <h2 className="text-4xl font-semibold">HireTalent</h2>
    </Link>
  );
};

export default Logo;
