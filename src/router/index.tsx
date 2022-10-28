import { createBrowserRouter } from "react-router-dom";

import Perfil from "../pages/Perfil";
import Home from "../pages/Home";
import Login from "../pages/login";
import Cadastro from "../features/cadastro/Cadastro";

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Perfil />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export default router;
