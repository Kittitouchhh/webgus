import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="w-full bg-[#181818] p-4 flex justify-center">
      <nav className="flex gap-8 text-white text-[15px] font-medium">
        <Link to="/Home" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Home</Link>
        <Link to="/Profile" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Profile</Link>
        <Link to="https://github.com/Kittitouchhh" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Github</Link>
        <Link to="/Contact" className="hover:text-violet-400 transition hover:bg-white p-3 rounded">Contact</Link>
      </nav>
    </div>
  );
}
