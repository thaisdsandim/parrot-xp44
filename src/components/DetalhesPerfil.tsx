import { Dados, DetalhesStyle, EditarPerfil } from "./DetalhesPerfil.style";
import avatar from "../assets/avatar.png"

type DetalhesProps = {
    id: number;
    nome: string;
    apartment: number;
    email: string;
    posts: number;
}

const Detalhes = (props: DetalhesProps) => {
    return (
        <DetalhesStyle>
          <div className='d-flex justify-content-between'>
            <div className="row align-items-center">
              <img src={avatar} alt="foto perfil" className='col-lg-6 col-md-6 col-sm-6 col-6' />
              <Dados className='d-flex flex-column col-lg-6 col-md-6 col-sm-6 col-6'>
                <h1>{props.nome}</h1>
                <p>{props.apartment}</p>
                <p>{props.email}</p>
                <p><pre>{props.posts}</pre> {props.posts > 1 ? "publicações" : "publicação"}</p>
              </Dados>
            </div>
            
            <div>
              <EditarPerfil to={`/edit/${props.id}`}>
                <p>editar perfil</p>
              </EditarPerfil>
            </div>
          </div>
        </DetalhesStyle>
      )
}

export default Detalhes;