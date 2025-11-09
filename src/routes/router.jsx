import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import MainLayout from "../layouts/MainLayout";
import PetAndSupplies from "../pages/PetAndSupplies/PetAndSupplies";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddList from "../pages/AddList/AddList";
import MyList from "../pages/MyList/MyList";
import MyOrders from "../pages/MyOrders/MyOrders";

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
      {
        path: "/add-list",
        element: <AddList />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
