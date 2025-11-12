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
import CategoriesSection from "../pages/CategoriesSection/CategoriesSection";
import EditList from "../pages/EditList/EditList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`http://localhost:3000/recent-listing`),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/pet-supplies",
        element: <PetAndSupplies />,
        loader: () => fetch(`http://localhost:3000/listing`),
        hydrateFallbackElement: <LoadingSpinner />,
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
        element: (
          <PrivateRoute>
            <SeeDetails />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-listing/:id",
        element: (
          <PrivateRoute>
            <EditList />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/categories/:category",
        element: (
          <PrivateRoute>
            <CategoriesSection />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
