import { Link, useParams } from "react-router-dom";
import logo from "../assets/navLogo.png";
import { Nav } from "./Header.style";

type HeaderProps = {
  userName?: string;
};

function Header(props: HeaderProps) {
  const { id } = useParams();
  
  return (
    <Nav className="nav">
      <Link to={`/${id}`}>
        <img src={logo} className="navLogo" />
      </Link>
      <div className="navLinks">
        <Link to={`/profile/${id}`} className="user">
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
