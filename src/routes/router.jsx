import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import MainLayout from "../layouts/MainLayout";
import PetAndSupplies from "../pages/PetAndSupplies/PetAndSupplies";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pet-supplies",
        element: <PetAndSupplies />,
      },

      //   login & register
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
