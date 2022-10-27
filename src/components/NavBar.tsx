import {Nav,Sair,SpanOla,LogoImg} from "./NavBar.style"
import logo from '../assets/img/logo.svg'

function Navbar(){
    return(
        <Nav>
            <LogoImg src={logo} alt="logo"/>
            <div>
                <SpanOla>Olá, <SpanOla>usuário | </SpanOla></SpanOla>      
                <Sair>sair</Sair>
            </div>             
        </Nav>     
    )    
}

export default Navbar;