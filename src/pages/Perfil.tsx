import { useParams } from "react-router-dom";
import Header from "../components/Header";
import brothers from "../assets/brothers.json";
import Post from "../components/Post";
import Detalhes from "../components/DetalhesPerfil";
import userList from "../assets/user.json";
import WtPost from "../components/WithoutPost";

interface PerfilProps {

}

const Perfil = (props: PerfilProps) => {

    const { vizinhanca } = brothers;

    const { id } = useParams();
    const { users } = userList;
    const usuarios = vizinhanca.filter(vizinho => vizinho.id === Number(id));

    const posts = usuarios.length;

    const dadosIndex = usuarios[0];

    return (
        <>
            <Header
                userName={users.find((user) => String(user.id) == id)?.name} />
            <Detalhes nome={dadosIndex.nome} apartment={dadosIndex.apartment} email={dadosIndex.email} id={Number(id)} posts={posts} />

            {posts > 0 ? (
                <>
                    {usuarios.map((usuario) => (
                        <Post key={id} id={Number(id)} nome={usuario.nome} timestamp={usuario.timestamp} apartment={usuario.apartment} post={usuario.post} />))}
                </>
            ) :
                <>
                    <WtPost />
                </>
            }
        </>
    );

};

export default Perfil;