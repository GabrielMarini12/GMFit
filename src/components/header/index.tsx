import { Link } from "react-router-dom";
import Logo from "../../assets/logo-academia.png";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Logo do site" />
        </Link>
      </nav>
    </header>
  );
}
