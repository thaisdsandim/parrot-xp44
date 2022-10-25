import { Link } from "react-router-dom";
import logo from "../assets/navLogo.png";
import { Nav } from "./Header.style"

type HeaderProps = {
  userName?: string;
};

function Header(props: HeaderProps) {
  return (
    <Nav className="nav">
      <Link to="#">
        <img src={logo} className="navLogo" />
      </Link>
      <div className="navLinks">
        <Link to="#" className="user">
          Olá, {props.userName ? props.userName : "Usuário"} |{" "}
        </Link>
        <Link to="#" className="btn-goBack">
          Sair
        </Link>
      </div>
    </Nav>
  );
}

export default Header;
