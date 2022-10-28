import { NoPost } from "./WithoutPost.style";

type WtPostProps = {

}

const WtPost = ((props: WtPostProps) => {
    return (
        <NoPost>
            <h1 className="row align-items-center">
                Você ainda não fez nenhuma publicação :/
            </h1>
        </NoPost>
    );
});

export default WtPost;