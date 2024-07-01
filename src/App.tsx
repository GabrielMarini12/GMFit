import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Registro } from "./pages/register";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
