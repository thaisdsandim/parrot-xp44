import { createBrowserRouter } from "react-router-dom";

import Perfil from "../pages/Perfil";
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path: "/:id",
        element: <Home />,
    },
    {
        path: '/profile/:id',
        element: <Perfil />
    },
]);

export default router;