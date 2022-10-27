import { useParams } from "react-router-dom";
import Header from "../components/Header";
import brothers from "../assets/brothers.json";
import Post from "../components/Post";
import Detalhes from "../components/DetalhesPerfil";

interface PerfilProps {

}

const Perfil = (props: PerfilProps) => {

    const { vizinhanca } = brothers;

    const { id } = useParams();

    const usuarios = vizinhanca.filter(vizinho => vizinho.id === Number(id));

    const posts = usuarios.length;

    const dadosIndex = usuarios[0];
    
    return (
        <>
            <Header />
            <Detalhes nome={dadosIndex.nome} apartment={dadosIndex.apartment} email={dadosIndex.email} id={Number(id)} posts={posts} />

            {usuarios.map((usuario) => (
                <Post key={id} id={Number(id)} nome={usuario.nome} timestamp={usuario.timestamp} apartment={usuario.apartment} post={usuario.post} />))}

        </>
    )

}

export default Perfil;