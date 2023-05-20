import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import AddToy from "../page/shared/AddToy/AddToy";
import ErrorPage from "../page/shared/ErrorPage/ErrorPage";
import Login from "../page/shared/Login/Login/Login";
import Register from "../page/shared/Login/Register/Register";

import MyToys from "../page/shared/MyToys/MyToys";
import ProductDetail from "../page/shared/ProductDetail/ProductDetail";
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
