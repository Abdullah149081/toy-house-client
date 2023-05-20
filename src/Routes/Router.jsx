import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import ErrorPage from "../page/shared/ErrorPage/ErrorPage";
import Login from "../page/shared/Login/Login/Login";
import Register from "../page/shared/Login/Register/Register";
import ProductDetail from "../page/shared/ProductDetail/ProductDetail";

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
        path: "/view-details/:id",
        element: <ProductDetail />,
        loader: ({ params }) => fetch(`http://localhost:5000/toyProducts/${params.id}`),
      },
    ],
  },
]);

export default router;
