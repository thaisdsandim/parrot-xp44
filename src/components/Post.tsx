import avatar from "../assets/avatar.png";
import { PostInfo } from "./Post.style";
import { Link } from 'react-router-dom';


interface PostProps {
    id: number;
    nome: string;
    apartment: number;
    timestamp: string;
    post: string;
}

const Post = (props: PostProps) => {
    return (
        <PostInfo className='container'>
            <div className="row align-items-center">
                <img src={avatar} alt="foto perfil" className='col-lg-2 col-md-2 col-sm-2 col-3' />
                <div className='d-flex flex-column col-lg-10 col-md-10 col-sm-10 col-9 '>
                    <Link to={`/${props.id}`}>{props.nome}-{props.apartment}</Link>
                    <p>{props.timestamp}</p> <br />
                    <p className='post'>{props.post}</p>
                </div>
            </div>
        </PostInfo>
    )
}

export default Post;