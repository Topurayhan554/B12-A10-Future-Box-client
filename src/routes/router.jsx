import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import MainLayout from "../layouts/MainLayout";
import PetAndSupplies from "../pages/PetAndSupplies/PetAndSupplies";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddList from "../pages/AddList/AddList";
import MyList from "../pages/MyList/MyList";
import MyOrders from "../pages/MyOrders/MyOrders";
import PrivateRoute from "./PrivateRouter";
import SeeDetails from "../pages/SeeDetails/SeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`http://localhost:3000/recent-listing`),
      },
      {
        path: "/pet-supplies",
        element: <PetAndSupplies />,
        loader: () => fetch(`http://localhost:3000/listing`),
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
        path: "/see-details/:id",
        element: <SeeDetails />,
      },
      {
        path: "/add-list",
        element: (
          <PrivateRoute>
            <AddList />
          </PrivateRoute>
        ),
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
