import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logoGmFit.png";
import { FiUser, FiLogIn } from "react-icons/fi";

export function Header() {
  const { signed, loadingAuth } = useContext(AuthContext);

  return (
    <div className="w-full flex items-center justify-center h-28 bg-gray-950 mb-10 sticky top-0 shadow-xl shadow-slate-300">
      <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img src={logoImg} alt="Logo do site" className="h-28" />
        </Link>

        {!loadingAuth && !signed && (
          <Link to="/login">
            <div className="border-2 border-white rounded-full p-1">
              <FiUser size={22} color="#fff" />
            </div>
          </Link>
        )}

        {!loadingAuth && signed && (
          <Link to="/login">
            <div className="border-2 border-white rounded-full p-1">
              <FiLogIn size={22} color="#fff" />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
