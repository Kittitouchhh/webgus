import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="mt-1 bg-gray-400 border-3 border-black text-white py-4 shadow-lg">
      <div className="w-[90%] md:w-[80%] m-auto flex items-center justify-between">
        <nav
          className={"m-auto text-[18px] lg:text-[30px]"}
        >
          <Link
            to="/Home"
            className=" hover:text-red-500 transition-colors hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/Profile"
            className="hover:text-red-500 transition-colors hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md"
          >
            Profile
          </Link>
          <Link
            to="/Contact"
            className="hover:text-red-500 transition-colors hover:bg-white hover:bg-opacity-10 px-4 py-2 rounded-md"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
