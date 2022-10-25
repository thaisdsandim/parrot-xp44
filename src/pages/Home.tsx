import { useParams } from "react-router-dom";
import Header from "../components/Header";
import userList from "../assets/user.json";

function Home() {
  const { idUser } = useParams();
  const { users } = userList;

  return (
    <>
      <Header
        userName={users.find((user) => String(user.id) == idUser)?.name}
      />
    </>
  );
}

export default Home;
