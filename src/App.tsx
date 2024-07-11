import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Registro } from "./pages/register";
import { Academias } from "./pages/academias";
import { Planos } from "./pages/planos";
import { Checkout } from "./pages/checkout";

import { Layout } from "./components/layout";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planos/:id",
        element: (
          <Private>
            <Planos />
          </Private>
        ),
      },
      {
        path: "/academias/:id",
        element: (
          <Private>
            <Academias />
          </Private>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <Private>
            <Checkout />
          </Private>
        ),
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
