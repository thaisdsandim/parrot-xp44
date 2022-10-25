import { PostStyle, PostForms } from "./NewPost.style";
import avatar from '../assets/avatar.png'

type NewPostProps = {}

const NewPost = (props: NewPostProps) => {


    return (
        <PostStyle className='row'>
            <img src={avatar} className='col-lg-2 col-md-2 col-sm-2 col-3' alt="foto de perfil avatar"/>
            
            <PostForms className='col-lg-10 col-md-10 col-sm-10 col-9'>
                <label htmlFor="post"></label>
                <textarea name='post' />
                <input type="submit" value='publicar' />
            </PostForms>

        </PostStyle>
    );

};

export default NewPost;