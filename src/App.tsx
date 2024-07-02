import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Registro } from "./pages/register";
import { Academias } from "./pages/academias";
import { Planos } from "./pages/planos";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planos",
        element: <Planos />,
      },
      {
        path: "/academias/:id",
        element: <Academias />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registro />,
  },
]);

export { router };
