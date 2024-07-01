import { Link } from "react-router-dom";
import logoImg from "../../assets/logo-academia.png";
import { FiUser } from "react-icons/fi";

export function Header() {
  return (
    <div className="w-full flex items-center justify-center h-28 bg-gray-950 mb-4">
      <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img src={logoImg} alt="Logo do site" className="h-64" />
        </Link>

        <Link to="/login">
          <div className="border-2 border-white rounded-full p-1">
            <FiUser size={22} color="#fff" />
          </div>
        </Link>
      </header>
    </div>
  );
}
