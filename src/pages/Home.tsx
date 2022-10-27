import { useParams } from "react-router-dom";
import Header from "../components/Header";
import userList from "../assets/user.json";
import NewPost from "../components/NewPost";
import Post from "../components/Post";
import brothers from "../assets/brothers.json";


function Home() {
  const { id } = useParams();
  const { users } = userList;

  const { vizinhanca } = brothers;

  return (
    <>
      <Header
        userName={users.find((user) => String(user.id) == id)?.name}
      />
      <NewPost />

      {vizinhanca.map((vizinhanca) => 
      
      (
        
        <Post key={vizinhanca.id} id={vizinhanca.id} nome={vizinhanca.nome} apartment={vizinhanca.apartment} timestamp={vizinhanca.timestamp} post={vizinhanca.post}/>

      ))}

    </>
  );
}

export default Home;
