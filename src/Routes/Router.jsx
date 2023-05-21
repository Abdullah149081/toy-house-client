import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import AddToy from "../page/shared/AddToy/AddToy";
import ErrorPage from "../page/shared/ErrorPage/ErrorPage";
import Login from "../page/shared/Login/Login/Login";
import Register from "../page/shared/Login/Register/Register";

import AllToy from "../page/shared/AllToy/AllToy";
import MyToys from "../page/shared/MyToys/MyToys";
import ProductDetail from "../page/shared/ProductDetail/ProductDetail";
import UpdateToy from "../page/shared/UpdateToy/UpdateToy";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/all-toys",
        element: <AllToy />,
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoutes>
            <AddToy />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateToy />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toyProducts/${params.id}`),
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetail />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toyProducts/${params.id}`),
      },
    ],
  },
]);

export default router;
